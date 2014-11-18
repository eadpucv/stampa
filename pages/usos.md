---
layout: base
title: Usos
---
<div class='content'>

<h2>Íconos alineados con el texto </h2>

<p>Los íconos de Stampa pueden ser usados en cualquier parrafo usando la etiqueta <code>&lti&gt</code> o <code>&ltspan&gt</code> para tener un <acronym title='Hypertext Markup Language'>HTML</acronym> válido para todos los navegadores. Se recomienda el uso de <code>&ltspan&gt</code> ya que la etiqueta <code>&lti&gt</code> podría definir atributos tipográficos conflictivos si se trabaja dentro de un framework más complejo.</p>

<h3>Caso 1: Etiqueta vacía con una clase específica</h3>
<p class='ejemplo'><span class="icn icn-acto icn-lg"></span></p>
<code>&lt;span class=&quot;icn icn-acto&quot;&gt;&lt;/span&gt;</code>
<h3>Caso 2: Ligadura con la clase genérica</h3>
<p class='ejemplo'><span class="icn icn-lg">acto</span></p>
<code>&lt;span class=&quot;icn&quot;&gt;acto&lt;/span&gt;</code>


<h2>Íconos de mayor tamaño </h2>

<p>
    A los íconos se les puede incorporar las clases <code>sm</code> <code>md</code> <code>lg</code> y <code>xl</code>; que varían su tamaño en relación con el parrafo en que se encuentra. 
    <br>
</p>

<p>
<span class="icn icn-acto icn-sm"></span> icn-acto <br>
<span class="icn icn-acto icn-md"></span> icn-acto <br>
<span class="icn icn-acto icn-lg"></span> icn-acto <br>
<span class="icn icn-acto icn-xl"></span> icn-acto 
</p>

<code class='bloque'>&lt;span class=&quot;icn icn-acto icn-sm&quot;&gt;&lt;/span&gt; icn-mano arriba
&lt;span class=&quot;icn icn-acto icn-md&quot;&gt;&lt;/span&gt; icn-mano arriba
&lt;span class=&quot;icn icn-acto icn-lg&quot;&gt;&lt;/span&gt; icn-mano arriba
&lt;span class=&quot;icn icn-acto icn-xl&quot;&gt;&lt;/span&gt; icn-mano arriba 
</code>

    <h2>Íconos enumeradores</h2>

    <p>
       Se incluye dentro de los usos de los íconos en listas ordenadas de elementos. Incorporando las clases <code>icn-ul</code> e  <code>icn-li</code> se reemplazan las viñetas.
       <br>
   </p>

<ul class="icn-ul">
    <li><span class="icn icn-li icn-visto"></span>icn-visto</li>
    <li><span class="icn icn-li icn-visto"></span>icn-visto</li>
    <li><span class="icn icn-li icn-equis"></span>icn-equis</li>
</ul>

<code class='bloque'>&lt;ul class=&quot;icn-ul&quot;&gt;
    &lt;li&gt;&lt;span class=&quot;icn icn-li icn-visto&quot;&gt;&lt;/span&gt;icn-visto&lt;/li&gt;
    &lt;li&gt;&lt;span class=&quot;icn icn-li icn-visto&quot;&gt;&lt;/span&gt;icn-visto&lt;/li&gt;
    &lt;li&gt;&lt;span class=&quot;icn icn-li icn-equis&quot;&gt;&lt;/span&gt;icn-equis&lt;/li&gt;
&lt;/ul&gt;</code>

<h2>Íconos capitales</h2>

<p>Usando las clases <code>icn-border</code>, que bordea el ícono, en conjunto con <code>pull-left</code> o <code>pull-right</code>, se obtiene como resultado un elemento que sirve para iniciar parrafos y darles un cierto carácter.</p>

<p><span class="icn icn-acto icn-2x pull-left icn-border"></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at mi varius, lobortis felis id, interdum enim. Proin tempus sollicitudin sagittis. Pellentesque ut gravida erat. Sed ut dolor sodales, semper justo nec, fringilla arcu. Maecenas consequat lectus odio, ut convallis erat tincidunt mattis. Vestibulum et dolor maximus lectus ultrices convallis quis sit amet libero. Phasellus rhoncus dolor vel nunc tincidunt, sed blandit est vestibulum. In ac sapien leo. Vivamus gravida mattis nunc in tristique. Praesent at libero dolor.</p>

<code class='bloque'>&lt;p&gt;&lt;span class=&quot;icn icn-acto icn-2x pull-left icn-border&quot;&gt;&lt;/span&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at mi varius, 
lobortis felis id, interdum enim. Proin tempus sollicitudin sagittis. 
Pellentesque ut gravida erat. Sed ut dolor sodales, semper justo nec, 
fringilla arcu. Maecenas consequat lectus odio, ut convallis erat tincidunt mattis. 
Vestibulum et dolor maximus lectus ultrices convallis quis sit amet libero. 
Phasellus rhoncus dolor vel nunc tincidunt, sed blandit est vestibulum. In ac sapien leo. 
Vivamus gravida mattis nunc in tristique. Praesent at libero dolor.&lt;/p&gt;</code>

<h2>Íconos rotados y volteados</h2>

<p>Usando las clases <code>icn-rotate-</code> e <code>icn-flip-</code> se puede modificar la dirección y el sentido del ícono.</p>

<p>La dirección del ícono se puede modificar agregando al final de la clase la cantidad de ángulos que se desea rotar. De modo que las clases <code>icn-rotate-90</code>, <code>icn-rotate-180</code> e <code>icn-rotate-270</code> van cambiando la dirección del ícono.</p>
    
<p>Las clases <code>icn-flip-horizontal</code> e <code>icn-flip-vertical</code> hacen un efecto espejo sobre el ícono en el sentido correspondiente.</p>

<p>
<span class="icn icn-imagen"></span> normal <br>
<span class="icn icn-imagen icn-rotate-90"></span> icn-rotate-90 <br>
<span class="icn icn-imagen icn-rotate-180"></span> icn-rotate-180 <br>
<span class="icn icn-imagen icn-rotate-270"></span> icn-rotate-270 <br>
<span class="icn icn-imagen icn-flip-horizontal"></span> icn-flip-horizontal <br>
<span class="icn icn-imagen icn-flip-vertical"></span>  icn-flip-vertical 
</p>

<code class='bloque'>&lt;span class=&quot;icn icn-imagen&quot;&gt;&lt;/span&gt; normal
&lt;span class=&quot;icn icn-imagen icn-rotate-90&quot;&gt;&lt;/span&gt; icn-rotate-90
&lt;span class=&quot;icn icn-imagen icn-rotate-180&quot;&gt;&lt;/span&gt; icn-rotate-180
&lt;span class=&quot;icn icn-imagen icn-rotate-270&quot;&gt;&lt;/span&gt; icn-rotate-270
&lt;span class=&quot;icn icn-imagen icn-flip-horizontal&quot;&gt;&lt;/span&gt; icn-flip-horizontal
&lt;span class=&quot;icn icn-imagen icn-flip-vertical&quot;&gt;&lt;/span&gt;  icn-flip-vertical</code>

<h2>Íconos giratorios</h2>

<p>
    Mediante una animación CSS3, la clase <code>icn-spin</code> permite que cualquier ícono gire (funciona de mejor manera con aquellos circulares).
    <br>
</p>


<p class='ejemplo'>
    <span class="icn icn-engranaje icn-spin"></span> icn-engranaje <br>
    <span class="icn icn-ciclo icn-spin icn-lg"></span> icn-ciclo
</p>

<code class='bloque'>&lt;span class=&quot;icn icn-engranaje icn-spin&quot;&gt;&lt;/span&gt; icn-engranaje
&lt;span class=&quot;icn icn-ciclo icn-spin icn-lg&quot;&gt;&lt;/span&gt; icn-ciclo</code>

<h2>Íconos apilados</h2>

<p>Se pueden apilar iconos de Stampa usando la clase <code>icn-stack</code> dentro de la etiqueta agrupadora <code> &ltspan&gt</code>, seguida por los íconos que se desean agrupar.</p>
<p>Para los íconos, se pueden usar las clases <code>icn-stack-1x</code> para el ícono de menor tamaño e <code> icn-stack-2x</code> para el de mayor, de manera que no se sobrepongan entre ellos.</p>
<p>Se incluye la clase <code>icn-inverse</code> la cual cambia el color de relleno del ícono a su opuesto, siendo en este caso el blanco, de manera que se pueda sobreponer un ícono en uno con relleno.</p>

<p>
<span class="icn-stack">
    <span class="icn icn-cuadrolleno icn-stack-2x azul"></span>
    <span class="icn icn-facebook icn-stack-1x icn-inverse"></span>
</span>

<span class="icn-stack">
    <span class="icn icn-cuadrolleno icn-stack-2x rojo"></span>
    <span class="icn icn-travesia icn-stack-1x icn-inverse"></span>
</span>

<span class="icn-stack">
    <span class="icn icn-circulolleno icn-stack-2x naranja"></span>
    <span class="icn icn-rss  icn-inverse icn-stack-1x"></span>
</span>
</p>

<code class='bloque'>&lt;span class=&quot;icn-stack&quot;&gt;
    &lt;span class=&quot;icn icn-cuadrolleno icn-stack-2x azul&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;icn icn-facebook icn-stack-1x icn-inverse&quot;&gt;&lt;/span&gt;
&lt;/span&gt;

&lt;span class=&quot;icn-stack&quot;&gt;
    &lt;span class=&quot;icn icn-cuadrolleno icn-stack-2x rojo&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;icn icn-travesia icn-stack-1x icn-inverse&quot;&gt;&lt;/span&gt;
&lt;/span&gt;

&lt;span class=&quot;icn-stack&quot;&gt;
    &lt;span class=&quot;icn icn-circulolleno icn-stack-2x naranja&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;icn icn-rss  icn-inverse icn-stack-1x&quot;&gt;&lt;/span&gt;
&lt;/span&gt;</code>

<p>Por último, en la etiqueta <code>&ltspan&gt</code> se pueden combinar más clases, como por ejemplo, <code>icn-stack icn-lg</code> para hacer una agrupación de una escala mayor.</p>

<p>
<span class="icn-stack">
    <span class="icn icn-circulolleno icn-stack-2x"></span>
    <span class="icn icn-lupa icn-inverse icn-stack-1x"></span>
</span>

<span class="icn-stack icn-lg">
    <span class="icn icn-circulolleno icn-stack-2x"></span>
    <span class="icn icn-lupa icn-inverse icn-stack-1x"></span>
</span>
</p>
<code class='bloque'>&lt;span class=&quot;icn-stack&quot;&gt;
    &lt;span class=&quot;icn icn-circulolleno icn-stack-2x&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;icn icn-lupa icn-inverse icn-stack-1x&quot;&gt;&lt;/span&gt;
&lt;/span&gt;

&lt;span class=&quot;icn-stack icn-lg&quot;&gt;
    &lt;span class=&quot;icn icn-circulolleno icn-stack-2x&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;icn icn-lupa icn-inverse icn-stack-1x&quot;&gt;&lt;/span&gt;
&lt;/span&gt;</code>
<h4>Área de Pruebas</h4>
<p>Este espacio opera con la tipografía Web Stampa. Escribe los nombres de los íconos; no verás las letras, pero al completar el nombre aparecerá el caracter correspondiente:</p>
<h2>Regular</h2>
<textarea class='icn icn-xl w100'>acto</textarea>
<h2>Ligera</h2>
<textarea class='icn icn-light icn-xl w100'>acto</textarea>
</div>
