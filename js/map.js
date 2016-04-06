// MAP

//Basemap layer
var blOptions = {
	name: 'Light Grey',
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	maxZoom: 25,
	minZoom: 1
}
var baselayer = L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", blOptions);
//Map options
var mapOptions = {
	"center": [53, -1],		// latitude, longitude
	"zoom": 13,
	"minZoom": 1,
	"maxZoom": 22,
	"zoomControl": true,
	//"crs": mapCrs,
	"layers": baselayer,	// in order to load the map you need to pass it at least one layer, which will be a basemap layer. You can also pass it multiple layers or add them later.
	"attributionControl": true,
	"fadeAnimation": true,
	"zoomAnimation": true,
	"markerZoomAnimation": true,
	"zoomAnimationThreshold": 2
};
//Create map
var map = L.map('map', mapOptions);

//Feature layer with marker clustering
var fLayerOpts = {
	name: 'Name of the Feature layer',
	spiderfyOnMaxZoom: true,    // default true
	showCoverageOnHover: true,     // default true
	zoomToBoundsOnClick: true,     // default true
	removeOutsideVisibleBounds: true,   // true for enhanced performance
	animateAddingMarkers: true,    // default true
	disableClusteringAtZoom: 13,    // default disabled - HERE IT IS WHERE WE DEFINE AT WHICH ZOOM LEVEL WE START CLUSTERING MARKERS
	maxClusterRadius: 100, // Default 80 - HERE WE DEFINE THE RADIUS OF AN INDIVIDUAL CLUSTER
	spiderfyDistanceMultiplier: 100, // default 1
	polygonOptions: {	// THIS IS THE STYLE OF THE POLYGON OF THE CONVEX HULL OF THE CLUSTERED MARKERS
		color: 'yellow',
		weight: 10,
		opacity: 0.9,
		fillOpacity: 0.5
	},
//                iconCreateFunction: function(cluster) {
//                    return new L.DivIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
//                },
	singleMarkerMode: false,     // default false
	attribution: 'FEATURES TO BE CLUSTERED - Luis & Pedro',
	maxZoom: 22,
	minZoom: 4
};

var featureLayer = L.markerClusterGroup(fLayerOpts);
featureLayer.addTo(map);


var featureOptions = {
	
};
var oneFeature = {
	type: "Feature",
	properties: {
		name: "First Feature",
		description: "jojojojo"
	},
	geometry: {
		type: "Point",
		crs: 4326,
		coordinates: [-1, 53]	// longitude, latitude
	},
	style: {
		icon: {
			iconUrl: 'img/map-marker-icon.png',
			iconSize: [18, 18],
			iconAnchor: [9, 9]
		}
	},
	options: {
	},
	popupTemplate: "<div>{name}<br>{description}</div>"
};
var otherFeature = {
	type: "Feature",
	properties: {
		name: "Second Feature",
		description: "jijijijiji"
	},
	geometry: {
		type: "Point",
		crs: 4326,
		coordinates: [-1.01, 53.01]		// longitude, latitude
	},
	style: {
		icon: {
			iconUrl: 'img/map-marker-icon.png',
			iconSize: [18, 18],
			iconAnchor: [9, 9]
		}
	},
	options: {},
	popupTemplate: "<div>{name}<br>{description}</div>"
};
var feature = L.geoJson.css(oneFeature, featureOptions);
feature.addTo(featureLayer);

feature = L.geoJson.css(otherFeature, featureOptions);
feature.addTo(featureLayer);
