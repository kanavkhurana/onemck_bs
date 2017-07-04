$(document).ready(function(){
/*Event handler applied to all data rows to facilitate icon change on click*/
$.each($( "#oppdatatable" ).find( "button" ),function(index,value){
var targetCollapsibleElement = '#row-' + $(value).attr('id').split('-')[1];
$(targetCollapsibleElement).on("show.bs.collapse", function(){
    $(value).html('<span class="glyphicon glyphicon-menu-up"></span>');
  });
$(targetCollapsibleElement).on("hide.bs.collapse", function(){
      $(value).html('<span class="glyphicon glyphicon-menu-down"></span>');
    });
});

$('#filterPopover').popover({
  html : true,
  animation: true,
  trigger:'click',
  template:'<div class="popover filterpopup" role="tooltip"><div class="arrow popoverarrow"></div><h3 class="popover-title"></h3><div class="popover-content filterpopovercontent"></div></div>',
  content: function() {
    //if(findBootstrapEnvironment() == 'xs'){
      return $('#filter_popover_content_wrapper').html();
    //}
  }
});

});
