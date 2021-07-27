import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Flag from "./../../../../assets/flag_us.png";
import axios from "axios";
import "./style.scss";

export const Countries = (props) => {
  const { sorted } = props;

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

  if (nations.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "tomato",
        }}
      >
        Check your connectivity
      </div>
    );
  } else {
    return (
      <div className="countries">
        {nations.map((nation) => {
          return (
              <Link to={`/countries/${nation.capital}`}>
            <div className="country" key={nation.id}>
              <img src={nation.flag} alt="" key={nation.id} />

              <div className="content" key={nation.id}>
                <h2 title={nation.name}>{nation.name}</h2>
                <p>
                  <span>Population</span>: {nation.population}
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
    );
  }
};
