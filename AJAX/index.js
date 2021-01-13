cityName = 'Minsk';
api = '72c48c0f5adf93d184585c78c0438cb3';

fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=72c48c0f5adf93d184585c78c0438cb3')
    .then(function(resp){return resp.json() })
    .then(function(data){
        console.log(data);
        document.querySelector('.name_minsk').textContent = data.name;
        document.querySelector('.temp_minsk').innerHTML = Math.round(data.main.temp-273)+ '&deg';
        document.querySelector('.weather_minsk').textContent = data.weather[0]['description'];
    })
    .catch(function (){
        //
    });

cityName = 'Moscow';
api = '72c48c0f5adf93d184585c78c0438cb3';

fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=72c48c0f5adf93d184585c78c0438cb3')
    .then(function(resp){return resp.json() })
    .then(function(data){
        console.log(data);
        document.querySelector('.name_moscow').textContent = data.name;
        document.querySelector('.temp_moscow').innerHTML = Math.round(data.main.temp-273)+ '&deg';
        document.querySelector('.weather_moscow').textContent = data.weather[0]['description'];
    })
    .catch(function (){
        //
    });