import React, { useState, useEffect } from "react";
import { Select } from 'element-react'
import { Navbar } from "../navigation/navbar";
import { Countries } from "./countries";
import axios from 'axios';
import "./style.scss";

export const MainApp = () => {
  const [options, setOptions] = useState([]);

  const [regions, setRegions] = useState([]);
  const [transformed, setTransformed] = useState([]);
  const [sort, setSort] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    //   let continents = {}
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
        setRegions(res.data);
        // res.data.map((each,index) => continents[each.region] = index)
        // const parsed = Object.keys(continents).filter(i => i != '');
             let arr = []
        for(let i = 0; i <= regions.length; i++) {
            arr.push(regions[i].region)
            const conv = [new Set(arr)]
            console.log([new Set(arr)]);
            const obj = Object.assign({}, conv)
            // setTransformed([...new Set(arr)])
            console.log('object',Object.entries(obj));
            // setTransformed(obj)
            const n = regions.filter(a => a.region === obj.i)
            console.log('truyruy----',n);
        }
    }
    ).catch(err => console.log(err))
  }, []);

  const selectFrom = (name) => {
      const sorted = regions.filter(a => a.region === name);
      setSort(sorted)
  }

//   const groupContinent = (arr) => {
//       const obj = {};
//       for(let i=0; i <= options.length; i++) {
//           options.filter(a => {
//               a.region === 
//           })
//       }
//   }

  return (
    <div className="main-app">
      {/* <Navbar /> */}
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          type="search"
          id="site-search"
          placeholder="Search for a country..."
          name="q"
          aria-label="Search through site content"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
        <Select value={regions} placeholder='Filter by Region' onChange={selectFrom}>
          {regions.map((el) => {
            return (
              <Select.Option key={el.id} label={el.region} value={el.region} />
            );
          })}
        </Select>
      <Countries sorted={sort} search={search}/>
    </div>
  );
};
