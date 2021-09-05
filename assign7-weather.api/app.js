const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
   
}

const searchInputBox = document.getElementById('inp');
const btn=document.querySelector('.search');
btn.addEventListener('click',(event)=>{
    if(searchInputBox.value==""){
        alert("Weather Not Found!!!...Please Enter a valid City Name");
    }
    else{
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather').style.display = "block";
    }
    });

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        if(searchInputBox.value==""){
            alert("Weather Not Found!!!...Please Enter a valid City Name");
        }
        else{
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather').style.display = "block";
        }
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    
    document.querySelector(".humidity").innerText =
      `Humidity : ${weather.main.humidity}%`;
    
    
      document.querySelector(".wind").innerText =
      `Wind speed:${weather.wind.speed} km/h`;

    let minMaxTemp = document.getElementById('range');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('clouds');
    weatherType.innerText = `${weather.weather[0].main}`;
    
    let iconsrc =document.getElementById('icon');
    iconsrc.src=  `https://openweathermap.org/img/wn/${
    weather.weather[0].icon
      }@2x.png`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
   
    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('img3.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('cloudy.jpg')";
        
    } else if(weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('mist.jpg')";
        
    } else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
     document.body.style.backgroundImage ="url('storm.jpg')";
        } 
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
    
}
getWeatherReport("Chandigarh");