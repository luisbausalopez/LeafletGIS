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
	"center": [53, -1],
	"zoom": 13,
	"minZoom": 0,
	"maxZoom": 22,
	"zoomControl": true,
	//"crs": mapCrs,
	"layers": baselayer,
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
	disableClusteringAtZoom: 12,    // default disabled
	maxClusterRadius: 100, // Default 80
	spiderfyDistanceMultiplier: 100, // default 1
	polygonOptions: {
		color: 'yellow',
		weight: 10,
		opacity: 0.9,
		fillOpacity: 0.5
	},
//                iconCreateFunction: function(cluster) {
//                    return new L.DivIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
//                },
	singleMarkerMode: false,     // default false
	attribution: 'bla bla',
	maxZoom: 25,
	minZoom: 1
};

var featureLayer = L.markerClusterGroup(fLayerOpts);
featureLayer.addTo(map);


var featureOptions = {
	
};
var oneFeature = {
	type: "Feature",
	properties: {
		name: "First Feature",
		alt: "",
		title: ""
	},
	geometry: {
		type: "Point",
		crs: 4326,
		coordinates: [-1, 53]
	},
	style: {
		icon: {
			iconUrl: 'img/map-marker-icon.png',
			iconSize: [18, 18],
			iconAnchor: [9, 9]
		}
	},
	options: {
		
	}
};
var otherFeature = {
	type: "Feature",
	properties: {
		name: "First Feature",
		alt: "",
		title: ""
	},
	geometry: {
		type: "Point",
		crs: 4326,
		coordinates: [-1.01, 53.01]
	},
	style: {
		icon: {
			iconUrl: 'img/map-marker-icon.png',
			iconSize: [18, 18],
			iconAnchor: [9, 9]
		}
	},
	options: {
		
	}
};
var feature = L.geoJson.css(oneFeature, featureOptions);
feature.addTo(featureLayer);

feature = L.geoJson.css(otherFeature, featureOptions);
feature.addTo(featureLayer);
