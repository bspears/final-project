// Home page---------------------------------
$(document).ready(function() {
  $('#submit').on('click', function() {
    window.location.href = ($('#city').val() + ".html");
  });

  $('.hidden').hide();

  $('.about').on('click', function() {
    $('.hidden').toggleClass('showAbout');
    $('.hidden').hide('slow');
    $('.showAbout').show('slow');
  });


// City Page------------------------------------

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


//   $('#spaceNeedleExpand').on('click', function() {
//     $('#spaceNeedleDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

//   $('#pikePlaceExpand').on('click', function() {
//     $('#pikePlaceDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

// //Asheville listeners------------------------------------------
//   $('#orangePeelExpand').on('click', function() {
//     $('#orangePeelDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();
//   });

//   $('#nineMileExpand').on('click', function() {
//     $('#nineMileDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

//   $('#gardensExpand').on('click', function() {
//     $('#gardensDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

// // Austin listeners ----------------------------------------
//   $('#bartonSpringsExpand').on('click', function() {
//     $('#bartonSpringsDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();
//   });

//   $('#alamoExpand').on('click', function() {
//     $('#alamoDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

//   $('#umlaufExpand').on('click', function() {
//     $('#umlaufDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

// // New York listeners----------------------------------------
//   $('#centralParkExpand').on('click', function() {
//     $('#centralParkDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();
//   });

//   $('#bronxZooExpand').on('click', function() {
//     $('#bronxZooDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

//   $('#apolloExpand').on('click', function() {
//     $('#apolloDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

// // Portland listeners-------------------------------------------
//   $('#crystalBallExpand').on('click', function() {
//     $('#crystalBallDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();
//   });

//   $('#irvingStreetExpand').on('click', function() {
//     $('#irvingStreetDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

//   $('#saturdayExpand').on('click', function() {
//     $('#saturdayDetails').toggleClass('showDetail');
//     $('.locationDetails').hide();
//     $('.showDetail').show();      
//   });

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

});

function Location(city, name) {
  this.name = name;
  this.city = city;
};

var locations = {
  spaceNeedle:               new Location('Seattle',   'Space Needle'),
  gasWorksPark:              new Location('Seattle',   'Gas Works Park'),
  pikePlaceMarket:           new Location('Seattle',   'Pike Place Market'),
  centralPark:               new Location('New York',  'Central Park'),
  apolloTheater:             new Location('New York',  'Apollo Theater'),
  bronxZoo:                  new Location('New York',  'Bronx Zoo'),
  crystalBallroom:           new Location('Portland',  'The Crystal Ballroom'),
  irvingStreetKitchen:       new Location('Portland',  'Irving Street Kitchen'),
  saturdayMarket:            new Location('Portland',  'Saturday Market'),
  bartonSpringsPool:         new Location('Austin',    'Barton Springs Pool'),
  alamoDrafthouse:           new Location('Austin',    'Alamo Drafthouse'),
  umlaufSculpture:           new Location('Austin',    'Umlauf Sculpture Garden and Museum'),
  theOrangePeel:             new Location('Asheville', 'The Orange Peel'),
  nineMile:                  new Location('Asheville', 'Nine Mile'),
  ashevilleBotanicalGardens: new Location('Asheville', 'Asheville Botanical Gardens')
};

var data = {
 "favList": []
};

var jsonFavs;


  // var storedFavs = JSON.parse(data['favList']);



$('.favButton').on('click', function() {
  data['favList'].push (locations[this.id]);
  localStorage['storedFavs'] = JSON.stringify(data);
  jsonFavs = JSON.parse(localStorage['storedFavs']);
  $.each(jsonFavs.favList, function() { 
    $('#favItems').append('<li>' +this.name+ '</li>');
  })
});



// $('.favButton').on('click', function() {
//     var place;
//     $('#favItems').append('<li>' + event.currenttarget.value + '</li>');
//   });


//JSON-------------------------------------------




  $('.expand').on('click', function() {
    var $this = $(this);
    $this.toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();
  });

















