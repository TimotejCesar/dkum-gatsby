
import $ from 'jquery';

//seznam tagov, katerim se lahko spremeni velikost pisave
var tags = ['td','a', 'b', 'p','li','span','div','h1','h2','h3','font', 
'input[type="text"]', 'input[type="submit"]', 'input[type="button"]', 'select', 'th']

var prirastek=4; //+ ali - 4 px
var startSz;

if (document.cookie.indexOf("startSz") >= 0) {
  //preberi cookie
  var re = new RegExp("startSz=([^;]+)");
  var value = re.exec(document.cookie);
  startSz = parseInt(unescape(value[1]));
} 
else {
  //ni še cookie-a, ustvari ga
  startSz=0;
  document.cookie = "startSz=" + startSz + "; path=/"; 
}


function ts(trgt, inc) {
  
  if(startSz===0 && inc===0) return; //vse po defaultu, pusti pri miru
  
  var faktor;
  
  //skrajne dovoljene meje - največ 3 povečanja/zmanjšana od privzete velikosti
  if(Math.abs(parseInt(startSz) + inc) > 3) return;
  
   startSz += inc;
  
   if(inc===0) { //inicializacija
    faktor=startSz;
  } else { //povečanje/zmanjšanje
    faktor=inc;
  }
  
	var selector;
  //target prioritete: 1. id, 2. tag, 3. class
  
  if($('#' + trgt ).empty()) {
    if($(trgt).empty()){
      selector = '.'+trgt; //class
    }
    else {
      selector = trgt; //tag
    }
  }
  else {
    selector= "#" + trgt; //id
  }
  
  
   $(selector).css('font-size',  parseInt(parseInt($(selector).css('font-size')) +  
          (prirastek * faktor))+ 'px'); 
        
   for(var i=0; i < tags.length; i++){
     $(selector + ' ' + tags[i]).css('font-size',  parseInt(parseInt($(selector + 
       ' ' + tags[i]).css('font-size')) + (prirastek * faktor))+ 'px');
   }     
  
  //vrednost shranim v cookie
  document.cookie = "startSz=" + startSz + "; path=/";
}

export default ts;



