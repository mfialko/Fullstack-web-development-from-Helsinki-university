import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SingleCountry = ({ data, buttonOpen, open }) => {

    const { name, population, flag, capital, languages } = data;
    const [ showCountry, setShowCountry ] = useState(false);
    const [ weather, setWeather ] = useState({
        temp: '',
        wind: ''
    });

    const api_key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        setShowCountry(open);
    }, [open]);

    useEffect(() => {
        showCountry && axios
            .get(`https://openweathermap.org/data/2.5/find?q=${capital}&appid=${api_key}`)
            .then(response => {
                let temp = response.data.list[0].main.temp;
                let wind = response.data.list[0].wind.speed;
                setWeather({
                    temp: temp ? temp : '',
                    wind: wind ? wind : ''
                })
            });
    }, [showCountry, capital, api_key]);

    const toggleShow = () => {
        setShowCountry(showState => {
            return !showState;
        });
    }


    return (
        <div>
            <div>
                <span>{name}</span>
                {buttonOpen && <button onClick={toggleShow}>Show</button>}
            </div>
            {showCountry && <div className="countries">
                <div>capital {capital}</div>
                <div>population {population}</div>
                <div>
                    <span className="languages">languages:</span> 
                    <div className="countries">
                        {languages.map(lang => <span key={lang.name}>{lang.name}</span>)}
                    </div>
                </div>
                <div>
                    <img alt="flag" src={flag} className="flag" />
                </div>
                <div>
                    Weather in {capital}
                    <div>
                        <div>Temperature: {weather.temp}</div>
                        <div>Wind speed: {weather.wind}</div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SingleCountry;