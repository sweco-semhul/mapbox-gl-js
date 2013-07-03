var DEBUG = true;

var style_json = {
    "mapping": [
        {
            "layer": "water",
            "sort": {
                "water": true
            }
        },
        {
            "layer": "waterway",
            "field": "class",
            "sort": {
                "waterway_major": ["river", "canal"],
                "waterway_minor": "stream"
            }
        },
        {
            "layer": "landuse",
            "field": "class",
            "sort": {
                "landuse_park": "park",
                "landuse_wood": "wood",
                "landuse_school": "school",
                "landuse_cemetery": "cemetery",
                "landuse_industrial": "industrial"
            }
        },
        {
            "layer": "building",
            "sort": {
                "building": true
            }
        },
        {
            "layer": "road",
            "field": "class",
            "sort": {
                "road_large": ["motorway", "main"],
                "road_regular": ["street", "street_limited"]
            }
        }
    ],
    "constants": {
        "land": "#e8e0d8",
        "water": "#73b6e6",
        "park": "#cce5ab",
        "road": "#fefefe",
        "border": "#6d90ab",
        "wood": "#d9dccf"
    },
    "layers": [
        // {
        //     "data": "#background",
        //     "type": "fill",
        //     "color": "water"
        // },
        {
            "data": "water",
            "type": "fill",
            "color": "water"
        }, {
            "data": "waterway_major",
            "type": "fill",
            "color": "water",
            "width": ["linear", 12, 1, 0.5, 0.5]
        }, {
            "data": "waterway_minor",
            "type": "line",
            "color": "water",
            "width": ["linear", 14, 1, 0.5, 0.5]
        }, {
            "data": "landuse_park",
            "type": "fill",
            "color": "park"
        }, {
            "data": "landuse_wood",
            "type": "fill",
            "color": "wood"
        }, {
            "data": "building",
            "type": "fill",
            "enabled": ["min", 14],
            "color": "#F7EEDA",
            "opacity": ["linear", 14, 0, 1, 0, 1]
        }, {
            "data": "road_large",
            "type": "line",
            "color": "road",
            "width": ["exponential", 8, 0.5, 0.2, 1]
        }, {
            "data": "road_regular",
            "type": "line",
            "color": "road",
            "width": ["linear", 12, 0.5, 0.5, 0.5],
            "opacity": ["linear", 12, 0, 1, 0, 1]
        }
    ]
};


domready(function() {
    globalMap = new Map({
        container: document.getElementById('map'),
        canvas: document.getElementById('webgl'),
        labels: document.getElementById('svg'),
        urls: ['/tiles/{z}/{x}/{y}.vector.pbf'],
        zooms: [0, 2, 4, 6, 8, 10, 12, 14],
        zoom: 16,
        lat: 52.521805,
        lon: 13.3974172,
        style: style_json
    });
});