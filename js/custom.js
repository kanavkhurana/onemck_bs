$(document).ready(function(){
  $('#headersearchmobilediv').popover({
    html : true,
    animation: true,
    trigger:'click',
    template:'<div class="popover headerpopover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    content: function() {
      if(findBootstrapEnvironment() == 'xs'){
        return $('#headersearchdropdowndiv').html();
      }
    }
  });

  /*Populate BU bubbles*/
  var mshbubbletemplate = document.querySelector('#mshbubble');
  var uspbubbletemplate = document.querySelector('#uspbubble');

  /*Reuse the bubbles*/
  var mshbubble=undefined;
  mshbubble = document.importNode(mshbubbletemplate.content, true);
  document.getElementById('leadrow1').appendChild(mshbubble);

  mshbubble=undefined;
  mshbubble = document.importNode(mshbubbletemplate.content, true);
  document.getElementById('leadrow2subrow1').appendChild(mshbubble);

  var uspbubble=undefined;
  uspbubble = document.importNode(uspbubbletemplate.content, true);
  document.getElementById('leadrow2subrow2').appendChild(uspbubble);

});
/*$(window).load(function(){*/
$('#dropdowndiv1').on('load',function(){
  //Make sure the dropdown takes the width of the longest filter value
  $('#dropdowndiv1').each(function(index) {
    var maxWidth = 0;
    $(this).children().eq(1).children().each(function(index,value){
      if($(value).width() > maxWidth){
        maxWidth = $(value).width();
      }
    });
    $(this).width(maxWidth);
  });
});

jQuery( "#centersearchdropdowndiv" ).on( "click", "input", function( event ) {
  $('#centersearchdropdowndiv').on('shown.bs.dropdown', function (event) {
    $('#centersearchdropdowndiv').removeClass('open');
  });
});

$( "#centersearchdropdowndiv" ).on( "keypress", "input", function( event ) {
  $('#centersearchdropdowndiv').addClass('open');
});

$( "#headersearchdropdowndiv" ).on( "click", "input", function( event ) {
  $('#headersearchdropdowndiv').on('shown.bs.dropdown', function (event) {
    $('#headersearchdropdowndiv').removeClass('open');
  });
});

$( "#headersearchdropdowndiv" ).on( "keypress", "input", function( event ) {
  $('#headersearchdropdowndiv').addClass('open');
});

function donotScroll(e){
  e.preventDefault();
}

function findBootstrapEnvironment() {
  var envs = ['xs', 'sm', 'md', 'lg'];

  var $el = $('<div>');
  $el.appendTo($('body'));

  for (var i = envs.length - 1; i >= 0; i--) {
    var env = envs[i];

    $el.addClass('hidden-'+env);
    if ($el.is(':hidden')) {
      $el.remove();
      return env;
    }
  }
}

$('#dropdown-menu1-ul a').click(function(){
  $('#selected1').text($(this).text());
});
$('#dropdown-menu2-ul a').click(function(){
  $('#selected2').text($(this).text());
});
$('#dropdown-menu3-ul a').click(function(){
  $('#selected3').text($(this).text());
});
$('#filterExpandPlus').click(function(){
  $(this).addClass("hidden");
  $('#filterCollapseMinus').removeClass("hidden");
  $('#collapse-filter').removeClass("hidden");

})
$('#filterCollapseMinus').click(function(){
  $(this).addClass("hidden");
  $('#filterExpandPlus').removeClass("hidden");
  $('#collapse-filter').addClass("hidden");

})
$('#filterExpandBUPlus').click(function(){
  $(this).addClass("hidden");
  $('#filterCollapseBUMinus').removeClass("hidden");
  $('#BUfilters').removeClass("hidden");
})

$('#filterCollapseBUMinus').click(function(){
  $(this).addClass("hidden");
  $('#filterExpandBUPlus').removeClass("hidden");
  $('#BUfilters').addClass("hidden");
})

$('#filterExpandLocPlus').click(function(){
  $(this).addClass("hidden");
  $('#filterCollapseLocMinus').removeClass("hidden");
  $('#Locfilters').removeClass("hidden");
})

$('#filterCollapseLocMinus').click(function(){
  $(this).addClass("hidden");
  $('#filterExpandLocPlus').removeClass("hidden");
  $('#Locfilters').addClass("hidden");
})

$('#filterExpandFilter3Plus').click(function(){
  $(this).addClass("hidden");
  $('#filterCollapseFilter3Minus').removeClass("hidden");
  $('#filter3filters').removeClass("hidden");
})

$('#filterCollapseFilter3Minus').click(function(){
  $(this).addClass("hidden");
  $('#filterExpandFilter3Plus').removeClass("hidden");
  $('#filter3filters').addClass("hidden");
})

function expandfilter(e){
  $(e).addClass("hidden");
  $(e).next().removeClass("hidden");
  $(e).parent().parent().next().removeClass("hidden");
}

function collapsefilter(e){
  $(e).addClass("hidden");
  $(e).prev().removeClass("hidden");
  $(e).parent().parent().next().addClass("hidden");
}
