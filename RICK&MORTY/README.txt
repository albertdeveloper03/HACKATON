-index.html: En el la pagina html tenemos el header con el logo de rick y morti, a continuacion tenemos la barra de busqueda para hacer la busqueda 
por nombre de los personajes.
En el main tenemos las tarjetas de los personajes con su imagen, nombre, especie y origen. Tambien dispone de un boton para mostrar mas personajes cuando
se llega al final de la pagina.

-index.css: el estilo de la web sigue el estilo de rick y morti, con tonos verdes y oscuros. De background tiene una imagen que se mantiene fija cuando
hacer scoll del espacio exterior. Cuando la web se encuentra en formato mobil, se enseña otra imagen diferente a la de computadora, ajustandose mejor
a la pantalla.

-index.js: En el codigo javascript hemos realizado un fetch con la url de la api de rick y morty, asi obteniendo los datos correspondientes de los
personajes. He creado una tarjeta con cada personaje y la mostramos en el div characters-list. la fncion handle search input se encarga de parsear
los nombres de los personajes dinamicamente cuando el usuario pone una letra en el input. 
