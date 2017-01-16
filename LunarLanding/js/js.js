var y = 90; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 4;
var a = g;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
var fuel = 100;
var maxv = 7; //velocidad limite para que no explote
var pause = true;
var comenzado = false;
var apretado = false;
var gameOver = true;

window.onload = function(){
	//mostrar menú móvil
    document.getElementById("showm").onclick = showMenu;
	
	//ocultar menú móvil
	document.getElementById("hidem").onclick = hideMenu;
	
	//Comenzar una nueva partida
	document.getElementById("play").onclick = restart;
	
	//botón de pausa que para o reanuda la partida
	document.getElementById("pausa").onclick = pauseResume;
	
	//mostrar/ocultar configuración
	document.getElementById("config").onclick = showConfig;
	
	document.getElementById("hideconfig").onclick = hideConfig;
	
	//cambiar dificultad
	document.getElementsByTagName("input")[0].onclick = changeDifficulty;
	
	//encender/apagar el motor al pulsar/soltar el botón izquierdo del raton en la pantalla
	document.getElementsByClassName("b")[0].onmousedown = function () {
		if (a == g && y > 20 && !pause){
			motorOn();
		} else {
			motorOff();
		}
	}
	document.getElementsByClassName("b")[0].onmouseup = motorOff;
	
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = function() {
		if(!apretado){
			apretado = true
			if (a == g && y > 20 && !pause){
				motorOn();
			} else {
				motorOff();
			}
		}
	}
	document.onkeyup = function(){
		apretado = false;
		motorOff();
	}
	
	//encender/apagar al tocar/dejar de tocar la pantalla
	document.ontouchstart = function() {
		if(!apretado){
			apretado = true
			if (a == g && y > 20 && !pause){
				motorOn();
			} else {
				motorOff();
			}
		}
	}
	document.ontouchend = function(){
		apretado = false;
		motorOff();
	}
	
	//muestra el menu en el móvil al cargar la página
	document.getElementsByClassName("c")[0].style.display = "block";
	
}

//Definición de funciones
function start(){
	timer = setInterval(function(){ moverNave(); }, dt*1000);
	pause = false;
}

function stop(){
	clearInterval(timer);
	pause = true;
}

function restart(){
	stop();
	y = 90;
	v = 0;
	fuel = 100;
	document.getElementById("fuel").innerHTML = fuel;
	document.getElementById("fin").style.display = "none";
	motorOff();
	comenzado = true;
	hideMenu();
}

function moverNave(){
	if (fuel == 0){
		a = g;
	}
	v += a*dt;
	document.getElementById("velocidad").innerHTML = v.toFixed(2);
	y -= v*dt;
	document.getElementById("altura").innerHTML = (y-20).toFixed(2);
	
	//Mover hasta que top sea un 80% de la pantalla y explotar si supera cierta velocidad al tocar la superficie.
	if (y > 20){
		document.getElementById("nave").style.top = (100-y)+"%";
	} else { 
		stop();
		document.getElementById("altura").innerHTML = 0;
		clearInterval(timerFuel);
		if (v > maxv){
			lose();
		}else{
			win();
		}
	}
}

function win(){
	gameOver = false;
	document.getElementById("fin").style.display = "block";
	document.getElementById("fin").style.color = "green";
	document.getElementById("fin").innerHTML = "¡Enhorabuena comandante! Misión cumplida con éxito.";
}

function lose(){
	gameOver = true;
	document.getElementById("cohete").src = "img/explosion.png";
	document.getElementById("fin").style.display = "block";
	document.getElementById("fin").style.color = "red";
	document.getElementById("fin").innerHTML = "Misión fallida. Es una vergüenza para los de su especie, comandante."
}

function motorOn(){
	if (fuel > 0) {
		a = -g;
		if (timerFuel == null){
			timerFuel = setInterval(function(){	actualizarFuel(); }, 10);
			document.getElementById("cohete").src = "img/Cohete.png";
		}
	}
}

function motorOff(){
	a = g;
	clearInterval(timerFuel);
	timerFuel = null;
	document.getElementById("cohete").src = "img/CoheteSinFuego.png";
	//Para que la nave no cambie si ha explotado.
	if (y <= 20 && v > maxv && gameOver){
		document.getElementById("cohete").src = "img/explosion.png";
	}
}

function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	if (fuel > 0){
		fuel -= 0.1;
		document.getElementById("fuel").innerHTML = fuel.toFixed(2);
	} else {
		motorOff();
		document.getElementById("fuel").innerHTML = 0;
	}	
}

function showMenu(){
	document.getElementsByClassName("c")[0].style.display = "block";
	stop();
	document.getElementById("showm").style.height = 36 + "px";
	document.getElementById("showm").style.width = 36 + "px";
}

function hideMenu(){
	if(comenzado){
	document.getElementsByClassName("c")[0].style.display = "none";
	start();
	document.getElementById("showm").style.height = 48 + "px";
	document.getElementById("showm").style.width = 48 + "px";
	}
}

function pauseResume(){
	if(comenzado && y > 20){
		if(pause != true){
			stop();
		}else{
			start();
		}
	}
}

function showConfig(){
	stop();
	document.getElementsByClassName("configuracion")[0].style.display = "block";
	document.getElementsByClassName("c")[0].style.display = "none";
}

function hideConfig(){
	document.getElementsByClassName("configuracion")[0].style.display = "none";
	document.getElementsByClassName("c")[0].style.display = "block";
}

function changeDifficulty(){
	var diff = document.getElementsByTagName("input")[0].value;
	if(diff == "Fácil"){
		document.getElementsByTagName("input")[0].style.color = "orange";
		document.getElementsByTagName("input")[0].value = "Medio";
		maxv = 5;
	}else if(diff == "Medio"){
		document.getElementsByTagName("input")[0].style.color = "red";
		document.getElementsByTagName("input")[0].value = "Difícil";
		maxv = 1;
	}else{
		document.getElementsByTagName("input")[0].style.color = "green";
		document.getElementsByTagName("input")[0].value = "Fácil";
		maxv = 7;
	}
}