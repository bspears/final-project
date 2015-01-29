// Home page---------------------------------
$(document).ready(function() {
  $('#submit').on('click', function() {
    window.location.href = ($('#city').val() + ".html");
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

});

function Location(name, city) {
  this.name = name;
  this.city = city;
};

var locations = {
  spaceNeedle:               new Location('Space Needle', 'Seattle'),
  gasWorksPark:              new Location('Gas Works Park', 'Seattle'),
  pikePlaceMarket:           new Location('Pike Place Market', 'Seattle'),
  centralPark:               new Location('Central Park', 'New York'),
  apolloTheater:             new Location('Apollo Theater', 'New York'),
  bronxZoo:                  new Location('Bronx Zoo', 'New York'),
  crystalBallroom:           new Location('The Crystal Ballroom', 'Portland'),
  irvingStreetKitchen:       new Location('Irving Street Kitchen', 'Portland' ),
  saturdayMarket:            new Location('Saturday Market', 'Portland' ),
  bartonSpringsPool:         new Location('Barton Springs Pool', 'Austin'),
  alamoDrafthouse:           new Location('Alamo Drafthouse', 'Austin'),
  umlaufSculpture:           new Location('Umlauf Sculpture Garden and Museum', 'Austin'),
  theOrangePeel:             new Location('The Orange Peel', 'Asheville'),
  nineMile:                  new Location('Nine Mile', 'Asheville'),
  ashevilleBotanicalGardens: new Location('Asheville Botanical Gardens', 'Asheville')
};


var data = {
 "favList": []
};


  // var storedFavs = JSON.parse(data['favList']);

var addFav = function(location) {
  var last = data['favList'].length-1;
  $('#favItems').append('<li>' +  + '</li>');
};

$('.favButton').on('click', function() {
  data['favList'].push (locations[this.id]);
  addFav(locations[this.id]);
});

// $('#gasFav').on('click', function() {
//   data['favList'].push (seattle.gasWorksPark);
//   addFav(seattle.gasWorksPark);
// });

// $('#pikeFav').on('click', function() {
//   data['favList'].push (seattle.pikePlaceMarket);
//   addFav(seattle.pikePlaceMarket);
// });



// $('#centralParkFav').on('click', function() {
//   data['favList'].push (newYork.centralPark);
//   addFav(newYork.centralPark);
// });

// $('#apolloTheaterFav').on('click', function() {
//   data['favList'].push (newYork.apolloTheater);
//   addFav(newYork.apolloTheater);
// });

// $('#bronxFav').on('click', function() {
//   data['favList'].push (newYork.bronxZoo);
//   addFav(newYork.bronxZoo);
// });



// $('#crystalBallroomFav').on('click', function() {
//   data['favList'].push (portland.crystalBallroom);
//   addFav(portland.crystalBallroom);
// });

// $('#irvingStreetKitchenFav').on('click', function() {
//   data['favList'].push (portland.irvingStreetKitchen);
//   addFav(portland.irvingStreetKitchen);
// });

// $('#saturdayMarketFav').on('click', function() {
//   data['favList'].push (portland.saturdayMarket);
//   addFav(portland.saturdayMarket);
// });



// $('#theOrangePeelFav').on('click', function() {
//   data['favList'].push (asheville.theOrangePeel);
//   addFav(asheville.theOrangePeel);
// });

// $('#nineMileFav').on('click', function() {
//   data['favList'].push (asheville.nineMile);
//   addFav(asheville.nineMile);
// });

// $('#gardenFav').on('click', function() {
//   data['favList'].push (asheville.ashevilleBotanicalGardens);
//   addFav(asheville.ashevilleBotanicalGardens);
// });



// $('#bartonSpringsPoolFav').on('click', function() {
//   data['favList'].push (austin.bartonSpringsPool);
//   addFav(austin.bartonSpringsPool);
// });

// $('#alamoDrafthouseFav').on('click', function() {
//   data['favList'].push (austin.alamoDrafthouse);
//   addFav(austin.alamoDrafthouse);
// });

// $('#umlaufSculptureFav').on('click', function() {
//   data['favList'].push (austin.umlaufSculpture);
//   addFav(austin.umlaufSculpture);
// });

// $('.favButton').on('click', function() {
//     var place;
//     $('#favItems').append('<li>' + event.currenttarget.value + '</li>');
//   });


//JSON-------------------------------------------






















