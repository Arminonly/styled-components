import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/CountryCards/Card';

import Controls from './components/Controls/Controls';
import Header from './components/Header';
import List from './components/CountryCards/List';
import { ALL_COUNTRIES } from './config';
import Main from './components/Main';

function App() {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description: c.region
                },
                {
                  title: 'Capital',
                  description: c.capital
                }
              ]
            };
            return <Card key={c.name} {...countryInfo} />;
          })}
        </List>
      </Main>
    </>
  );
}

export default App;
