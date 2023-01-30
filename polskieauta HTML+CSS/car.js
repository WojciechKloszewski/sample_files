function foto(numer){


	var numer;


	if (numer == 1){
	document.getElementById("afotocontainer").innerHTML='<img id="asrc" src="img/sport.jpg"/>';
	}else if (numer == 2){
	document.getElementById("afotocontainer").innerHTML='<img id="asrc" src="img/210.jpg"/>';
	}else 	if (numer == 3){
	document.getElementById("afotocontainer").innerHTML='<img id="asrc" src="img/110.jpg"/>';
	}else 	if (numer == 4){
	document.getElementById("afotocontainer").innerHTML='<img id="asrc" src="img/125.jpg"/>';
	}else 	if (numer == 5){
	document.getElementById("afotocontainer").innerHTML='<img id="asrc" src="img/wars.jpg"/>';
	}

}

function car(){

var x=0;

if (x==0){
	document.getElementById("carcar").innerHTML='<img id="scar" style="position: absolute; top: 50px; z-index=-1; " src="img/scar.jpg"/><h1 style="background-color: #DDDDDD; width: 30%; position: relative; margin: auto;  z-index=1;" >Polskie samochody</h1> ';
	x=1;
}

	
var elem = document.getElementById("scar");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == window.innerWidth-120) {
	  pos = 0;
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }	

	
}