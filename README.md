# MMM-WunderGround-PWS-Observations

A basic module for displaying weather observations from a WunderGound PWS

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

