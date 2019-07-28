
const API_KEY= "TFxyup4jmx6chYM9D71bHH9e6tsc8c7zckikjbDM";


function searchApi (stateCode, listings) {
  let url=`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=${listings}&api_key=${API_KEY}`;
  console.log(url);
  

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(responseJSON){
      $('.results').empty();
      console.log(responseJSON);
  if (responseJSON.total==0){
    $('.results').append(`<h2>Please enter a valid U.S. state code.</h2>`)

  }else{
    for (let i = 0; i < responseJSON.data.length; i ++){
        $('.results').append(`<h2> ${responseJSON.data[i].fullName} </h2>
        <p>${responseJSON.data[i].description}</p>
        <a href="${responseJSON.data[i].url}">${responseJSON.data[i].url}</a>`);

}

  }

  
})
}



function watchForm() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let stateCode= $('#text-input').val();
    console.log(stateCode);

    let listings= $('#listings-input').val();
    console.log(listings);

    searchApi(stateCode, listings);

  })
}


watchForm();