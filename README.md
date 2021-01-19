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

## Configuration options

The following properties can be configured:


<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>apikey</code></td>
			<td>The Weather Underground API key
				<br> This value is <b>REQUIRED</b>
			</td>
        </tr>
		<tr>
			<td><code>wind</code></td>
			<td>Displays wind data<br>
				<br><b>Possible values:</b> <code>1</code> - <code>0</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed
			</td>
		</tr>
		<tr>
			<td><code>humidity</code></td>
			<td>Displays humidity data<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>UV</code></td>
			<td>Displays UV data<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>0</code> (Will not display data)
				<br>This value is optional. By default the data will not be displayed.
			</td>
		</tr>
		<tr>
			<td><code>rain</code></td>
			<td>Displays rain fall data<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>rainRate</code></td>
			<td>Displays rain rate data<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>pressure</code></td>
			<td>Displays atmospheric pressure data<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>dewpoint</code></td>
			<td>Displays dewpoint temperature<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>windChill</code></td>
			<td>Displays wind chill temperature<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>heatIndex</code></td>
			<td>Displays heat index temperature<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>temperature</code></td>
			<td>Displays current temperature<br>
				<br><b>Possible values:</b> <code>0</code> - <code>1</code>
				<br><b>Default value:</b> <code>1</code> (Will display data)
				<br>This value is optional. By default the data will be displayed.
			</td>
		</tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>How often does the content needs to be fetched? (Milliseconds)
				<br>Note that Wunderground updates every 15 minutes maximum. Also free version of API only allows 500 calls per day.
				<br><b>Possible values:</b> <code>1000</code> - <code>86400000</code>
				<br><b>Default value:</b> <code>900000</code> (15 minutes)
			</td>
		</tr>
		<tr>
			<td><code>animationSpeed</code></td>
			<td>Speed of the update animation. (Milliseconds)<br>
				<br><b>Possible values:</b><code>0</code> - <code>5000</code>
				<br><b>Default value:</b> <code>2000</code> (2 seconds)
			</td>
		</tr>
		<tr>
			<td><code>lang</code></td>
			<td>The language of the days.<br>
				<br><b>Possible values:</b> <code>en</code>, <code>nl</code>, <code>ru</code>, etc ...
				<br><b>Default value:</b> uses value of <i>config.language</i>
			</td>
		</tr>
		<tr>
			<td><code>sysstat</code></td>
			<td>Toggle sysinfo display<br>
				<br><b>Possible values:</b> <code>0 or 1</code>
				<br><b>Default value:</b>  <code>0</code>
			</td>
		</tr>
		<tr>
			<td><code>debug</code></td>
			<td>Toggle debug logging<br>
				<br><b>Possible values:</b> <code>0 or 1</code>
				<br><b>Default value:</b>  <code>0</code>
			</td>
		</tr>
	</tbody>
</table>
