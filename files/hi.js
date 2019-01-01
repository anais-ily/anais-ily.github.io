$('.marquee').marquee({
  direction: 'down'
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 01, 2019 00:00:00").getTime();

// Update the count down every 01 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "<i> Dias,</i> " + hours + " <i>Hrs,</i> "
  + minutes + "<i> Mins,</i> " + seconds + "<i> Segs</i> ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
 	  //Por editar :)
	  document.getElementById("demo").innerHTML="♥ Anais te amo♥";
	  document.getElementById("img1").src="./files/2.png";
	  document.getElementById("img2").src="./files/0.png";
	  document.getElementById("img3").src="./files/1.png";
	  document.getElementById("img4").src="./files/9.png";
	  document.getElementById("h2nuevo").innerHTML=" ¡Feliz año nuevo!";
	  document.getElementById("linea1").innerHTML="Buen comienzo para enero,<br>";
	  document.getElementById("linea2").innerHTML="amor para febrero,<br>";
	  document.getElementById("linea3").innerHTML="paz para marzo,<br>";
	  document.getElementById("linea4").innerHTML="no se preocupe por abril,<br>";
	  document.getElementById("linea5").innerHTML="diversión para mayo,<br>";
	  document.getElementById("linea6").innerHTML="alegría de junio a noviembre,<br>";
	  document.getElementById("linea7").innerHTML="felicidad para diciembre.<br>";
	  document.getElementById("linea8").innerHTML="¡Ten un afortunado y maravilloso 2019!<br>";  
	  document.body.style.backgroundImage = "url('./files/r.gif')";
	  document.body.style.backgroundSize = "auto";
	  document.body.style.backgroundRepeat = "repeat";
	  
  }
}, 1000);