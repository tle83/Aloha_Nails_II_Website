/*
	script for index page
*/
//Change the iframe page
function linkPage(pageName){
	window.location.assign(pageName);
}

window.onload = function(){
	var elements = document.getElementsByClassName('tabLink');
	for(var i = 0; i < elements.length; i++){
		elements[i].onclick = function(){
			document.getElementById('iframe').src = this.value;
		}
	}
};

/*
	script for home page
*/
//Slide show in home page
var myIndex = 0;
carousel();

function carousel(){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	myIndex++;
	if(myIndex > slides.length){ myIndex = 1 }
	slides[myIndex-1].style.display = "block";
	//change image every 2 seconds
	setTimeout(carousel, 2000);
}

/*
	script for about page
*/
function myMap(){
	var myLatLng = {lat:30.412402, lng:-91.054885 };
	var map = new google.maps.Map(document.getElementById("googleMap"),{
		center: myLatLng,
		zoom: 16
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map:map,
		title: "Aloha Nails II"
	});
	var popUP = new google.map.InfoWindow({
		content:'<p>Aloha nails II</'
	});
}
