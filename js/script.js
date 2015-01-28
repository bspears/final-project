// Home page---------------------------------
$(document).ready(function() {
  $('#submit').on('click', function() {
    window.location.href = ($('#city').val() + ".html");
});


// City Page------------------------------------
  


  // var locations 

  function Location(name) {
    this.name = name;
  };

  $('.place').text().each(function() {
    new Location(this.text);
  });



  $('.locationDetails').hide();

  $('#restaurant').on('click', function(){
    $('.restaurant').toggleClass('wanted1');
    $('.location-info').hide();
    $('.wanted1').show('slow');
    $('.wanted2').show('slow');
    $('.wanted3').show('slow');
    $('.wanted4').show('slow');
  });
   $('#landmark').on('click', function(){
    $('.landmark').toggleClass('wanted2');
    $('.location-info').hide();
    $('.wanted1').show('slow');
    $('.wanted2').show('slow');
    $('.wanted3').show('slow');
    $('.wanted4').show('slow');
  });
    $('#venue').on('click', function(){
    $('.venue').toggleClass('wanted3');
    $('.location-info').hide();
    $('.wanted1').show('slow');
    $('.wanted2').show('slow');
    $('.wanted3').show('slow');
    $('.wanted4').show('slow');
  });
     $('#outdoor').on('click', function(){
    $('.outdoor').toggleClass('wanted4');
    $('.location-info').hide();
    $('.wanted1').show('slow');
    $('.wanted2').show('slow');
    $('.wanted3').show('slow');
    $('.wanted4').show('slow');
  });

  $('#filterButton').on('click', function() {
    $('input:checked').prop('checked', false);
    $('.location-info').show().removeClass('wanted1 wanted2 wanted3 wanted4');
  });   


//Seattle listeners-----------------------------------------
  $('#gasworksExpand').on('click', function() {
    $('#gasworksDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();
  });

  $('#spaceNeedleExpand').on('click', function() {
    $('#spaceNeedleDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

  $('#pikePlaceExpand').on('click', function() {
    $('#pikePlaceDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

//Asheville listeners------------------------------------------
  $('#orangePeelExpand').on('click', function() {
    $('#orangePeelDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();
  });

  $('#nineMileExpand').on('click', function() {
    $('#nineMileDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

  $('#gardensExpand').on('click', function() {
    $('#gardensDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

// Austin listeners ----------------------------------------
  $('#bartonSpringsExpand').on('click', function() {
    $('#bartonSpringsDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();
  });

  $('#alamoExpand').on('click', function() {
    $('#alamoDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

  $('#umlaufExpand').on('click', function() {
    $('#umlaufDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

// New York listeners----------------------------------------
  $('#centralParkExpand').on('click', function() {
    $('#centralParkDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();
  });

  $('#bronxZooExpand').on('click', function() {
    $('#bronxZooDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

  $('#apolloExpand').on('click', function() {
    $('#apolloDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

// Portland listeners-------------------------------------------
  $('#crystalBallExpand').on('click', function() {
    $('#crystalBallDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();
  });

  $('#irvingStreetExpand').on('click', function() {
    $('#irvingStreetDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

  $('#saturdayExpand').on('click', function() {
    $('#saturdayDetails').toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();      
  });

//Comment section JSON
  // function submitComment(event) {
  //   event.preventDefault();

  //   var commentSave = {};

  //   commentSave["commentText"] = $("this.textarea").text();

  //   var commentObj = JSON.stringify(commentSave);

  //   localStorage.setItem(insert, commentObj);
  // }

  // var insert = function() {
  //   $("#spaceNeedleComments").append("<li>" + commentObj + "</li>");
  // }

  // $("#spaceNeedlePost").submit(submitComment);

// Favorite list----------------------------------


// var favList = {
//   locations: [];
// }

// var addFav = function(location) {

// };



// $('#spaceNeedleFav').on('click', addFav);

















});