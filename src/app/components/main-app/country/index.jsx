import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";

export const CountryDetails = () => {
  const [display, setDisplay] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/capital/${id}`)
      .then((res) => {
        setDisplay(res.data);
        console.log("details", res.data);
      })
      .catch((err) => console.log(err));
    console.log(id);
  }, []);

  return (
    <div className="country-details">
      {/* {console.log('id', id)} */}

      <button>
        <i class="fas fa-long-arrow-alt-left"></i>Back
      </button>
      {display.map((one) => {
        return (
          <div className="one-country">
            <img src={one.flag} alt="" />

            <div className="meta">
              <h2>{one.name}</h2>
              <p>
                <span>Native Name</span>: {one.nativeName}
              </p>
              <p>
                <span>Population</span>: {one.population}
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
                <span>Currencies</span>: {one.currencies.map(currency => {
                    return currency.name + ", ";
                })}
              </p>
              <p>
                <span>Languages</span>: {one.languages.map(language => {
                    return language.name + ", ";
                })}
              </p>
            </div>

            <div className="border">
              <h3>
                <span>Border Countries:</span>
              </h3>
              {one.borders.map(each => {
                  return <div className="border-countries">

                  <button>{each}</button>
                  
                </div>
              })}

              
            </div>
          </div>
        );
      })}
    </div>
  );
};
