let main=document.querySelector("#main");
let cityName="Vancouver";
let APIKey="9bde1c5c90b5af86e5bc18f1c2fa010f";
let units = "&#176C";
let article = document.createElement("article");
let playCount=0;
let unitChange="metric";

function play(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=${unitChange}`
    )
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        //article

        let iconAndAside=document.createElement("div");
        let aside=document.createElement("div");
        let icon=document.createElement("div");
        let city=document.createElement("h3");
        let coord=document.createElement("span");
        let description = document.createElement("div");
        let blank = document.createElement("div");
        let temperature = document.createElement("h4");
        let feelsLike=document.createElement("div");
        let tempMin=document.createElement("div");
        let tempMax=document.createElement("div");
        let pressure=document.createElement("div");
        let humidity=document.createElement("div");
        let tempInfo=document.createElement("span");
        let wind=document.querySelector("#wind");
        let angle=document.querySelector("#angle");
        let cloudiness=document.createElement("div");
        let sun=document.querySelector("#sun");
        let windMain=document.createElement("div");
        let windContent=document.createElement("div");
        let sunMain=document.createElement("div");
        let sunContent=document.createElement("div");
        let windDirection=document.createElement("div");
        let sunriseContent=document.createElement("div");
        let sunsetContent=document.createElement("div");
        
        // icon.innerHTML="http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png"
        // icon.innerHTML="http://openweathermap.org/img/wn/10d@2x.png"
        icon.innerHTML="<img src='http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png' alt=''></img>"
        city.innerHTML=data.name+", "+data.sys.country;
        coord.innerHTML='( <i class="fas fa-map-pin"></i> '+data.coord.lat+", "+data.coord.lon+")";
        temperature.innerHTML = data.main.temp + " " + units;
        description.innerHTML = data.weather[0].main;
        blank.innerHTML="";
        tempMin.innerHTML = '<i class="fas fa-arrow-down"></i> ' + data.main.temp_min + " " + units;
        tempMax.innerHTML = '<i class="fas fa-arrow-up"></i> ' + data.main.temp_max + " " + units;
        feelsLike.innerHTML = "Feels Like: " + data.main.feels_like + " " + units;
        pressure.innerHTML = "Pressure: " + data.main.temp;
        humidity.innerHTML = "Humidity: " + data.main.temp;
        cloudiness.innerHTML = "Cloudiness: "+data.clouds.all+"%"
        


        // temps.innerHTML="Temperature: "+data.main.temp+" Minimum Temperature: "+data.main.temp_min+" Maximum Temperature: "+data.main.temp_max+" Feels Like: "+data.main.feels_like;
        article.appendChild(iconAndAside);
        iconAndAside.appendChild(icon);
        iconAndAside.appendChild(aside);
        aside.appendChild(city);
        aside.appendChild(coord);
        aside.appendChild(temperature);
        tempInfo.appendChild(description);
        tempInfo.appendChild(blank);
        tempInfo.appendChild(tempMin);
        tempInfo.appendChild(tempMax);
        
        tempInfo.appendChild(feelsLike);
        tempInfo.appendChild(pressure);
        tempInfo.appendChild(humidity);
        tempInfo.appendChild(cloudiness);
        
        aside.appendChild(tempInfo);
        windMain.appendChild(wind);
        windMain.appendChild(windContent);
        windContent.appendChild(windDirection);
        article.appendChild(windMain);
        
        main.appendChild(article);
        
        sunMain.appendChild(sun);
        sunMain.appendChild(sunContent);
        sunContent.appendChild(sunriseContent);
        sunContent.appendChild(sunsetContent);
        article.appendChild(sunMain);
        
        article.setAttribute("id","article");
        tempInfo.setAttribute("id","tempInfo");
        city.setAttribute("id","city");
        coord.setAttribute("id","coord");
        description.setAttribute("id","description");
        temperature.setAttribute("id","temperature");
        aside.setAttribute("id","aside");
        icon.setAttribute("id","icon");
        iconAndAside.setAttribute("id","iconAndAside")
        blank.setAttribute("class","right");
        tempMax.setAttribute("class","right");
        pressure.setAttribute("class","right");
        cloudiness.setAttribute("class","right");
        windMain.setAttribute("id","windMain");
        sunMain.setAttribute("id","sunMain");
        // angle.style.transform="rotate(-60deg)";
        if (data.wind.deg >= 348 || data.wind.deg <= 11) {
            angle.style.transform = "rotate(-60deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph N";
        } else if (data.wind.deg > 11 && data.wind.deg <= 33) {
            angle.style.transform = "rotate(-37.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph NNE";
        } else if (data.wind.deg > 33 && data.wind.deg <= 56) {
            angle.style.transform = "rotate(-15deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph NE";
        }else if(data.wind.deg>56 && data.wind.deg<=78){
            angle.style.transform = "rotate(7.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph ENE";
        }else if(data.wind.deg>78 && data.wind.deg<=101){
            angle.style.transform = "rotate(30deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph E";
        }else if(data.wind.deg>101 && data.wind.deg<=123){
            angle.style.transform = "rotate(52.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph ESE";
        }else if(data.wind.deg>123 && data.wind.deg<=146){
            angle.style.transform = "rotate(75deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph SE";
        }else if(data.wind.deg>146 && data.wind.deg<=168){
            angle.style.transform = "rotate(97.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph SSE";
        }else if(data.wind.deg>168 && data.wind.deg<=191){
            angle.style.transform = "rotate(120deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph S";
        }else if(data.wind.deg>191 && data.wind.deg<=213){
            angle.style.transform = "rotate(142.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph SSW";
        }else if(data.wind.deg>213 && data.wind.deg<=236){
            angle.style.transform = "rotate(165deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph SW";
        }else if(data.wind.deg>236 && data.wind.deg<=258){
            angle.style.transform = "rotate(187.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph WSW";
        }else if(data.wind.deg>258 && data.wind.deg<=281){
            angle.style.transform = "rotate(210deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph W";
        }else if(data.wind.deg>281 && data.wind.deg<=303){
            angle.style.transform = "rotate(232.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph WNW";
        }else if(data.wind.deg>303 && data.wind.deg<=326){
            angle.style.transform = "rotate(255deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph NW";
        }else if(data.wind.deg>326 && data.wind.deg<348){
            angle.style.transform = "rotate(277.5deg)";
            windDirection.innerHTML=data.wind.speed*3.6+ " kmph NNW";
        }
        count=1;
        // temperature.setAttribute("class","left");
        // tempMin.setAttribute("class", "left");
        // pressure.setAttribute("class", "left");
        // feelsLike.setAttribute("class", "left");
        // tempMax.setAttribute("class", "left");
        // humidity.setAttribute("class", "left");

        // let hours=currentHours.getHours;
        let sunrise=new Date(data.sys.sunrise*1000);
        let sunriseTime=sunrise.toLocaleString("en-US",{hourCycle:"h24",timeStyle:"short"});
        let sunset=new Date(data.sys.sunset*1000);
        let sunsetTime=sunset.toLocaleString("en-US", {hourCycle: "h24",timeStyle: "short"});
        let currentHours = new Date().getHours() - (parseInt(sunriseTime[0]) * 10 + parseInt(sunriseTime[1]));
        let availableTime=(parseInt(sunsetTime[0]) * 10 +parseInt(sunsetTime[1]) - (parseInt(sunriseTime[0]) * 10 + parseInt(sunriseTime[1])));
        let timePassed=availableTime-currentHours;
        let timeRotation;
        if (timePassed>0){
            timeRotation=(currentHours*180/availableTime);
        }else{
            timeRotation=180;
        }
        let sunLocation = document.querySelector("#sunLocation");
        sunLocation.style.transform="rotate("+timeRotation+"deg)";
        sunriseContent.innerHTML="Sunrise: " + sunrise.toLocaleString("en-US",{timeStyle:"short"});
        sunsetContent.innerHTML="Sunset: " + sunset.toLocaleString("en-US", {timeStyle: "short"});
    })
    .catch((error) => console.log(error));
}
play();
function standard() {
    unitChange="standard";
    units = "K";
    if(count==1){
        article.removeChild(article.firstChild);
    }
    
    play();
    console.log(main);
}
function metric() {
    unitChange="metric";
    units = "&#176C";
    if (count == 1) {
        article.removeChild(article.firstChild);
    }
    play();
    console.log(main);
}
function imperial() {
    unitChange="imperial";
    units = "&#176F";
    if (count == 1) {
        article.removeChild(article.firstChild);
    }
    play();
    console.log(main);
}
function cityChange(){
    cityName = document.querySelector("#nav-li-center-search").value;
    if (count == 1) {
        article.removeChild(article.firstChild);
    }
    play();
    console.log(cityName);
}