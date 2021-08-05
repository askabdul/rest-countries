import React, { useState, useEffect } from "react";
import EventEmitter from "reactjs-eventemitter";
import { Select } from "element-react";
import { Countries } from "./countries";
import axios from "axios";
import "./style.scss";

export const MainApp = () => {

  const [regions, setRegions] = useState([]);
  const [sort, setSort] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //   let continents = {}
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setRegions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const selectFrom = (name) => {
    const sorted = regions.filter((a) => a.region === name);
    setSort(sorted);
  };

  const onClearSelect = () => {
    EventEmitter.dispatch("regions", regions);
  };

  return (
    <div className="main-app">
      {/* <Navbar /> */}
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          type="search"
          className="input"
          id="site-search"
          placeholder="Search for a country..."
          name="q"
          aria-label="Search through site content"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Select
        value={regions}
        placeholder="Filter by Region"
        onChange={selectFrom}
        clearable={true}
        onClear={() => onClearSelect()}
      >
        {regions
          .filter((reg) => reg.population !== 0)
          .map((el) => {
            return (
              <Select.Option key={el.id} label={el.region} value={el.region} />
            );
          })}
      </Select>
      <Countries sorted={sort} search={search} />
    </div>
  );
};
