var urls = [
    'https://mapbox.s3.amazonaws.com/mapbox-gl-js/dev-pages/mapbox-gl-dev.js',
    'http://localhost:8001/dist/mapbox-gl-dev.js',
    'https://mapbox.s3.amazonaws.com/mapbox-gl-js/dev-pages/mapbox-gl-dev.js',
    'http://localhost:8001/dist/mapbox-gl-dev.js'
];

var duration = 3000;

Benchmark(urls, duration, setup, teardown);

function setup(state, callback) {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWlicmFtIiwiYSI6IkZfak1UWW8ifQ.czocTs_bwAYlC_JxXijA2A';

    // change the area covered by the map map or the pixel density to check if cpu or fill bound
    //Benchmark.util.scaleArea('map', 2);
    //Benchmark.util.scalePixels(2);

    document.getElementById('map').innerHTML = '';
    var map = new mapboxgl.Map({
        container: 'map',
        zoom: 15,
        center: [38.912753, -77.032194],
        style: 'http://localhost:8001/debug/style.json',
        hash: true
    });

    state.map = map;

    Benchmark.util.onMapLoaded(map, function() {
        map.repaint = true;
        callback();
    });
}

function teardown(state, callback) {
    state.map.repaint = false;
    callback();
}
