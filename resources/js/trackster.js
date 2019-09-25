$(document).ready(function(){

  const API_Key = 'aaa6d9f68e7124fbfe7a8287c068e7ae';
  const base_URL = 'http://ws.audioscrobbler.com/2.0/';
  const URL_prefix = '?method=track.search&track='

  $("#search-box").focus();

  $('#search-button').click(function(){
    $("#logo").addClass("logo-animation");
    Trackster.searchTracksByTitle($('#search-box').val());
    $("#logo").removeClass("logo-animation");
  });

  $('#search-box').keypress(function(event){
    if(event.which==13){
      $("#logo").addClass("logo-animation");
      Trackster.searchTracksByTitle($('#search-box').val());
      $("#logo").removeClass("logo-animation");
    }
  });

  let Trackster = {};

  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {
    $('#main').empty();
    for(let i=0; i<tracks.length; i++){
      const resultHTML =
        `<div class="query-result row">
          <div class="play col-sm-1">
            <a href="${tracks[i].url}"><i class="fa fa-play-circle-o fa-2x"></i></a>
          </div>
          <div class="col col-sm-4">
            <p>${tracks[i].name}</p>
          </div>
          <div class="col col-sm-3">
            <p>${tracks[i].artist}</p>
          </div>
          <div class="col col-sm-2">
            <img src="${tracks[i].image[1]['#text']}">
          </div>
          <div class="col col-sm-2">
            <p>${tracks[i].listeners}</p>
          </div>
        </div>`
      $('#main').append(resultHTML);
    }
  };

  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      url: base_URL+URL_prefix+`${title}&api_key=${API_Key}&format=json`,
      datatype: 'jsonp',
      success: function(data){
        const trackArray = data.results.trackmatches.track;
        Trackster.renderTracks(trackArray);
      }
    })
  };
});
