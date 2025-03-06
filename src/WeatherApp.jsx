import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import { Container, Typography } from '@mui/material';
import './App.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "Haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    
    return (
      <Container maxWidth="sm" className="app-container">
        <Typography variant="h4" className="app-title">🌤️ Weather App by Delta</Typography>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </Container>
    );
} 