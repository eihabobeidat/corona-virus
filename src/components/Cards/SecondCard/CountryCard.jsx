import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { fetchData } from '../../../api';
import { useEffect } from 'react';
import { useState } from 'react';
import { colors } from '../../../Theme';

const CountryCard = ({ countryName }) => {
  const [countryInfo, setCountryInfo] = useState(null)

  const handleCountryChange = async (country) => {
    setCountryInfo(await fetchData(country));
    
  }

  useEffect(() => {
    handleCountryChange(countryName)
  }, [])
console.log(countryInfo)
  return (
    <CardContent aria-modal style={{ borderColor:colors.deaths, borderWidth:1}}>
      <Typography color='textPrimary' component="h2"  gutterBottom>
        {countryName}
      </Typography>
     {
      countryInfo && <>
          <Typography color="primary">
            {`${new Date(countryInfo?.lastUpdate).toDateString()}`}
          </Typography>
          <Typography variant="body2" component="p" color={'textSecondary'}>
            {`Cases: ${countryInfo?.confirmed?.value}`}
          </Typography>
          <Typography variant="body2" component="p" color={'textSecondary'}>
            {`Recovered: ${countryInfo?.recovered?.value}`}
          </Typography>
          <Typography variant="body2" component="p" color={'textSecondary'}>
            {`Deaths: ${countryInfo?.deaths?.value}`}
          </Typography>
        </>
      }
    </CardContent>
)
};

export default CountryCard;
