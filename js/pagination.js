const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KAY = '21d46a0bf94beaf8bd6ee4fa4bb39086';


    fetch('https://jsonplaceholder.typicode.com/photos  ').then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.warn(err);
    });