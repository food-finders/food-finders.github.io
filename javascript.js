const search = (ev) => {
    const term = document.querySelector('#search').value;
    const term2 = document.querySelector('#search2').value;
    price_check = ""
    open = false
    if (document.getElementById("check0").checked) {
      price_check = price_check + "1";
    };
    if (document.getElementById("check1").checked) {
      if (price_check.length > 0) {
        price_check += ", 2";
      } else {
          price_check += "2";
      };
    };
    if (document.getElementById("check2").checked) {
      if (price_check.length > 0) {
        price_check += ", 3"
      } else {
          price_check += "3";
      };
    };
    if (document.getElementById("check3").checked) {
      if (price_check.length > 0) {
        price_check += ", 4";
      } else {
          price_check += "4";
      };
    };
    if (document.getElementById("check4").checked) {
      open = true
    }
    console.log('search for:', term, term2);
    // issue three Spotify queries at once...
    getFood(term, term2, open, price_check);
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getFood(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getFood = (term, term2, open, price_check) => {
  const url = `https://www.apitutor.org/yelp/v3/businesses/search?term=${term2}&location=${term}&open_now=${open}&price=${price_check}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      data = myJson.businesses;
      console.log(data);

      const center = [
        data[0].coordinates.latitude,
        data[0].coordinates.longitude];
    // initialize map:
    var container = L.DomUtil.get('mapid');
      if(container != null){
        container._leaflet_id = null;
      }
    var mymap = L.map('mapid').setView(center, 11);

    // add basemap:
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);

    let i = 0;
    let html = "";

    if (data.length == 0) {
      html = html + `<p>No Food or Locations found.</p>`;
    }
    while (i < 10 && i < data.length) {
        let restaurant = data[i];
        const marker = L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude]).addTo(mymap);
        marker.bindPopup(`
            <b>${restaurant.name}!</b><br>
            ${restaurant.location.display_address}
        `).openPopup();
        let addition = `<section id="restaurant_${i}" class="restaurant">
                          <h3>${restaurant.name}</h3>
                          <h4>${restaurant.location.display_address}</h4>
                          <h5>Rating: ${restaurant.rating}</h5>
                          <h5>Price: ${restaurant.price}</h5>
                          <!--img src="${restaurant.image_url}" -->
                          <div class="pic" style="background-image: url('${restaurant.image_url}');">
                          </div>
                        </section>`;
        html = html + addition;
        i = i + 1;
      }
      document.getElementById("restaurants").innerHTML = html;
    });
};

document.getElementById("search_button").onclick = (ev) => {
  search();
};


document.querySelector('#search2').onkeyup = (ev) => {
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    };
};
