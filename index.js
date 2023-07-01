// Get the button and section elements
var toggleButton = document.getElementById("boton-mas");
var mySection = document.getElementById("curriculum-id");

// Add a click event listener to the button
toggleButton.addEventListener("click", function() {
  // Toggle the display style of the section
  if (mySection.style.display === "none") {
    mySection.style.display = "block";
	toggleButton.innerHTML = '<img class="icon-svg" src="images/icons/dash-circle-fill.svg" alt="Linkedin">';
  } else {
    mySection.style.display = "none";
	toggleButton.innerHTML = '<img class="icon-svg" src="images/icons/plus-circle-fill.svg" alt="Linkedin">';
  }
});


function toggleContent(element, showText) {
	var image = element.querySelector('.img-trabajos');
	var image2 = element.querySelector('.image-sus');

	if (showText) {
	  image.style.display = 'none'; // Hide the image
	  image2.style.display = 'block'; // Show the image2
	} else {
	  image.style.display = 'block'; // Show the image
	  image2.style.display = 'none'; // Hide the image2
	}
  }

















/*var trabajo_1= document.getElementById("trab-1");

trabajo_1.addEventListener("mouseover", function(){
      trabajo_1.innerHTML = '<h3 class="nombre-trabajo">Imagen corporativa y web para Rita y Peter</h3>'
});

trabajo_1.addEventListener("mouseout", function(){
  trabajo_1.innerHTML = '<img class="img-trabajos" src="images/ritaypeter/rita_peter_portatil.webp" alt="Rita y PEter"></img>'
});


var trabajo_2= document.getElementById("trab-2");

trabajo_2.addEventListener("mouseover", function(){
      trabajo_2.innerHTML = '<h3 class="nombre-trabajo">Campaña Vive Thermomix</h3>'
});

trabajo_2.addEventListener("mouseout", function(){
  trabajo_2.innerHTML = '<img class="img-trabajos" src="images/thermomix/banner_thermomix.webp" alt="Thermomix Campaign">'
});


var trabajo_3= document.getElementById("trab-3");

trabajo_3.addEventListener("mouseover", function(){
      trabajo_3.innerHTML = '<h3 class="nombre-trabajo">trabajo3</h3>'
});

trabajo_3.addEventListener("mouseout", function(){
  trabajo_3.innerHTML = '<img class="img-trabajos" src="botones.jpg" alt="">'
});


var trabajo_4= document.getElementById("trab-4");

trabajo_4.addEventListener("mouseover", function(){
      trabajo_4.innerHTML = '<h3 class="nombre-trabajo">trabajo4</h3>'
});

trabajo_4.addEventListener("mouseout", function(){
  trabajo_4.innerHTML = '<img class="img-trabajos" src="botones.jpg" alt="">'
});


var trabajo_5= document.getElementById("trab-5");

trabajo_5.addEventListener("mouseover", function(){
      trabajo_5.innerHTML = '<h3 class="nombre-trabajo">Imagen corporativa GM events</h3>'
});

trabajo_5.addEventListener("mouseout", function(){
  trabajo_5.innerHTML = '<img class="img-trabajos" src="images/gmevents/gmevents-button.webp" alt="GM Events">'
});

var trabajo_6= document.getElementById("trab-6");

trabajo_6.addEventListener("mouseover", function(){
      trabajo_6.innerHTML = '<h3 class="nombre-trabajo">Campañas AVON</h3>'
});

trabajo_6.addEventListener("mouseout", function(){
  trabajo_6.innerHTML = '<img class="img-trabajos" src="images/avon/banner-avon.webp" alt="Folletos AVON">'
});



var trabajo_7= document.getElementById("trab-7");

trabajo_7.addEventListener("mouseover", function(){
      trabajo_7.innerHTML = '<h3 class="nombre-trabajo">Web Sapphira Prive</h3>'
});

trabajo_7.addEventListener("mouseout", function(){
  trabajo_7.innerHTML = '<img class="img-trabajos" src="images/shappira/Sapphira_web.webp" alt="Sapphira Privè">'
});


var trabajo_8= document.getElementById("trab-8");

trabajo_8.addEventListener("mouseover", function(){
      trabajo_8.innerHTML = '<h3 class="nombre-trabajo">Revista Cultural La Pandemonio</h3>'
});

trabajo_8.addEventListener("mouseout", function(){
  trabajo_8.innerHTML = '<img class="img-trabajos" src="images/pandemonio/la_pandemonio.jpeg" alt="La Pandemonio">'
});


var trabajo_9= document.getElementById("trab-9");

trabajo_9.addEventListener("mouseover", function(){
      trabajo_9.innerHTML = '<h3 class="nombre-trabajo">Ediciones del Gatonauta</h3>'
});

trabajo_9.addEventListener("mouseout", function(){
  trabajo_9.innerHTML = '<img class="img-trabajos" src="images/gatonauta/piesgrandes_v2.webp" alt="">'
});

*/

