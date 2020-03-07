var data;
var dim = false;
var target = "";
const search = (ev) => {
    const term = document.querySelector('#search').value;
    const term2 = document.querySelector('#search2').value;
    console.log(term2);
    const term3 = document.querySelector('#search3').value;
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
    console.log('search for:', term, term2, term3);
    // issue three Spotify queries at once...
    getFood(term, term2, term3, open, price_check);
    console.log('search for:', term);
    // issue three Spotify queries at once...
    // getFood(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getFood = (term, term2, term3, open, price_check) => {
  console.log(term2);
  if (term2 == '') {
    var url = `https://www.apitutor.org/yelp/v3/businesses/search?term=${term3}&location=${term}&open_now=${open}`;
    if (price_check.length > 0) {
      url = url + `&price=${price_check}`
    }
    returnResults(url);
  }
  else if (term == '') {
    var url = `https://www.apitutor.org/yelp/v3/businesses/search?term=${term3}&location=${term2}&open_now=${open}`;
    if (price_check.length > 0) {
      url = url + `&price=${price_check}`
    }
    returnResults(url);
  }
  else {
    var url = `https://www.apitutor.org/yelp/v3/businesses/search?term=${term3}&location=${term}&open_now=${open}`;
    var url2 = `https://www.apitutor.org/yelp/v3/businesses/search?term=${term3}&location=${term2}&open_now=${open}`;
    if (price_check.length > 0) {
      url = url + `&price=${price_check}`
      url2 = url2 + `&price=${price_check}`
    }
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        data = myJson.businesses;
        console.log(data);
        if (data.length == 0) {
          alert("No results found, please check search terms (open now, price, location)")
          return
        }
        const lat1 = data[0].coordinates.latitude;
        const lon1 = data[0].coordinates.longitude;
        return [lat1, lon1]
      })
      .then((coordinate) => {
        fetch(url2)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            data = myJson.businesses;
            console.log(data);
            if (data.length == 0) {
              alert("No results found, please check search terms (open now, price, location)")
              return
            }
            const lat2 = data[0].coordinates.latitude;
            const lon2 = data[0].coordinates.longitude;
            const lat3 = (coordinate[0] + lat2) / 2
            const lon3 = (coordinate[1] + lon2) / 2
            var url3 = `https://www.apitutor.org/yelp/v3/businesses/search?term=${term3}&latitude=${lat3}&longitude=${lon3}&open_now=${open}`;
            if (price_check.length > 0) {
              url3 = url3 + `&price=${price_check}`
            }
            return url3
          })
          .then((url3) => {
            returnResults(url3);
          //   fetch(url3)
          //     .then((response) => {
          //       return response.json();
          //     })
          //     .then((myJson) => {
          //       data = myJson.businesses;
          //       console.log(data);
          //       if (data.length == 0) {
          //         alert("No results found, please check search terms (open now, price, location)")
          //         return
          //       }
          //       console.log(data);
          //       const center = [
          //         myJson.businesses[0].coordinates.latitude,
          //         myJson.businesses[0].coordinates.longitude
          //     ];
          //
          //     // initialize map:
          //     var container = L.DomUtil.get('mapid');
          //       if(container != null){
          //         container._leaflet_id = null;
          //       }
          //     var mymap = L.map('mapid').setView(center, 13);
          //
          //     // add basemap:
          //     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
          //             maxZoom: 18,
          //             id: 'mapbox.streets'
          //         }).addTo(mymap);
          //
          //     let i = 0;
          //     let html = "";
          //
          //     if (myJson.businesses.length == 0) {
          //       html = html + `<p>No Food or Locations found.</p>`;
          //     }
          //     while (i < 12 && i < myJson.businesses.length) {
          //         let restaurant = myJson.businesses[i];
          //         const marker = L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude]).addTo(mymap);
          //         marker.bindPopup(`
          //             <b>${restaurant.name}!</b><br>
          //             ${restaurant.location.display_address}
          //         `);
          //
          //         let addition = `<section class="restaurant_${i} restaurant">
          //                           <h3 class="restaurant_${i}">${restaurant.name}</h3>
          //                           <h4 class="restaurant_${i}">${restaurant.location.display_address}</h4>
          //                           <span class="hide"><h5 class="restaurant_${i}">Rating: ${restaurant.rating}</h5></span>
          //                           <h5 class="restaurant_${i}">Price: ${restaurant.price}</h5>`;
          //         if (document.getElementById("check4").checked) {
          //               addition = addition + `<h5 class="restaurant_${i}">Open Now</h5>`;
          //         }
          //         addition = addition +
          //                           `<div class="restaurant_${i} preview-pic" style="background-image: url('${restaurant.image_url}');">
          //                           </div>
          //                           <button class="restaurant_${i} info-button">More Info</button>
          //                         </section>`;
          //         html = html + addition;
          //         i = i + 1;
          //       }
          //       document.getElementById("restaurants").innerHTML = html;
          //     });
          // })
      })

    // const lat3 = (lat1 + lat2) / 2
    // const lon3 = (lon1 + lon2) / 2
    // var url3 = `https://www.apitutor.org/yelp/v3/businesses/search?term=${term3}&latitude=${lat3}&longitude=${lon3}&open_now=${open}`;
    // if (price_check.length > 0) {
    //   url3 = url3 + `&price=${price_check}`
    // }

  })
  }
  };

const returnResults = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      data = myJson.businesses;
      console.log(data);
      if (data.length == 0) {
        alert("No results found, please check search terms (open now, price, location)")
        return
      }
      console.log(data);
      const center = [
        myJson.businesses[0].coordinates.latitude,
        myJson.businesses[0].coordinates.longitude
    ];

    // initialize map:
    var container = L.DomUtil.get('mapid');
      if(container != null){
        container._leaflet_id = null;
      }
    var mymap = L.map('mapid').setView(center, 13);

    // add basemap:
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);

    let i = 0;
    let html = "";

    if (myJson.businesses.length == 0) {
      html = html + `<p>No Food or Locations found.</p>`;
    }
    while (i < 12 && i < myJson.businesses.length) {
        let restaurant = myJson.businesses[i];
        const marker = L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude]).addTo(mymap);
        marker.bindPopup(`
            <b>${restaurant.name}!</b><br>
            ${restaurant.location.display_address}
        `);

        let addition = `<section class="restaurant_${i} restaurant">
                          <h3 class="restaurant_${i}">${restaurant.name}</h3>
                          <h4 class="restaurant_${i}">${restaurant.location.display_address}</h4>
                          <h5 class="restaurant_${i}">Price: ${restaurant.price}</h5>
                          <h5 class="restaurant_${i}">Rating: ${restaurant.rating} / 5</h5>`;
        if (document.getElementById("check4").checked) {
              addition = addition + `<h5 class="restaurant_${i} open-now">Open Now</h5>`;
        }
        addition = addition +
                          `<div class="restaurant_${i} preview-pic" style="background-image: url('${restaurant.image_url}');">
                          </div>
                          <button class="restaurant_${i} info-button">More Info</button>
                        </section>`;
        html = html + addition;
        i = i + 1;
      }
      document.getElementById("restaurants").innerHTML = html;
    });
    document.getElementById("back-to-top").style.visibility = "visible";
};


document.getElementById("search_button").onclick = (ev) => {
  search();
  document.getElementById("back-to-top").style.visibility = "visible";
};

document.querySelector('#search').onkeyup = (ev) => {
     console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    };
};

document.querySelector('#search2').onkeyup = (ev) => {
     console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    };
};

document.querySelector('#search3').onkeyup = (ev) => {
     console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    };
};

document.body.addEventListener('click', function (event) {
  let ev_class = event.target.className;
  if (ev_class.includes('restaurant_')) {
    let classes = ev_class.split(" ");
    let r_num = classes[0].substring(11);
    if (target == "") {
      target = classes[0];
    };
    let addition = `<section class="restaurant-expanded" id="popup">
                      <button id="close-button">X</button>
                      <h3>${data[r_num].name}</h3>
                      <h4>${data[r_num].location.display_address}</h4>`;
    if (document.getElementById("check4").checked) {
      addition = addition + `<h5 class="open-now">Open Now</h5>`;
    }
    addition = addition +
                     `<h5>Price: ${data[r_num].price}</h5>
                      <h5>Rating: ${data[r_num].rating} / 5</h5>
                      <h5 class="website-link">Website: <a href="${data[r_num].url}" target="_blank">${data[r_num].name} on Yelp</a></h5>
                      <h5>Phone Number: <span class="phone-expanded">${data[r_num].phone}</span></h5>
                      <div class="pic-expanded" style="background-image: url('${data[r_num].image_url}');"></div>
                    </section>`;
      document.getElementById("r-card").innerHTML = addition;
      document.getElementById("popup").style.visibility = "visible";
      document.getElementById("dimmer").style.filter = "blur(10px)";
      dim = true;
    };
  });

  document.body.addEventListener('click', function (event) {
    let ev_id = event.target.id;
    if (dim == true && ev_id == "close-button") {
      document.getElementById("popup").style.visibility = "hidden";
      document.getElementById("dimmer").style.filter = "blur(0px)";
      dim = false;
      target = "";
    };
  })

  document.body.addEventListener('click', function (event) {
    let ev_class = event.target.className;
    console.log("target = " + target);
    console.log("ev_class = " + ev_class);
    if (ev_class.includes(target) == false) {
      document.getElementById("popup").style.visibility = "hidden";
      document.getElementById("dimmer").style.filter = "blur(0px)";
      dim = false;
      target = "";
    }
  })

  window.onscroll = function() {
    top_button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      top_button.style.display = "block";
    } else {
      top_button.style.display = "none";
    }
  };

  document.body.addEventListener('click', function (event) {
    if (event.target.id.includes("back-to-top")) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  });
