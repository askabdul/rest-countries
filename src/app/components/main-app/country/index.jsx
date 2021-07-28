import React, { useEffect, useState } from "react";
import { Loading } from "element-react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./style.scss";

export const CountryDetails = (props) => {
  const [display, setDisplay] = useState([]);
const [countryDet, setCountryDet] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/capital/${id}`)
      .then((res) => {
        setDisplay(res.data);
        // console.log("details", res.data);
      })
      .catch((err) => console.log(err));
    console.log(id);
  }, []);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => {
          setCountryDet(res.data)
      })
      .catch((err) => console.log(err));
    //   getCountryDetails('MNE')
  }, []);

  const getCountryDetails = (details) => {
    const borders = countryDet.filter(a => a.alpha3Code === details)
    const p = borders.map(a => a.capital)
    return p
  }

  return (
    <div className="country-details">
      {/* {console.log('id', id)} */}

      <button className="btn" onClick={() => history.goBack()}>
        <i className="fas fa-long-arrow-alt-left"></i>Back
      </button>
      {display.map((one) => {
        return (
          <Loading text="Loading..." loading={!display}>
            <div className="one-country" key={one.area}>
              <img src={one.flag} alt="national flag" />

              <div className="meta" key={one.area}>
                <h2>{one.name}</h2>
                <p>
                  <span>Native Name</span>: {one.nativeName}
                </p>
                <p>
                  <span>Population</span>: {one.population.toLocaleString()}
                </p>
                <p>
                  <span>Region</span>: {one.region}
                </p>
                <p>
                  <span>Sub-Region</span>: {one.subregion}
                </p>
                <p>
                  <span>Capital</span>: {one.capital}
                </p>
              </div>

              <div className="extra">
                <p>
                  <span>Top Level Domain</span>: {one.topLevelDomain}
                </p>
                <p>
                  <span>Currencies</span>:{" "}
                  {one.currencies.map((currency) => {
                    return currency.name + ", ";
                  })}
                </p>
                <p>
                  <span>Languages</span>:{" "}
                  {one.languages.map((language) => {
                    return language.name + ", ";
                  })}
                </p>
              </div>
              <h4>
                <span>Border Countries:</span>
              </h4>
              <div className="border">
                {one.borders.map((each) => {
                  return (
                        
                      <button><a href={`/countries/${getCountryDetails(each)}`}>{each}</a></button>
                    
                  );
                })}
              </div>
            </div>
          </Loading>
        );
      })}
    </div>
  );
};
