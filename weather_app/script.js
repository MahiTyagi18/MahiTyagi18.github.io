document.addEventListener('DOMContentLoaded',()=>{
    
    const selectDrop = document.getElementById('countries');
    fetch('https://restcountries.com/v3.1/all').then(res=>{
        return res.json();
    }).then(data=>{
        let output = "";
        data.forEach(country=>{
            output+=`<option>${country.name.common}</option>`;
            
        })
        selectDrop.innerHTML=output;
    }).catch(err=>{
        console.log(err);
    })
})
let submit=document.getElementById("submit");
let cityname = document.getElementById("city");
let countryname = document.getElementById("country");
let citysearch = document.getElementById("citysearch");
let countrysearch = document.getElementById("countries");
const getWeather = (city,country)=>{
    cityname.innerHTML = city;
    countryname.innerHTML = country;
    let promise1= fetch("http://api.weatherapi.com/v1/forecast.json?key=05df7e481dc3438681360030231502&q="+city+"+"+country+"&days=6&aqi=no&alerts=no");
    promise1.then((response)=>{
        console.log(response.status)
        console.log(response.ok)
        return response.json()
        
    }).then((value2)=>{
        console.log(value2);
        document.getElementById("precip_in").innerHTML=value2.current.precip_in;
        document.getElementById("tz-id").innerHTML= value2.location.tz_id;
        document.getElementById("temp_c").innerHTML= value2.current.temp_c;
        document.getElementById("press").innerHTML= value2.current.pressure_mb;
        document.getElementById("wind_speed").innerHTML= value2.current.wind_mph;
        document.getElementById("wind_degree").innerHTML= value2.current.wind_degree;
        document.getElementById("wind_direc").innerHTML= value2.current.wind_dir;
        document.getElementById("feels_like").innerHTML= value2.current.feelslike_c;
        document.getElementById("vis").innerHTML= value2.current.vis_km;
        document.getElementById("humid").innerHTML= value2.current.humidity;
        document.getElementById("sunset").innerHTML= value2.forecast.forecastday[0].astro.sunset;
        document.getElementById("sunrise").innerHTML= value2.forecast.forecastday[0].astro.sunrise;
        document.getElementById("moonrise").innerHTML= value2.forecast.forecastday[0].astro.moonrise;
        document.getElementById("moonset").innerHTML= value2.forecast.forecastday[0].astro.moonset;
        document.getElementById("cloud_pct").innerHTML= value2.current.cloud;
        document.getElementById("gust").innerHTML= value2.current.gust_mph;
        document.getElementById("min_temp").innerHTML= value2.forecast.forecastday[0].day.mintemp_c;
        document.getElementById("max_temp").innerHTML= value2.forecast.forecastday[0].day.maxtemp_c;
        
        document.getElementById("temp_c2").innerHTML= value2.forecast.forecastday[0].hour[0].feelslike_c;
        document.getElementById("temp_c3").innerHTML= value2.forecast.forecastday[0].hour[4].feelslike_c;
        document.getElementById("temp_c4").innerHTML= value2.forecast.forecastday[0].hour[8].feelslike_c;
        document.getElementById("temp_c5").innerHTML= value2.forecast.forecastday[0].hour[12].feelslike_c;
        document.getElementById("temp_c6").innerHTML= value2.forecast.forecastday[0].hour[16].feelslike_c;
        document.getElementById("temp_c7").innerHTML= value2.forecast.forecastday[0].hour[20].feelslike_c;
        document.getElementById("date6").innerHTML=value2.forecast.forecastday[0].date;
    })
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(citysearch.value,countrysearch.value);

})
getWeather("Delhi","India");