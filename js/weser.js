'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KAY = '21d46a0bf94beaf8bd6ee4fa4bb39086';

export const fetchWeser = city =>
    fetch(`${BASE_URL}?q=${city}&units=metric&lang=uk&appid=${API_KAY}`).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });