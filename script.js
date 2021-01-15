function weatherBalloon( cityID ) {
    var key = '{c1b304eace80c7e83a452db56deb7317}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    console.log(data);
    })
    .catch(function() {
      // catch any errors
       });
       }
                    
      window.onload = function() {
      weatherBalloon( 6167865 );
    }

    function drawWeather( d ) {
      var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
      
