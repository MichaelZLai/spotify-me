// API Docs at:
// https://developer.spotify.com/web-api/search-item/
function searchByArtist(keyword) {
  return apiUrl = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
}

function searchByTrack(keyword) {
  return apiUrl = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}

//Meat of the Functionality
$(".submit").on("click", () => {
  event.preventDefault()
  let keyword = $("#search-keyword").val()
  var searchTerm = $("select option:selected").val()

  //Determines Artist or Track search
  if (searchTerm  === "artist") {
    searchByArtist(keyword)
  } else if (searchTerm === "track"){
    searchByTrack(keyword)
    }

  //Makes Ajax calls
  $.ajax({
    type: "GET",
    url: apiUrl,
    dataType: "json"
  }).done((response) => {
    console.log("success")
    


  }).fail((response) => {
    console.log("ajax failed")
  })
})
