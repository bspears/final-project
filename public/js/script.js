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

 $('.expand').on('click', function() {
    var $this = $(this);
    $(this).next().toggleClass('showDetail');
    $('.locationDetails').hide();
    $('.showDetail').show();
  });
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

var setFavs = (function () {
  var savedPlaces = [];
  var parse = JSON.parse(localStorage['storedFavs']);
  $.each(parse.favList, function() {
    savedPlaces.push ('<li>'+ this.name +'<li>')
  });
  $('#favItems').html(savedPlaces.join(' '));
}());

$('.favButton').on('click', function() {
  data['favList'].push (locations[this.id]);
  localStorage['storedFavs'] = JSON.stringify(data);
  var savedPlaces = [];
  var parse = JSON.parse(localStorage['storedFavs']);
  $.each(parse.favList, function() {
    savedPlaces.push ('<li>'+ this.name +'<li>')
  });
  $('#favItems').html(savedPlaces.join(' '));
});




 

















