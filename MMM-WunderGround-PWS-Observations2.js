/*	********************************************
*
*	Magic Mirror Module for displaying Weather Underground PWS Observations
*
*	Requires Weather UnderGround API Key available for free for Personal Weather Station 
*	owners.
*	*********************************************
*/

Module.register("MMM-WunderGround-PWS-Observations", {

    // Default module config.
    defaults: {
        apikey: "", //Your private api key available from Wunderground.com [member settings / API Key]
        pws: "", //Your Station ID
        units: config.units,
        updateInterval: 10 * 60 * 1000, // every 10 minutes
        lang: config.language,
        showWindDirection: true,
        retryDelay: 2500,
        apiBase: "https://api.weather.com/v2/pws/observations/",
        socknot: "GET_WUNDERGROUND",
		sockrcv: "WUNDERGROUND",
        },
        
    // Define required translations.
    getTranslations: function() {
        return {
            en: "translations/en.json",
            nl: "translations/nl.json",
            de: "translations/de.json",
            dl: "translations/de.json",
            fr: "translations/fr.json",
            pl: "translations/pl.json"

        };
    },
    getScripts: function() {
        return ["moment.js"];
    },
    
        // Define required Styles.
    getStyles: function() {
        return [
        "weather-icons.css", 
        "weather-icons-wind.css",
        this.file("MMM-WunderGround-PWS-Observations.css")
        ];
    },
        
	 // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);

        // Set locale.
        moment.locale(config.language);
        this.loaded = false;
        this.error = false;
        this.errorDescription = "";
        this.getWunder();
        },
        
	getWunder: function() {
        if ( this.config.debug === 1 ) {
			Log.info("WunderGround: Getting weather.");
		}
        //this.sendSocketNotification("GET_WUNDERGROUND", this.config);
		this.sendSocketNotification(this.config.socknot, this.config);
    },
        
     // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var f;
        var forecast;
        var iconCell;
        var icon;
        var maxTempCell;
        var minTempCell;
        var popCell;
        var mmCell;
        

        
        if (this.config.apikey === "") {
            wrapper.innerHTML = this.translate("APIKEY") + this.name +
                ".";
            wrapper.className = "dimmed light small";
            return wrapper;
        }

        if (this.error) {
            wrapper.innerHTML = "Error: " + this.errorDescription;
            wrapper.className = "dimmed light small";
            return wrapper;
        }

        if (!this.loaded) {
            wrapper.innerHTML = this.translate("LOADING");
            wrapper.className = "dimmed light small";
            return wrapper;
        }
        if (this.config.currentweather === 1) {
            var small = document.createElement("div");
            small.className = "normal medium";
            
            var large = document.createElement("div");
            large.className = "red"; //large light

            var spacer = document.createElement("span");
            spacer.innerHTML = "&nbsp;";

            var table_PWS = document.createElement("table");

            var row_sitrep = document.createElement("tr");
            row_sitrep.className = "large";
			console.log(row_sitrep);
			
			var row2_sitrep = document.createElement("tr");
			row2_sitrep.className = "pop";
			
			var row3_sitrep = document.createElement("tr");
			row3_sitrep.className = "pop";
			
			var row4_sitrep = document.createElement("tr");
			row4_sitrep.className = "pop";

			var row5_sitrep = document.createElement("tr");
			row5_sitrep.className = "pop";
			
			var windIcon = document.createElement("td");
			windIcon.className = "wi wi-windy";
			row_sitrep.appendChild(windIcon);
			
            var wind = document.createElement("td");
            console.log(wind);
            if (this.config.units == "metric") {
                wind.innerHTML = " " + this.windSpeed + "<sub>K/h</sub>";
            } else {
                wind.innerHTML = " " + this.windSpeed + "<sub=>M/h</sub>";
            }
            row_sitrep.appendChild(wind);
            
            var windDirectionIcon = document.createElement("td");
            if (this.config.UseCardinals === 0) {
                windDirectionIcon.className = "wi wi-wind " + this.windDirection;
                //windDirectionIcon.innerHTML = "&nbsp;";
            } else {
                windDirectionIcon.innerHTML = this.windDirectionTxt;
            }
            row_sitrep.appendChild(windDirectionIcon);
            
            var windGustIcon = document.createElement("td");
            windGustIcon.className = "wi wi-strong-wind";
            row_sitrep.appendChild(windGustIcon);
            
            var windGust = document.createElement("td");
            windGust.innerHTML = this.windGust;
            windGust.className = "vcen left";
            row_sitrep.appendChild(windGust);
			
            var HumidityIcon = document.createElement("td");
            HumidityIcon.className = "wi wi-humidity lpad";
            row2_sitrep.appendChild(HumidityIcon);

            var HumidityTxt = document.createElement("td");
            HumidityTxt.innerHTML = this.Humidity + "&nbsp;";
            HumidityTxt.className = "vcen left";
            row2_sitrep.appendChild(HumidityTxt);
            
            var UVIcon = document.createElement("td");
            UVIcon.className = "wi wi-hot";
            row4_sitrep.appendChild(UVIcon);
            
            var UVTxt = document.createElement("td");
            UVTxt.innerHTML = this.UV;//this.UV;
            UVTxt.className = "vcen left";
            row4_sitrep.appendChild(UVTxt);
  
            var RainIcon = document.createElement("td");
            RainIcon.className = "wi wi-umbrella";
            row3_sitrep.appendChild(RainIcon);
                        
            var rainfall = document.createElement("td");
            rainfall.innerHTML = this.rainfall + "mm";//this.rainfall
            rainfall.className = "vcen left";
            row3_sitrep.appendChild(rainfall);
            
            var rainRateIcon = document.createElement("td");
            rainRateIcon.className = "wi wi-raindrops";
            row3_sitrep.appendChild(rainRateIcon);
            
            var rainRate = document.createElement("td");
            rainRate.innerHTML = this.rainRate + "mm/h "; //this.rainRate
            rainRate.className = "vcen left";
            row3_sitrep.appendChild(rainRate);
            
            var heatIndex = document.createElement("td");
            heatIndex.innerHTML = " " + this.heatIndex + "&deg;";
            row5_sitrep.appendChild(heatIndex);
            
            var dewPoint = document.createElement("td");
            dewPoint.innerHTML = " " + this.dewpt + "&deg;";
            row5_sitrep.appendChild(dewPoint);
            
            var windChill = document.createElement("td");
            windChill.innerHTML = " " + this.windChill + "&deg;";
            row5_sitrep.appendChild(windChill);
            
            var pressureIcon = document.createElement("td");
            pressureIcon.className = "wi wi-barometer";
            row2_sitrep.appendChild(pressureIcon);
            
            var pressure = document.createElement("td");
            pressure.innerHTML = this.pressure;
            row2_sitrep.appendChild(pressure);
            
            var temperature = document.createElement("td"); //span
            temperature.className = "yellow";
            temperature.innerHTML = " " + this.temperature + "&deg;";
            //row2_sitrep.appendChild(temperature);
            
        	large.appendChild(temperature);
			wrapper.appendChild(row_sitrep);
			wrapper.appendChild(row2_sitrep);
			wrapper.appendChild(row3_sitrep);
			wrapper.appendChild(row4_sitrep);
			wrapper.appendChild(row5_sitrep);
            wrapper.appendChild(small);
            wrapper.appendChild(large);
            }
            console.log(wrapper);
	    return wrapper;
    },
	    
    /* processWeather(data)
     * Uses the received data to set the various values.
     *
     * argument data object - Weather information received form openweather.org.
     */

    processWeather: function(data) {
    
		this.windDirection = this.deg2Cardinal(data.observations[0].winddir);
    	this.Humidity = data.observations[0].humidity;
		this.UV = data.observations[0].uv;
    
    	this.temperature = data.observations[0][this.config.units].temp;
    	
    	console.log(this.config.units + " " + this.temperature)
    	
    	this.heatIndex = data.observations[0][this.config.units].heatIndex;
    	this.dewpt = data.observations[0][this.config.units].dewpt;
    	this.windChill =data.observations[0][this.config.units].windChill;
    	this.windSpeed = data.observations[0][this.config.units].windSpeed;
    	this.windGust = data.observations[0][this.config.units].windGust;
    	this.pressure = data.observations[0][this.config.units].pressure;
    	this.rainRate = data.observations[0][this.config.units].precipRate;
		this.rainfall = data.observations[0][this.config.units].precipTotal;


        this.loaded = true;
        this.updateDom(this.config.animationSpeed);
        	
    },
    
    /* deg2Cardinal(degrees)
     * Converts wind direction in degrees to directional description
     *
     * argument wind direction in degrees - deg
     *
     * return text
     */

    deg2Cardinal: function(deg) {
        if (deg > 11.25 && deg <= 33.75) {
            return "wi-from-nne";
        } else if (deg > 33.75 && deg <= 56.25) {
            return "wi-from-ne";
        } else if (deg > 56.25 && deg <= 78.75) {
            return "wi-from-ene";
        } else if (deg > 78.75 && deg <= 101.25) {
            return "wi-from-e";
        } else if (deg > 101.25 && deg <= 123.75) {
            return "wi-from-ese";
        } else if (deg > 123.75 && deg <= 146.25) {
            return "wi-from-se";
        } else if (deg > 146.25 && deg <= 168.75) {
            return "wi-from-sse";
        } else if (deg > 168.75 && deg <= 191.25) {
            return "wi-from-s";
        } else if (deg > 191.25 && deg <= 213.75) {
            return "wi-from-ssw";
        } else if (deg > 213.75 && deg <= 236.25) {
            return "wi-from-sw";
        } else if (deg > 236.25 && deg <= 258.75) {
            return "wi-from-wsw";
        } else if (deg > 258.75 && deg <= 281.25) {
            return "wi-from-w";
        } else if (deg > 281.25 && deg <= 303.75) {
            return "wi-from-wnw";
        } else if (deg > 303.75 && deg <= 326.25) {
            return "wi-from-nw";
        } else if (deg > 326.25 && deg <= 348.75) {
            return "wi-from-nnw";
        } else {
            return "wi-from-n";
        }
    },
    
    /* function(temperature)
     * Rounds a temperature to 1 decimal.
     *
     * argument temperature number - Temperature.
     *
     * return number - Rounded Temperature.
     */
    roundValue: function(temperature) {
        return parseFloat(temperature).toFixed(this.config.roundTmpDecs);
    },
    
   /* 
   	*
   	*/
   	 
    socketNotificationReceived: function(notification, payload) {
    	var self = this;

        if ( this.config.debug === 1 ) {
			Log.info('Wunderground received ' + notification);
	}		
			        if (notification === this.config.sockrcv) {
            				if ( this.config.debug === 1 ) {
					Log.info('received ' + this.config.sockrcv);
					Log.info(payload);
					}
            			self.processWeather(JSON.parse(payload));
        			}
	}

});