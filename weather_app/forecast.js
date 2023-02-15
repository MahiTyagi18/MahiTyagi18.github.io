document.addEventListener('DOMContentLoaded',()=>{
    
    const selectDrop1 = document.getElementById('countries1');
    fetch('https://restcountries.com/v3.1/all').then(res=>{
        return res.json();
    }).then(data=>{
        let output1 = "";
        data.forEach(country=>{
            output1+=`<option>${country.name.common}</option>`;
            
        })
        selectDrop1.innerHTML=output1;
    }).catch(err=>{
        console.log(err);
    })
})
let submit1=document.getElementById("submit1");
let cityname1 = document.getElementById("city1");
let countryname1 = document.getElementById("country1");
let citysearch1 = document.getElementById("citysearch1");
let countrysearch1 = document.getElementById("countries1");
const getWeather = (city1,country1)=>{
    cityname1.innerHTML = city1;
    countryname1.innerHTML = country1;
    let promise1= fetch("http://api.weatherapi.com/v1/forecast.json?key=05df7e481dc3438681360030231502&q="+city1+"+"+country1+"&days=6&aqi=no&alerts=no");
    promise1.then((response)=>{
        console.log(response.status)
        console.log(response.ok)
        return response.json()
        
    }).then((value2)=>{
        console.log(value2);
        document.getElementById("temp1").innerHTML= value2.forecast.forecastday[1].day.maxtemp_c;
        document.getElementById("temp2").innerHTML= value2.forecast.forecastday[1].day.mintemp_c;
        document.getElementById("temp3").innerHTML= value2.forecast.forecastday[2].day.maxtemp_c;
        document.getElementById("temp4").innerHTML= value2.forecast.forecastday[2].day.mintemp_c;
        document.getElementById("temp5").innerHTML= value2.forecast.forecastday[3].day.maxtemp_c;
        document.getElementById("temp6").innerHTML= value2.forecast.forecastday[3].day.mintemp_c;
        document.getElementById("temp7").innerHTML= value2.forecast.forecastday[4].day.maxtemp_c;
        document.getElementById("temp8").innerHTML= value2.forecast.forecastday[4].day.mintemp_c;
        document.getElementById("temp9").innerHTML= value2.forecast.forecastday[5].day.maxtemp_c;
        document.getElementById("temp10").innerHTML= value2.forecast.forecastday[5].day.mintemp_c;
        document.getElementById("date1").innerHTML=value2.forecast.forecastday[1].date;
        document.getElementById("date2").innerHTML=value2.forecast.forecastday[2].date;
        document.getElementById("date3").innerHTML=value2.forecast.forecastday[3].date;
        document.getElementById("date4").innerHTML=value2.forecast.forecastday[4].date;
        document.getElementById("date5").innerHTML=value2.forecast.forecastday[5].date;
        
    })
}
submit1.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(citysearch1.value,countrysearch1.value);

})
getWeather("Delhi","India");