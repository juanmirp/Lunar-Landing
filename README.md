# Lunar-Landing
Esta versión del proyecto contiene:
* HTML con los elementos del juego.
* Css: tres versiones que cargan mediante media query dependiendo del tamaño de pantalla.
* JS: con javascript que cubre todos los requisitos del proyecto.
* Imágenes optimizadas.

Tareas desarrolladas:
* Se ha puesto fondo, imagen de la nave y Luna. Se ha puesto una tierra fijada a la pantalla para que se vea en cualquier tipo de dispositivo. Se han optimizado las imágenes. Se cargarán diferentes tamaños y formas de fondos en función del dispositivo usando css.
* Se ha creado un menú a un lado de la pantalla para la versión de escritorio y un menú que ocupa el 100% del espacio disponible para el móvil.
* Al pulsar la tecla "W" o bien hacer click en la pantalla la nave debe cambia de aspecto a *nave con motor encendido* y cambia la aceleración de g a -g, y al soltar cualquiera de los dos, la nave vuelve a tener el aspecto de *nave con motor apagado*.
* Al pulsar la tecla "W" o bien hacer click en la pantalla se vacia el tanque de combustible de forma proporcional al tiempo que mantenemos pulsado el propulsor.
* Se ha controlado que la nave se "apague" cuando se le acabe el combustible y cuando llegue al suelo a la velocidad adecuada.
* Se ha invertido el sistema de referencia, es decir, la velocidad de la nave cuando baje será positiva y la altura disminuirá hasta llegar a 0.
* Al tocar fondo se mira si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo se muestra mensaje de felicitación, en caso negativo la nave explota. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú *Nueva partida*.
* Valores umbrales: 1m/s en modo difícil, 5m/s en modo medio, 7m/s en modo fácil. Pulsando el botón de "Configuración" se puede acceder al selector de dificultad y cambiarla pulsando el botón que aparece.
* En la versión de escritorio se ha colocado un botón que pausa y reanuda la partida cuando se está jugando. Este botón no se muestra en la versión de móvil ya que esta tiene un botón que muestra el menú y pausa la partida, y dentro de este tiene un botón para reanudar la partida y ocultar dicho menú.
* Hay una página de *Instrucciones* y una página de *Acerca de* accesibles desde el menú.

Enlace de rawgit: https://rawgit.com/PedroAmat/Lunar-Landing/master/LunarLanding/Index.html
