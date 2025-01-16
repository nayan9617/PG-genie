maptilersdk.config.apiKey = maptilerApiKey;

const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.BRIGHT,
    center: pg.geometry.coordinates, // starting position [lng, lat]
    zoom: 15, // starting zoom
});

new maptilersdk.Marker()
    .setLngLat(pg.geometry.coordinates)
    .setPopup(
        new maptilersdk.Popup({ offset: 25 })
            .setHTML(
                `<h3>${pg.title}</h3><p>${pg.location}</p>`
            )
    )
    .addTo(map)

