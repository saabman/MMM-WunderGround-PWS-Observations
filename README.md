# MMM-WunderGround-PWS-Observations

A basic module for displaying weather observations from a WunderGound PWS

This project started life as an attempted to get the MMM-Wunderground module from https://github.com/RedNax67/MMM-WunderGround working after the changes to the Wunderground API. I decided to cut it down to just the data provided from your PWS.   

The Weather Icons used in this module are created and maintained by Erik Flowers. v1.0 artwork by Lukas Bischoff. v1.1 - 2.0 artwork by Erik Flowers www.weathericons.io


Requires WunderGround API Key. Available for free for PWS opperators

Your Station ID.

{

    module: 'MMM-WunderGround-PWS-Observations',
    
    position: 'top_right',
    config: {
    
        apikey: '<your WunderGround API Key', // private; don't share!
        pws: '<your slected PWS id>', //
        roundTmpDecs:1,
        sysstat: 0,
        debug: 1,
        currentweather: 1,
        wind: 1,
        humidity: 1,
        UV: 0,
        rain: 1,
        rainRate: 1,
        pressure: 1,
        dewPoint: 1,
        windChill: 1,
        heatIndex: 1,
        temperature: 1,

    }
},

