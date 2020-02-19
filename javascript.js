const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getFood(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getFood = (term) => {
  const url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?term=${term}&location=Evanston, IL`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      const center = [
        myJson[0].coordinates.latitude,
        myJson[0].coordinates.longitude
    ];
    // initialize map:
    const mymap = L.map('mapid').setView(center, 11);

    // add basemap:
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);

    // add markers:
    for (restaurant of myJson) {
        const marker = L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude]).addTo(mymap);
        marker.bindPopup(`
            <b>${restaurant.name}!</b><br>
            ${restaurant.display_address}
        `).openPopup();
    }
      // let i = 0;
      // let html = ""
      // if (myJson.length == 0) {
      //   html = `<p>No Food or Places found.</p>`;
      // }
      // while (i < 10 && i < myJson.length){
      //   let restaurant = myJson[i];
      //   let addition = `<section class="results">
      //                     <h2>${restaurant.name}</h2>
      //                     <h2>${restaurant.display_address}</h2>
      //                     <h3>Rating: ${restaurant.rating}</h3>
      //                     <h3>Price: ${restaurant.price}</h3>
      //                     <img src="${restaurant.image_url}">
      //                   </section>`
      //   html = html + addition;
      //   i = i + 1;
      // }
      document.getElementById("search_results").innerHTML = html;
    });
};

document.getElementById("search_button").onclick = (ev) => {
  search();
};

document.querySelector('#search').onkeyup = (ev) => {
     console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
