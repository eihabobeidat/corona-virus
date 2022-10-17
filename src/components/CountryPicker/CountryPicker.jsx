import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Input, Icon } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  const fetchAPI = async () => {
    setCountries(await fetchCountries());
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} inputMode='search'>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
