//variables
var counter = false;
var texttimer = 0;
var x2 = 0;
var y2 = 0;
var floattimer = 0;

//Zeroes searchbar on pageload
window.onload = function(){
this.document.getElementById("search").value = '';
};
    
//Controls mosue parallax
document.addEventListener('mousemove', onMouseUpdate, false);
function onMouseUpdate(e) {
  //The space background
  var x = -(e.pageX + document.getElementById("landing-content").style.left) / 10;
  var y = -(e.pageY + document.getElementById("landing-content").style.top) / 10;
  document.getElementById("landing-content").style.backgroundPosition = x + 'px ' + y + 'px';
  //The asteroids
  x2 = -(e.pageX + document.getElementById("asteroids").offsetLeft) / 20;
  y2 = -(e.pageY + document.getElementById("asteroids").offsetTop) / 20;
  document.getElementById("asteroids").style.backgroundPosition = (x2 + floattimer/2) + 'px ' + y2 + 'px';
  }

//timer 1, controls scanlines and changing text, half second intervals
window.setInterval(function() {
    //Scanlines
    if(counter == false)
    {
        document.getElementById("scan").style.backgroundImage = 'url(media/scanline2.png)';
        counter = true;
    } else {
        document.getElementById("scan").style.backgroundImage = 'url(media/scanline.png)';
        counter = false;
    }
    //Changing text
    if(texttimer === 5)
    {
        document.getElementById("brandingtext").textContent = '';
    } else if (texttimer >= 6)
    {
        document.getElementById("brandingtext").textContent = 'Hello traveler!';
        texttimer = 0;
    }

    texttimer++;
    document.getElementById("search").focus();

}, 500);

//timer 2, controls asteroids
window.setInterval(function() {
    floattimer++;
    document.getElementById("asteroids").style.backgroundPosition = (x2 + floattimer/2) + 'px ' + y2 + 'px';
    if(floattimer >= 1400)
    {
        floattimer = 0;
    }
}, 50);



//searchbar
var node = document.getElementsByClassName("search");
document.addEventListener("keyup", function(event) {
    var searchstring =  document.getElementById("search").value; 
    searchstring.replace(" ","+");
    if (event.key === "Enter" && searchstring != null) {
        console.log('works');
        window.location.href = "https://www.google.com/search?q=" + searchstring;
    }
});