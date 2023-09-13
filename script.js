const APIKey = "93f26e3c57081a6210de53b8dcfdfea4";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  console.log(city);
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`
  const response = await fetch(url);
  if(response.status==404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display ="none";
  }else{

  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src ="images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src ="images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src ="images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src ="images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src ="images/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src ="images/snow.png";
  }
 
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";

}
}

searchBtn.addEventListener("click",()=>{
  console.log("click");
    checkWeather(searchBox.value);
})




