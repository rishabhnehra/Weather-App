function addtodiv(cityinfo) {
    var cityinfoparse = JSON.parse(cityinfo);
    console.log(cityinfoparse.main.temp);
    document.getElementById("cityConsole").innerHTML = cityinfoparse.main.temp;
}

function getCityName() {
    var c_name = document.getElementById("city_name").value;
    console.log(c_name);
    //console.log("aayush");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+c_name+"&units=metric&APPID=254c30ed731f2f31cee421c582e7a9aa", true);
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               // console.log("aayush");
                console.log(JSON.parse(xhr.responseText));
                addtodiv(xhr.responseText);
            }
        }
    }
    xhr.send(null);
}

export { getCityName, addtodiv };