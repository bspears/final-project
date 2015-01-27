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
     $('#outdoors').on('click', function(){
    $('.outdoors').toggleClass('wanted4');
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

  $('#gasworksExpand').on('click', function() {
      $('#gasworksDetails').toggleClass('showDetail');
        $('.locationDetails').hide();
        $('.showDetail').show();


  });









});