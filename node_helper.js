/* Magic Mirror
 * Module: MMM-WunderGround-PWS-Observations
 *
 * By SAABman	
 * 2021
 * MIT Licensed.
 */
 

var NodeHelper = require('node_helper');
var request = require('request');
var moment = require('moment');
const exec = require('child_process').exec; 



module.exports = NodeHelper.create({
  start: function () {
    console.log('MMM-WunderGround-PWS-Observations helper started ...');
	this.fetcherRunning = false;
	this.wunderPayload = "";
  },
  
  fetchWunderground: function() {
        var self = this;
        this.fetcherRunning = true; 
        
        var params = "current?stationId="; 
        var wulang = this.config.lang.toUpperCase();
        if (wulang == "DE") {
            wulang = "DL";
        }

        params += this.config.pws;
        params += "&format=json&units=m";
//        params += this.config.units;
        params += "&apiKey=";
        params += this.config.apikey;
        
        var Wurl = this.config.apiBase + params;
        console.log(Wurl);
		if ( this.config.debug === 1 ) {
			console.log(moment().format() + " 4 " + this.name  + ": " + Wurl);
			
			
		}
//		Requests Current weather		
        request({
            url: Wurl,
            method: 'GET'
                }, function(error, response, body) {

                    if (!error && response.statusCode == 200) {
                        this.wunderPayload = body;
                        // console.log(moment().format() + " 5 " + self.name + ": " + body);
                        self.sendSocketNotification('WUNDERGROUND',body);
                    } else {
                        console.log(moment().format() + " 6 " + self.name + ": " + error);
                    }
                        
                    setTimeout(function() {
                        self.fetchWunderground();
                    }, self.config.updateInterval);

                }
        );
        },