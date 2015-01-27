// Home page---------------------------------
$(document).ready(function() {
  $('#submit').on('click', function() {
    window.location.href = ($('#city').val() + ".html");
});



// City Page------------------------------------
  $('#restaurant').on('click', function(){
    $('.restaurant').toggleClass('wanted');
    $('.location-info').hide();
    $('.wanted').show('slow');
  });
   $('#landmark').on('click', function(){
    $('.landmark').toggleClass('wanted');
    $('.location-info').hide();
    $('.wanted').show('slow');
  });
    $('#venue').on('click', function(){
    $('.venue').toggleClass('wanted');
    $('.location-info').hide();
    $('.wanted').show('slow');
  });
     $('#outdoors').on('click', function(){
    $('.outdoors').toggleClass('wanted');
    $('.location-info').hide();
    $('.wanted').show('slow');
  });
});