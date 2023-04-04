
var markers = [];

mapboxgl.accessToken = apiKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14
});

async function run(){
    // get bus data    
    const locations = await getBusLocations();
    console.log(new Date());
    console.log(locations);

    // add or update bus marker
    addOrUpdateBusMarker(locations);

    // timer
    setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;
}

function addOrUpdateBusMarker(locations) {
    // Loop through the bus locations and add/update markers
    locations.forEach(location => {
        const id = location.id;
        const latitude = location.attributes.latitude;
        const longitude = location.attributes.longitude;
        const direction = location.attributes.direction_id;
        const route = location.relationships.route.data.id;
        
        if (!markers[id]) {
            // Create a new marker if it doesn't exist
            const marker = new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(map);

            markers[id] = marker;
        } else {
            // Update the existing marker's position
            markers[id].setLngLat([longitude, latitude]);
        }
    });
}

run();