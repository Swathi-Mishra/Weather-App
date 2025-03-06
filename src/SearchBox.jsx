import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "87cd53b3f7fd57b6f18d3d87a795cc97";

    let getWeatherInfo = async () => {
    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        
        // Check if city exists in response
        if (jsonResponse.cod !== 200) {
            throw new Error(jsonResponse.message); // Handle invalid city error
        }

        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        console.log(result);
        return result;
    } catch (err) {
        throw new Error("No such place exists!"); // Custom error message
    }
};


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    // let handleSubmit = async (evt) => {
    //     try{
    //     evt.preventDefault();
    //     console.log(city);
    //     setCity("");
    //     let newInfo = await getWeatherInfo();
    //     updateInfo(newInfo);
    //     } catch(err){
    //         setError(true);
    //     }
    // };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false); // Reset error before making a new request
        console.log(city);
    
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // Clear input field if successful
        } catch (err) {
            setError(true);
    
            // Automatically remove the error message after 3 seconds
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
    };
    

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br> <br></br>
            <Button variant="contained" type='submit' >
             Search
            </Button>
            {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    )
    
}