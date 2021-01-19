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
			<td>Displays hunidity data<br>
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
			<td><code>fade</code></td>
			<td>Fade the future events to black. (Gradient)<br>
				<br><b>Possible values:</b> <code>true</code> or <code>false</code>
				<br><b>Default value:</b> <code>true</code>
			</td>
		</tr>
		<tr>
			<td><code>fadePoint</code></td>
			<td>Where to start fade?<br>
				<br><b>Possible values:</b> <code>0</code> (top of the list) - <code>1</code> (bottom of list)
				<br><b>Default value:</b> <code>0.25</code>
			</td>
		</tr>
		<tr>
			<td><code>initialLoadDelay</code></td>
			<td>The initial delay before loading. If you have multiple modules that use the same API key, you might want to delay one of the requests. (Milliseconds)<br>
				<br><b>Possible values:</b> <code>1000</code> - <code>5000</code>
				<br><b>Default value:</b>  <code>0</code>
			</td>
		</tr>
		<tr>
			<td><code>retryDelay</code></td>
			<td>The delay before retrying after a request failure. (Milliseconds)<br>
				<br><b>Possible values:</b> <code>1000</code> - <code>60000</code>
				<br><b>Default value:</b>  <code>2500</code>
			</td>
		</tr>
		<tr>
			<td><code>alerttime</code></td>
			<td>The amount of time the alert is duisplayed. (Milliseconds)<br>
				<br><b>Possible values:</b> <code>1000</code> - <code>60000</code>
				<br><b>Default value:</b>  <code>10000</code>
			</td>
		</tr>
		<tr>
			<td><code>alerttruncatestring</code></td>
			<td>Truncates the aletr text at the defined word (Milliseconds)<br>
				<br><b>Possible values:</b> <code>any string</code>
				<br><b>Default value:</b>  <code></code>
			</td>
		</tr>
		<tr>
			<td><code>roundTmpDecs</code></td>
			<td>Rounds off the current temperature display<br>
				<br><b>Possible values:</b> <code>number</code>
				<br><b>Default value:</b>  <code>1</code>
			</td>
		</tr>
		<tr>
			<td><code>windunits</code></td>
			<td>Which units to use for windspeed<br>
				<br><b>Possible values:</b> <code>"mph" or "bft"</code>
				<br><b>Default value:</b>  <code>"bft"</code>
			</td>
		</tr>
		<tr>
			<td><code>UseCardinals</code></td>
			<td>Toggles the use of winddirection arrow or cardinals<br>
				<br><b>Possible values:</b> <code>0 or 1</code>
				<br><b>Default value:</b>  <code>0</code>
			</td>
		</tr>
		<tr>
			<td><code>layout</code></td>
			<td>Chooses the layout option<br>
				<br><b>Possible values:</b> <code>"horizontal" or "vertical"</code>
				<br><b>Default value:</b>  <code>"vertical"</code>
			</td>
		</tr>
		<tr>
			<td><code>iconset</code></td>
			<td>Selects the style of icons to show<br>
				<br><b>Possible values:</b> <code>"colourful", "dark", "flat_black", "flat_colourful", "flat_white", "light", "novacon", "sketchy", "VCloudsWeatherIcons", "weezle"</code>
				<br><b>Default value:</b> <code>"VCloudsWeatherIcons"</code>
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
