
var words = ["DESIGNER", "DEVELOPER"];

var counting =0;
var index = 0;
var theText = "";
var theLetter = "";


(function typeAmin(){
    if (counting === words.length){
        counting = 0;
    }

    theText = words[counting];
    thrLetter = theText.slice(0, ++index);

    document.querySelector('.typed').textContent = thrLetter;
    if(thrLetter.length === theText.length){
        counting ++;
        index = 0;
    }
    
    setTimeout(typeAmin, 350);

})();

