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
	var text = element.querySelector('.h3-trabajos');

	if (showText) {
	  image.style.display = 'none'; // Hide the image
	  text.style.display = 'block'; // Show the <h3> text
	} else {
	  image.style.display = 'block'; // Show the image
	  text.style.display = 'none'; // Hide the <h3> text
	}
  }


const linkContainer = document.querySelector('.trabajo-1');

// Agregar un event listener para responder al clic
linkContainer.addEventListener('click', function() {
  // Redireccionar a la página deseada
  window.location.href = 'paginas-proyectos/proyecto-RitayPeter.html';
});






const linkThermomix = document.querySelector('.trabajo-2');

linkThermomix.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-thermomix.html';
});

const linkBeteling = document.querySelector('.trabajo-3');

linkBeteling.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-beteling.html';
});


const linkproducto = document.querySelector('.trabajo-4');

linkproducto.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-producto.html';
});

const linkgmevents = document.querySelector('.trabajo-5');

linkgmevents.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-gmevents.html';
});

const linkAvon = document.querySelector('.trabajo-6');

linkAvon.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-avon.html';
});

const linkSapphira = document.querySelector('.trabajo-7');

linkSapphira.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-sapphira.html';
});


const linkPandemonio = document.querySelector('.trabajo-8');

linkPandemonio.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-lapandemonio.html';
});

const linkIlustracion = document.querySelector('.trabajo-9');

linkIlustracion.addEventListener('click', function() {
  window.location.href = 'paginas-proyectos/proyecto-ilustracion.html';
});












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

