$(document).ready(function(){

  /*Populate BU bubbles*/
  var mshbubbletemplate = document.querySelector('#mshbubble_overview');
  var uspbubbletemplate = document.querySelector('#uspbubble_overview');

  /*Reuse the bubbles*/
  var mshbubble=undefined;
  mshbubble = document.importNode(mshbubbletemplate.content, true);
  mshbubbleli = document.createElement("li");
  mshbubbleli.appendChild(mshbubble);

  document.getElementById('bulisting').appendChild(mshbubbleli);

  var uspbubble=undefined;
  uspbubble = document.importNode(uspbubbletemplate.content, true);
  uspbubbleli = document.createElement("li");
  uspbubbleli.appendChild(uspbubble);

  document.getElementById('bulisting').appendChild(uspbubbleli);
  /*mshbubble=undefined;
  mshbubble = document.importNode(mshbubbletemplate.content, true);
  document.getElementById('leadrow2subrow1').appendChild(mshbubble);

  var uspbubble=undefined;
  uspbubble = document.importNode(uspbubbletemplate.content, true);
  document.getElementById('leadrow2subrow2').appendChild(uspbubble);*/

});

$(window).resize(function(){
/*alert('window was resized!');*/

});
