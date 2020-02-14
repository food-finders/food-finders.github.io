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
      let i = 0;
      let html = ""
      if (myJson.length == 0) {
        html = `<p>No Food or Places found.</p>`;
      }
      while (i < 10 && i < myJson.length){
        let restaurant = myJson[i];
        let addition = `<section class="results">
                          <h2>${restaurant.name}</h2>
                          <h2>${restaurant.display_address}</h2>
                          <h3>Rating: ${restaurant.rating}</h3>
                          <h3>Price: ${restaurant.price}</h3>
                          <img src="${restaurant.image_url}">
                        </section>`
        html = html + addition;
        i = i + 1;
      }
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
