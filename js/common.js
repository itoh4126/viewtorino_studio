var date = new Date();
var time = date.getHours();

if (time < 7){
  $(".jumbotron").append('<div class="ac30"></div>');
  $.ajax({
    type: 'get',
    url: '/images/ac30.svg',
  })
  .done(function(returnData) {
    var svg = $(returnData).find('svg');
    $('.ac30').append(svg);
  });
} else {
  $(".jumbotron").append('<div class="rick"></div>');
  $.ajax({
    type: 'get',
    url: '/images/rick.svg',
  })
  .done(function(returnData) {
    var svg = $(returnData).find('svg');
    $('.rick').append(svg);
  });
}
