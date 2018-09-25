$(document).ready(function(){

  const API_Key = 'aaa6d9f68e7124fbfe7a8287c068e7ae';
  const base_URL = 'http://ws.audioscrobbler.com/2.0/';
  const URL_prefix = '?method=track.search&track='

  $('#search-button').click(function(){
    Trackster.searchTracksByTitle($('#search-box').val());
  });

  var Trackster = {};

  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {

  };

  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
      console.log(base_URL+URL_prefix+API_Key+`&track=${title}&format=json`);
    $.ajax({
      url: base_URL+URL_prefix+`${title}&api_key=${API_Key}&format=json`,
      datatype: 'jsonp',
      success: function(data){
        console.log(data);
      }
    })
  };

});
