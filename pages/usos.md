---
layout: base
title: Usos
---
<div class='content'>

    <h2>Íconos alineados con el texto </h2>

    <p>
        Los íconos de Stampa pueden ser usados en cualquier parrafo usando la etiqueta <code> &lti&gt</code>
        <br>
    </p>

    <p class='ejemplo'><i class="icn icn-mano-arriba"></i> icn-mano arriba </p>

    <script src="https://gist.github.com/creyesnav/9979507.js"></script>

    <h2>Íconos de mayor tamaño </h2>

    <p>
        A los íconos se les puede incorporar las clases <code>sm</code> <code>md</code> <code>lg</code> y <code>xl</code>; que varían su tamaño en relación con el parrafo en que se encuentra. 
        <br>
    </p>


    <p class='ejemplo'><i class="icn icn-mano-arriba icn-sm"></i> icn-mano arriba 
        <br><i class="icn icn-mano-arriba icn-md"></i> icn-mano arriba 
        <br><i class="icn icn-mano-arriba icn-lg"></i> icn-mano arriba 
        <br><i class="icn icn-mano-arriba icn-xl"></i> icn-mano arriba </p>

        <br>

        <script src="https://gist.github.com/creyesnav/9979745.js"></script>

        <br>

        <h2>Íconos enumeradores</h2>

        <p>
         Se incluye dentro de los usos de los íconos en listas ordenadas de elementos. Incorporando las clases <code>icn-ul</code> e  <code>icn-li</code> se reemplazan las viñetas.
         <br>
     </p>

     <ul class="icn-ul ejemplo">
      <li><i class="icn icn-li icn-visto"></i>icn-visto</li>
      <li><i class="icn icn-li icn-visto"></i>icn-visto</li>
      <li><i class="icn icn-li icn-equis"></i>icn-equis</li>
  </ul>

  <script src="https://gist.github.com/creyesnav/11040069.js"></script>

  <h2>Íconos capitales</h2>

  <p>
    Usando las clases <code>icn-border</code>, que bordea el ícono, en conjunto con <code>pull-left</code> o <code>pull-right</code>, se obtiene como resultado un elemento que sirve para iniciar parrafos y darles un cierto carácter.
    <br>
</p>

<p class="ejemplo">
    <i class="icn icn-corazon icn-2x pull-left icn-border"></i>
    Ícono a modo de letra capital.
</p>

<script src="https://gist.github.com/creyesnav/11040552.js"></script>

<h2>Íconos rotados y volteados</h2>

<p>
    Usando las clases <code>icn-rotate-</code> e <code>icn-flip-</code> se puede modificar la dirección y el sentido del ícono.
    <br><br>
    La dirección del ícono se puede modificar agregando al final de la clase la cantidad de ángulos que se desea rotar. De modo que las clases <code>icn-rotate-90</code>, <code>icn-rotate-180</code> e <code>icn-rotate-270</code> van cambiando la dirección del ícono.
    <br><br>
    Las clases <code>icn-flip-horizontal</code> e <code>icn-flip-vertical</code> hacen un efecto espejo sobre el ícono en el sentido correspondiente.
    <br><br>
</p>

<p class="ejemplo">
    <i class="icn icn-imagen"></i> normal <br>
    <i class="icn icn-imagen icn-rotate-90"></i> icn-rotate-90 <br>
    <i class="icn icn-imagen icn-rotate-180"></i> icn-rotate-180 <br>
    <i class="icn icn-imagen icn-rotate-270"></i> icn-rotate-270 <br>
    <i class="icn icn-imagen icn-flip-horizontal"></i> icn-flip-horizontal <br>
    <i class="icn icn-imagen icn-flip-vertical"></i>  icn-flip-vertical 
</p>

<script src="https://gist.github.com/creyesnav/180b8c3e77696676a0c4.js"></script>

<h2>Íconos giratorios</h2>

<p>
    Mediante una animación CSS3, la clase <code>icn-spin</code> permite que cualquier ícono gire (funciona de mejor manera con aquellos circulares).
    <br>
</p>


<p class='ejemplo'>
    <i class="icn icn-engranaje icn-spin"></i> icn-engranaje 
    <br>
    <i class="icn icn-ciclo icn-spin icn-lg"></i> icn-ciclo
</p>

<script src="https://gist.github.com/creyesnav/10637306.js"></script>

<h2>Íconos apilados</h2>

<p>
    Se pueden apilar iconos de Stampa usando la clase <code>icn-stack</code> dentro de la etiqueta agrupadora <code> &ltspan&gt</code>, seguida por los íconos que se desean agrupar.
    <br>
    <br>
    Para los íconos, se pueden usar las clases <code>icn-stack-1x</code> para el ícono de menor tamaño e <code> icn-stack-2x</code> para el de mayor, de manera que no se sobrepongan entre ellos.
    <br>
    <br>
    Se incluye la clase <code>icn-inverse</code> la cual cambia el color de relleno del ícono a su opuesto, siendo en este caso el blanco, de manera que se pueda sobreponer un ícono en uno con relleno.
    <br>
    <br>
    Por último, en la etiqueta <code>&ltspan&gt</code> se pueden combinar más clases, como por ejemplo, <code>icn-stack icn-lg</code> para hacer una agrupación de una escala mayor.
</p>

<p class="ejemplo">
    <span class="icn-stack">
        <i class="icn icn-cuadro icn-stack-2x"></i>
        <i class="icn icn-twitter icn-stack-1x"></i>
    </span>
    icn-cuadro / icn-twitter

    <br>
    <br>
    <span class="icn-stack">
        <i class="icn icn-cuadro-lleno icn-stack-2x"></i>
        <i class="icn icn-facebook icn-stack-1x icn-inverse"></i>
    </span>
    icn-cuadro-lleno / icn-facebook

    <br><br>

    <span class="icn-stack icn-lg">
        <i class="icn icn-parlante icn-stack-1x"></i>
        <i class="icn icn-prohibir icn-stack-2x"></i>
    </span>

    icn-parlante / icn-prohibir

    <script src="https://gist.github.com/creyesnav/11040445.js"></script>

    <h2>Íconos con estilos CSS3</h2>

    <p>
        A las funciones previamente establecidas de Stampa, se le pueden agregar los estilos y clases del framework Pyxis, diseñado especialmente para la Escuela de Arquitectura y Diseño PUCV; cambiando así el color, agregando sombra, etc.
        <br>
    </p>

    <p class='ejemplo'>
        <span class="icn-stack icn-lg">
          <i class="icn icn-cuadro icn-stack-2x naranja-opuesto"></i>
          <i class="icn icn-facebook icn-stack-1x naranja-opuesto"></i>
      </span>

      icn-cuadro / icn-facebook

      <br><br>

      <span class="icn-stack">
          <i class="icn icn-ojo icn-stack-1x"></i>
          <i class="icn icn-prohibir icn-stack-2x rojo"></i>
      </span>

      icn-camara / icn-prohibir

      <br><br>

      <span class="icn-stack icn-lg">
          <i class="icn icn-circulo-lleno icn-stack-2x naranja"></i>
          <i class="icn icn-rss icn-stack-1x icn-inverse"></i> 
      </span>

      icn-circulo-lleno / icn-rss
  </p>

  <script src="https://gist.github.com/creyesnav/392e9c14a39e1a75dd6d.js"></script>
</div>