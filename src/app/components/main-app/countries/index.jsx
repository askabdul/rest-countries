import React, { useState, useEffect } from "react";
import { Loading } from "element-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.scss";

export const Countries = (props) => {
  const { sorted, search } = props;

  const [nations, setNations] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setNations(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setNations(sorted);
    // console.log(sorted);
  }, [sorted]);
  return (
    <Loading text="Loading..." loading={!nations}>
      <div className="countries" >
        {nations
          .filter((country) => {
            if (!search) {
              return country;
            } else if (
              country.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return country;
            }
          })
          .map((nation) => {
            return (
              <Link to={`/countries/${nation.capital}`}>
                <div className="country" key={nation.id} id="countries">
                  <img src={nation.flag} alt="" key={nation.id} />

                  <div className="content" key={nation.id} id="content">
                    <h2 title={nation.name}>{nation.name}</h2>
                    <p>
                      <span>Population</span>:{" "}
                      {nation.population.toLocaleString()}
                    </p>
                    <p>
                      <span>Region</span>: {nation.region}
                    </p>
                    <p>
                      <span>Capital</span>: {nation.capital}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </Loading>
  );
};
