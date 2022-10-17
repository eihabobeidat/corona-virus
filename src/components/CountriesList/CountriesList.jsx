import React, { useState, useEffect } from 'react';
import { FormControl, Input, Grid, Card, Button, Typography } from '@material-ui/core';
import { fetchCountries } from '../../api';
import cx from 'classnames';
import styles from './CountriesList.module.css';
import CountryCard from '../Cards/SecondCard/CountryCard';

const CountriesList = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const fetchAPI = async () => {
    const countryStringList = await fetchCountries()
    setCountries(countryStringList);
    setfiltered(countryStringList);
  };

  const handleChange = (text) => {
    setfiltered(countries.filter(country => country.toLowerCase().includes(text.currentTarget.value.toLowerCase())))
  }

  const HandleAscPress = () => {
    setfiltered([...countries])
  }

  const HandleDescPress = () => {
    setfiltered([...countries].reverse())
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <div className={styles.inputContainer}>
        <Input className={styles.input} placeholder='Search' defaultValue="" onChange={text => handleChange(text)}/>
        <Typography className={styles.rankTitle} >Rank by:</Typography>
        <div  className={styles.rank} >
          <Button variant="outlined" onClick={HandleAscPress}>Asc</Button>
          <Button variant="outlined" onClick={HandleDescPress}>Desc</Button>
        </div>
        
      </div>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "30px"}}
      >
        {filtered.map((country, index) => (          
          <Grid key={index} md={2} component={Card} className={cx(styles.card)}>
          <CountryCard 
            countryName={country}
          />
          </Grid>
        ))}
      </Grid>
        
    </FormControl>
  );
};

export default CountriesList;
