$(document).ready(function(){

  /*
  //Populate BU bubbles
  var mshbubbletemplate = document.querySelector('#mshbubble_overview');
  var uspbubbletemplate = document.querySelector('#uspbubble_overview');

  //Reuse the bubbles
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
  */
  /*Code to enter timeline elements begins*/
  var engtimelinedate = undefined;
  var engtimelineins1datediv = undefined;
  var engtimelinedatetemplate = undefined;
  var engtimelinedesctemplate = undefined;
  var engtimelinedesctypetemplate = undefined;
  var engtimelinedesctype = undefined;
  var domToConvert = undefined;
  var engtimelinedesc = undefined;
  var engtimelineins1descdiv = undefined;
  //XML Serialiser utilised for converting html dom to string
  var domToString = new XMLSerializer();
  var engtimelinecol = $('#engtimelinecol');

  /*Populate Eng Timeline Date and Description bubbles*/
  /*Example 1 - Email activity*/
  var engtimelinerow = $('<div class="row engtimelinerow"></div>');

  engtimelinedatetemplate = document.querySelector('#engtimeline_date');
  engtimelinedatetemplate.content.querySelector('#month').innerHTML = 'Jul';
  engtimelinedatetemplate.content.querySelector('#date').innerHTML = '4';

  engtimelinedate = document.importNode(engtimelinedatetemplate.content, true);
  engtimelineins1datediv = document.createElement('div');
  $(engtimelineins1datediv).addClass("col-xs-2 text-center");
  $(engtimelineins1datediv).append(engtimelinedate);
  $(engtimelinerow).append($(engtimelineins1datediv));

  engtimelinedesctemplate = document.querySelector('#engtimeline_desc');
  /*Select the Activity Type to designate the Icon accordingly*/
  /*Choose from engtimeline_email, engtimeline_call and engtimeline_meeting*/
  engtimelinedesctypetemplate = document.querySelector('#engtimeline_email');
  engtimelinedesctype = document.importNode(engtimelinedesctypetemplate.content, true);
  engtimelinedesctemplate.content.querySelector('#subject').innerHTML = 'Emailed the Director';
  engtimelinedesctemplate.content.querySelector('#owner').innerHTML = 'Joe Johnson';
  engtimelinedesctemplate.content.querySelector('#activitydatetime').innerHTML = 'July 4, 2017 - 2:34 PM';

  domToConvert = engtimelinedesctype;
  domString = domToString.serializeToString(domToConvert);
  engtimelinedesctemplate.content.querySelector('#activitytype').innerHTML = domString;

  engtimelinedesc = document.importNode(engtimelinedesctemplate.content, true);
  engtimelineins1descdiv = document.createElement('div');
  $(engtimelineins1descdiv).addClass("col-xs-10");
  $(engtimelineins1descdiv).append(engtimelinedesc);
  $(engtimelinerow).append($(engtimelineins1descdiv));

  $(engtimelinecol).append($(engtimelinerow));

  /*Populate Eng Timeline Date and Description bubbles*/
  /*Example 2 - Call activity*/
  var engtimelinerow = $('<div class="row engtimelinerow"></div>');

  engtimelinedatetemplate = document.querySelector('#engtimeline_date');
  engtimelinedatetemplate.content.querySelector('#month').innerHTML = 'Jul';
  engtimelinedatetemplate.content.querySelector('#date').innerHTML = '4';

  engtimelinedate = document.importNode(engtimelinedatetemplate.content, true);
  engtimelineins1datediv = document.createElement('div');
  $(engtimelineins1datediv).addClass("col-xs-2 text-center");
  $(engtimelineins1datediv).append(engtimelinedate);
  $(engtimelinerow).append($(engtimelineins1datediv));

  engtimelinedesctemplate = document.querySelector('#engtimeline_desc');
  /*Select the Activity Type to designate the Icon accordingly*/
  /*Choose from engtimeline_email, engtimeline_call and engtimeline_meeting*/
  engtimelinedesctypetemplate = document.querySelector('#engtimeline_call');
  engtimelinedesctype = document.importNode(engtimelinedesctypetemplate.content, true);
  engtimelinedesctemplate.content.querySelector('#subject').innerHTML = 'Called the CEO';
  engtimelinedesctemplate.content.querySelector('#owner').innerHTML = 'Joe Johnson';
  engtimelinedesctemplate.content.querySelector('#activitydatetime').innerHTML = 'July 4, 2017 - 5:34 PM';

  domToConvert = engtimelinedesctype;
  domString = domToString.serializeToString(domToConvert);
  engtimelinedesctemplate.content.querySelector('#activitytype').innerHTML = domString;

  engtimelinedesc = document.importNode(engtimelinedesctemplate.content, true);
  engtimelineins1descdiv = document.createElement('div');
  $(engtimelineins1descdiv).addClass("col-xs-10");
  $(engtimelineins1descdiv).append(engtimelinedesc);
  $(engtimelinerow).append($(engtimelineins1descdiv));

  $(engtimelinecol).append($(engtimelinerow));

  /*Populate Eng Timeline Date and Description bubbles*/
  /*Example 3 - Meeting activity*/
  var engtimelinerow = $('<div class="row engtimelinerow"></div>');

  engtimelinedatetemplate = document.querySelector('#engtimeline_date');
  engtimelinedatetemplate.content.querySelector('#month').innerHTML = 'Jul';
  engtimelinedatetemplate.content.querySelector('#date').innerHTML = '4';

  engtimelinedate = document.importNode(engtimelinedatetemplate.content, true);
  engtimelineins1datediv = document.createElement('div');
  $(engtimelineins1datediv).addClass("col-xs-2 text-center");
  $(engtimelineins1datediv).append(engtimelinedate);
  $(engtimelinerow).append($(engtimelineins1datediv));

  engtimelinedesctemplate = document.querySelector('#engtimeline_desc');
  /*Select the Activity Type to designate the Icon accordingly*/
  /*Choose from engtimeline_email, engtimeline_call and engtimeline_meeting*/
  engtimelinedesctypetemplate = document.querySelector('#engtimeline_meeting');
  engtimelinedesctype = document.importNode(engtimelinedesctypetemplate.content, true);
  engtimelinedesctemplate.content.querySelector('#subject').innerHTML = 'Met the SVP';
  engtimelinedesctemplate.content.querySelector('#owner').innerHTML = 'Joe Johnson';
  engtimelinedesctemplate.content.querySelector('#activitydatetime').innerHTML = 'July 4, 2017 - 6:34 PM';

  domToConvert = engtimelinedesctype;
  domString = domToString.serializeToString(domToConvert);
  engtimelinedesctemplate.content.querySelector('#activitytype').innerHTML = domString;

  engtimelinedesc = document.importNode(engtimelinedesctemplate.content, true);
  engtimelineins1descdiv = document.createElement('div');
  $(engtimelineins1descdiv).addClass("col-xs-10");
  $(engtimelineins1descdiv).append(engtimelinedesc);
  $(engtimelinerow).append($(engtimelineins1descdiv));

  $(engtimelinecol).append($(engtimelinerow));

  //Add the influencers template
  influencerstemplate = document.querySelector('#influencersgraphic');
  influencerstemplate.content.querySelector('#infgraphic_accountOwner').innerHTML = 'JJ';
  influencerstemplate.content.querySelector('#infgraphic_promoter').innerHTML = 'PP';
  influencerstemplate.content.querySelector('#infgraphic_neutral_fn').innerHTML = 'NNFN';
  influencerstemplate.content.querySelector('#infgraphic_neutral_ln').innerHTML = 'NNLN';
  influencerstemplate.content.querySelector('#infgraphic_detractor_fn').innerHTML = 'DDFN';
  influencerstemplate.content.querySelector('#infgraphic_detractor_ln').innerHTML = 'DDLN';


  var influencersgraphic = document.importNode(influencerstemplate.content, true);

  $('#influencerdiv').append(influencersgraphic);


});

$(window).resize(function(){
  /*alert('window was resized!');*/

});
