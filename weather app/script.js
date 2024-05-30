const apiKey = "85b0ab7992a38567e9978c2474e92176";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";
//&appid=85b0ab7992a38567e9978c2474e92176
//https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=85b0ab7992a38567e9978c2474e92176&units=metric

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
 
async function checkWeather(){ 
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = math.round(data.main.temp)  + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";  
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"; 
// 

}

searchBtn.addEventListener("click", ()=>{
    // events.preventDefault();
    checkWeather(searchBox.value);
})

