window.onload = function(){
//document.getElementById('main').innerHTML = "Hello, World!";
};
var counter = false;
var texttimer = 0;
    
document.addEventListener('mousemove', onMouseUpdate, false);

function onMouseUpdate(e) {
  var x = -(e.pageX + document.getElementById("landing-content").offsetLeft) / 10;
  var y = -(e.pageY + document.getElementById("landing-content").offsetTop) / 10;
  document.getElementById("landing-content").style.backgroundPosition = x + 'px ' + y + 'px';

  //var x2 = ((e.pageX)-(window.innerWidth/2))/(window.innerWidth/2);
  //console.log(x2);
  //var y2 = ((e.pageY)-(window.innerHeight/2))/(window.innerHeight/2);
  //document.getElementById("maincontent").style.transform ="rotateY("+ x2*30 +"deg)";
  //document.getElementById("maincontent").style.transform ="rotateX("+ y2*30 +"deg)";
  //document.getElementById("maincontent").style.marginLeft = y2 + 'px';
  }

window.setInterval(function() {
    if(counter == false)
    {
        document.getElementById("scan").style.backgroundImage = 'url(scanline2.png)';
        counter = true;
    } else {
        document.getElementById("scan").style.backgroundImage = 'url(scanline.png)';
        counter = false;
    }

    if(texttimer === 9)
    {
        document.getElementById("brandingtext").style.display = 'none';
    } else if (texttimer >= 10)
    {
        document.getElementById("brandingtext").style.display = 'flex';
        texttimer = 0;
    }

    texttimer++;
    document.getElementById("search").focus();

}, 500);

////

var node = document.getElementsByClassName("search");
document.addEventListener("keyup", function(event) {
    var searchstring =  document.getElementById("search").value; 
    searchstring.replace(" ","+");
    if (event.key === "Enter" && searchstring != null) {
        console.log('works');
        window.location.href = "https://www.google.com/search?q=" + searchstring;
    }
});