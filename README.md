# Lunar-Landing
Esta versión del proyecto contiene:
* HTML con los elementos del juego.
* Css: tres versiones que cargan mediante media query dependiendo del tamaño de pantalla.
* JS: con javascript que cubre todos los requisitos del proyecto.
* Imágenes optimizadas.

Enlace de rawgit: https://rawgit.com/PedroAmat/Lunar-Landing/master/LunarLanding/Index.html

Tareas desarrolladas:

##General:
* Se ha puesto fondo, imagen de la nave y Luna. Se ha puesto una tierra fijada a la pantalla para que se vea en cualquier tipo de dispositivo. Se han optimizado las imágenes. Se cargarán diferentes tamaños y formas de fondos en función del dispositivo usando css.
* Las páginas funcionan en diferentes buscadores, como Internet Explorer, Mozilla Firefox y Google Chrome.

##Nave:
* Al pulsar la barra espaciadora o bien tocar la pantalla del móvil la nave cambia de aspecto a *nave con motor encendido* y cambia la aceleración de g a -g, y al soltar cualquiera de los dos, la nave vuelve a tener el aspecto de *nave con motor apagado*.
* El valor de g se ha cambiado a 4 para que el juego sea más rápido.
* La posición de la nave (en porcentaje de la pantalla) varia en función de la velocidad y esta en función de la aceleración.
* Al pulsar la barra espaciadora o bien tocar la pantalla del móvil se vacia el tanque de combustible de forma proporcional al tiempo que mantenemos pulsado el propulsor.
* Se ha optado por eliminar la funcionalidad de encender el motor al hacer click, de manera que solo lo hará al presionar la barra espaciadora o al tocar la pantalla.
* Se ha controlado que la nave se "apague" cuando se le acabe el combustible y cuando llegue al suelo a la velocidad adecuada.
* Se ha invertido el sistema de referencia, es decir, la velocidad de la nave cuando baje será positiva y la altura disminuirá hasta llegar a 0.
* Al tocar la superficie de la Luna se mira si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo se muestra mensaje de felicitación, en caso negativo la nave explota. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú *Nueva partida*.
* Valores umbrales: 1m/s en modo difícil, 5m/s en modo medio, 7m/s en modo fácil.

##Menú:
* Se ha creado un menú a un lado de la pantalla para la versión de escritorio y un menú que ocupa el 100% del espacio disponible para el móvil.
* Entre otras cosas, el menú incluye un botón para comenzar una nueva partida. Este hará que la nave empiece a caer y reiniciará todo a sus valores iniciales en caso de haber jugado antes.
* Pulsando el botón de "Configuración" se puede acceder al selector de dificultad y cambiarla pulsando el botón que aparece.
* En la versión de escritorio se ha colocado un botón que pausa y reanuda la partida al apretar la tecla "P". Este botón no se muestra en la versión de móvil ya que esta tiene uno que muestra el menú y pausa la partida, y dentro de este tiene un botón para reanudar la partida y ocultar dicho menú.
* En la versión de móvil, el menú se muestra al cargar la página. Al abrir la configuración se oculta el menú y al ocultarla se vuelve a mostrar, de manera que no se superponen.
* Hay una página de *Instrucciones* y una página de *Acerca de* accesibles desde el menú con sus respectivos botones para volver a la página inicial.
