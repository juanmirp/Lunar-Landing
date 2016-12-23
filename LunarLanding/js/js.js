var y = 100; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = -1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

window.onload = function(){
	//mostrar menú móvil
    document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
		document.getElementById("showm").style.height = 36 + "px";
		document.getElementById("showm").style.width = 36 + "px";
	}
	
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
		document.getElementById("showm").style.height = 48 + "px";
		document.getElementById("showm").style.width = 48 + "px";
	}
	
	document.getElementById("play").onclick = function(){
		restart();
	}
	
	//encender/apagar el motor al pulsar/soltar el botón izquierdo del raton en la pantalla
	document.onmousedown = function () {
		if (a == g && y > 20){
			motorOn();
		} else {
			motorOff();
		}
	}
	document.onmouseup = motorOff;
	
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = function() {
		if (a == g && y > 20){
			motorOn();
		} else {
			motorOff();
		}
	}
	document.onkeyup = motorOff;
	
	
	
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start(){
	timer = setInterval(function(){ moverNave(); }, dt*1000);
	motorOff();
}

function stop(){
	clearInterval(timer);
}

function restart(){
	stop();
	y = 100;
	v = 0;
	fuel = 100;
	document.getElementById("fuel").innerHTML = fuel;
	document.getElementsByClassName("c")[0].style.display = "none";
	start();
}

function moverNave(){
	if (fuel == 0){
		a = g;
	}
	v += a*dt;
	document.getElementById("velocidad").innerHTML = v;
	y += v*dt;
	document.getElementById("altura").innerHTML = y-20;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y > 20){
		document.getElementById("nave").style.top = (100-y)+"%";
	} else { 
		stop();
		document.getElementById("altura").innerHTML = 0;
		if (v < -5){
			document.getElementById("cohete").src = "img/explosion.png";
		}
	}
}

function motorOn(){
	if (fuel > 0) {
		a = -g;
		if (timerFuel == null){
			timerFuel = setInterval(function(){ actualizarFuel(); }, 10);
			document.getElementById("cohete").src = "img/Cohete.png";
		}
	} else {
		document.getElementById("cohete").src = "img/CoheteSinFuego.png";
	}
}

function motorOff(){
	a = g;
	clearInterval(timerFuel);
	timerFuel = null;
	document.getElementById("cohete").src = "img/CoheteSinFuego.png";
	if (y <= 20 && v < -5){
		document.getElementById("cohete").src = "img/explosion.png";
	}
}

function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	if (fuel > 0){
		fuel -= 0.1;
		document.getElementById("fuel").innerHTML = fuel;
	} else {
		document.getElementById("fuel").innerHTML = 0;
	}	
}
