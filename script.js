function linkPage(pageName){
	window.location.assign(pageName);
}

window.onload = function(){
	var elements = document.getElementsByClassName('tabLink');
	for(var i = 0; i < elements.length; i++){
		elements[i].onclick = function(){
			document.getElementsById('iframe').src = this.value;
		}
	}
}

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