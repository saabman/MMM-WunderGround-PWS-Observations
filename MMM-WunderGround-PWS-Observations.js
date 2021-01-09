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

            var spacer = document.createElement("span");
            spacer.innerHTML = "&nbsp;";

            var table_sitrep = document.createElement("table");

            var row_sitrep = document.createElement("tr");


            var windIcon = document.createElement("td");
            if (this.config.windunits == "kph") {
                windIcon.innerHTML = this.windSpeedKph + "<sub>Kph</sub>";
            } else {
                windIcon.className = "wi " + this.windSpeed;
            }
            row_sitrep.appendChild(windIcon);
            row_sitrep.className = "pop";

            var windDirectionIcon = document.createElement("td");
            if (this.config.UseCardinals === 0) {
                windDirectionIcon.className = "wi wi-wind " + this.windDirection;
                windDirectionIcon.innerHTML = "&nbsp;";
            } else {
                windDirectionIcon.innerHTML = this.windDirectionTxt;
            }
            row_sitrep.appendChild(windDirectionIcon);

            var HumidityIcon = document.createElement("td");
            HumidityIcon.className = "wi wi-humidity lpad";
            row_sitrep.appendChild(HumidityIcon);

            var HumidityTxt = document.createElement("td");
            HumidityTxt.innerHTML = this.Humidity + "&nbsp;";
            HumidityTxt.className = "vcen left";
            row_sitrep.appendChild(HumidityTxt);
  
            var RainIcon = document.createElement("td");
            RainIcon.className = "wi wi-umbrella";
            row_sitrep.appendChild(RainIcon);
                        
            var rainfall = document.createElement("td");
            rainfall.innerHTML = " " + this.rainfall + "mm";
            row_sitrep.appendChild(rainfall);
            
            var temperature = document.createElement("span");
            temperature.className = "bright";
            temperature.innerHTML = " " + this.temperature + "&deg;";
            large.appendChild(weatherIcon);
            large.appendChild(temperature);

            wrapper.appendChild(small);
            wrapper.appendChild(large);
            }
	    return wrapper;
    },
	    
    /* processWeather(data)
     * Uses the received data to set the various values.
     *
     * argument data object - Weather information received form openweather.org.
     */

    processWeather: function(data) {
    
		this.windDirection = this.deg2Cardinal(data.observations[0].winddir);
//           this.windDirectionTxt = data.current_observation.wind_dir;
    	this.Humidity = data.observations[0].humidity;
//			 this.Humidity = this.Humidity.substring(0, this.Humidity.length - 1);
//           this.windSpeed = "wi-wind-beaufort-" + this.ms2Beaufort(data.current_observation.wind_kph);
    	this.windSpeedKph = data.observations[0]["metric"].windSpeed;
		this.rainfall = data.observations[0]["metric"].precipTotal;
		console.log (this.rainfall);

    	if (this.config.units == "metric") {
    		this.temperature = data.observations[0]["metric"].temp;
        	var fc_text = 99 //data.forecast.txt_forecast.forecastday[0].fcttext_metric.replace(/(.*\d+)(C)(.*)/gi, "$1°C$3");
        		} else {
        		this.temperature = 100 //data.current_observation.temp_f;
            	var fc_text = 98 //data.forecast.txt_forecast.forecastday[0].fcttext;
            	}

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