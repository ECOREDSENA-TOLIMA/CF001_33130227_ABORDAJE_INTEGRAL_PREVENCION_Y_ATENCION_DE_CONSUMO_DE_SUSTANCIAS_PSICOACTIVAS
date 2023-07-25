<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Salud mental y consumo de Sustancias Psicoactivas - SPA
    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-4 El consumo de SPA (Sustancias Psico Activas) nunca será ajeno a los efectos e incidencia sobre la salud mental, ya que esta constituye un requisito fundamental para el desarrollo integral, la productividad, la autonomía y la garantía de interacciones propias de la vida. De igual manera, los problemas y trastornos en salud mental pueden ser una consecuencia del consumo de SPA, que se ha evidenciado a través de la investigación científica.	 
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Concepto de salud mental
    p.mb-5(data-aos="zoom-in") En el siguiente video del SENA en YouTube, se podrá hacer un recorrido a través de los conceptos de salud y salud mental.
   
    .row.justify-content-center.align-items-center
      .col-md-10.col-12(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/tema1-01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco ¿Qué es salud y salud mental?
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/3_Dq5SHwZ0I" target="_blank")
                    strong Ver Video
      .col-12(data-aos="zoom-in")
        p.mb-5 La OMS define la salud mental como un estado de bienestar en el que un individuo puede participar en un comportamiento significativo y con un propósito, tiene la capacidad de enfrentar los desafíos de la vida y puede hacer una contribución a su comunidad (OMS, 2013). Sin embargo, existen diferentes tipos de enfermedades mentales: depresión, trastornos de ansiedad, esquizofrenia, trastorno bipolar, trastornos por uso de sustancias, trastornos alimentarios y trastorno de estrés postraumático (OPS, 2009).
    
    .row.justify-content-center.align-items-center.mt-5 
      .col-12.col-md-12(data-aos="fade-left")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-02.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-2(data-aos="zoom-in") Es importante entender que este concepto no se concibe desde la ausencia de la enfermedad o el problema, sino de la capacidad de afrontamiento que permite a una persona, a pesar de estar diagnosticada con una psicopatología, tener una salud mental positiva en términos de su productividad y sus interacciones.
            br
            br
            p.mb-0(data-aos="zoom-in") La Organización Mundial de la Salud (OMS) ha identificado tres objetivos principales para mejorar la salud mental: 
            br
            ul.lista-ul.px-2(data-aos="zoom-out")
              li 
                i.lista-ul__vineta
                | Prevenir los trastornos mentales que ocurren en primer lugar a través de la detección e intervención tempranas.
              br
              li 
                i.lista-ul__vineta
                | Ayudar a las personas a recuperarse de estos trastornos después de que hayan ocurrido a través de una atención oportuna y adecuada.
              br
              li 
                i.lista-ul__vineta
                |	Promover el bienestar mental de la población.

    .row.justify-content-center.align-items-center.mt-5
      .col-12(data-aos="fade-left")
        p(data-aos="zoom-out") Aunque la OMS tiene muchos objetivos específicos en cuanto a salud mental, uno de ellos es reducir el estigma que rodea a los problemas de salud mental, lo que puede ayudar a las personas a sentirse más cómodas al buscar tratamiento para ellos. El Programa de Acción para la Brecha de Salud Mental de la OMS también se enfoca en mejorar el acceso a la atención y promover una mejor comprensión de los diferentes tipos de problemas de salud mental. También han trabajado con gobiernos y otras organizaciones en todo el mundo para desarrollar políticas y estrategias que puedan mejorar la forma en que se aborda este tema.
        p(data-aos="zoom-out") En Colombia, la salud mental es considerada un derecho, contemplado a través de la Ley 1616 de 2013, cuyo objeto es “garantizar el ejercicio pleno del derecho a la salud mental a la población colombiana priorizando a los niños y niñas. Por otro lado, la Política Pública de Salud Mental establece los lineamientos frente a la atención primaria, la promoción y la prevención”.
        p(data-aos="zoom-out") En el siguiente enlace, el Ministerio de Salud y Protección Social explica la finalidad de esta ley y su incidencia con las Sustancias Psicoactivas.
      .col-md-8.col-12.mt-4(data-aos="fade-left")
        a.anexo.mb-4.mb-lg-0(href="https://www.minsalud.gov.co/salud/Paginas/convivencia-desarrollo-humano-sustancias-psicoactivas.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            h4 Enlace web. Explicación Ley 1566 de 2012

      .col-12.mt-4(data-aos="fade-right")
        p Existen diversos factores que contribuyen a que alguien desarrolle una enfermedad mental, estos incluyen:

      .col-lg-10.col-12.mt-4(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-03.svg', :alt="alt_img_3")

    .row.justify-content-center.align-items-center.mt-5 
      .col-12(data-aos="fade-left")
        p(data-aos="zoom-out") Estos factores son llamados determinantes sociales en salud y pueden desencadenar repercusiones sobre la salud mental.
        p(data-aos="zoom-out") El problema mental se entiende como un malestar que genera dificultades en la interacción con los otros debido a la vivencia de eventos estresantes que no son tan graves como un trastorno mental. En esta categoría se encuentran las consecuencias psicológicas de las experiencias traumáticas y las reacciones emocionales ante las pérdidas significativas tales como:
      .col-12
        ul.lista-ul
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            | Síntomas depresivos y/o ansiosos.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            |	Consumo de alcohol. 
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            |	Otras sustancias psicoactivas.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            |	Problemas de aprendizaje.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            |	Problemas de comunicación.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            |	Dificultades de socialización.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            |	Conductas de riesgo alimentario (no comer, aunque se tenga hambre, malestar con el acto de comer, atracones, vómito después de comer). 
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            |	Alteraciones en el sueño, entre otros.

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.col-md-10(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-04.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0(data-aos="zoom-in") Los problemas mentales hacen parte de las condiciones que más se pueden encontrar en la cotidianidad de las personas y surgen en escenarios de convivencia familiar, en las relaciones de pareja donde hay conflictos mal gestionados, en el mundo del trabajo como consecuencia del estrés o la insatisfacción laboral, en las relaciones entre pares, por problemas de autoimagen y autoestima. Son diversas las causas, sin embargo, hay que tener presente que donde se encuentre activo el sufrimiento emocional, manifestado en tristeza, irritabilidad, angustia, estrés, allí por lo general aparece un problema mental.

      .col-12(data-aos="fade-left")
        p Por lo general, los hábitos influyen de manera importante en la aparición o no de estos trastornos. Es así como la ingesta de licor o cualquier otro tipo de sustancias psicoactiva, la vida sedentaria, la despreocupación por aprender a manejar y gestionar las emociones y los conflictos de forma positiva, la falta de un proyecto de vida que entregue propósito de vida, son algunas de las causas que pueden desencadenar la aparición de la enfermedad en cualquier momento del ciclo vital.
      .col-12(data-aos="fade-left")
        p La evidencia científica ha demostrado que las sustancias psicoactivas no son solo un problema de salud pública, sino también de salud mental. Los efectos adversos del consumo de estas van desde el desorden conductual hasta el deterioro cognitivo y la discapacidad crónica. Las personas con trastornos mentales, como la esquizofrenia o la depresión severa, son mucho más propensas a adquirir y abusar de estas sustancias, porque tienen una mayor predisposición genética para hacerlo; además, la mayoría tiene menor tolerancia a las mismas.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Adicción a SPA como enfermedad
    p.mb-5(data-aos="zoom-in") La enfermedad adictiva puede desarrollarse en cualquier momento de la vida, sin discriminación de sustancia o situación, ya que puede también estar enfocada en comportamientos compulsivos tales como el juego, el sexo, la religión, el orden, el trabajo o una persona, entre otros.
   
    .row.justify-content-center.align-items-center.mt-5 
      .col-12.col-md-10(data-aos="fade-left")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-05.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4 Qué químicos inciden
            br
            br
            p.mb-2(data-aos="zoom-in") El alcohol, la marihuana, la cocaína y otras sustancias son químicos que actúan directamente sobre el cerebro, modificando su funcionamiento al cruzar las barreras de neurotransmisores y circuitos neuronales. Esto se ve reflejado en la alteración de la conducta, el pensamiento y la motivación. Estos efectos pueden ser transitorios en la medida en que la ingesta de sustancias sea aguda, es decir de un momento determinado y termina, pero el consumo crónico produce cambios de larga duración en el funcionamiento cerebral, lo que se convierte en un factor de riesgo frente a la enfermedad adictiva.
      .col-12.mt-5
        p(data-aos="zoom-in") Por lo general, las personas que inician un consumo crónico de sustancias, irán añadiendo otras conductas adictivas ya sea químicas o comportamentales. Por ejemplo, una persona puede iniciar consumo de alcohol de forma crónica cada fin de semana y lo hace en los casinos, jugando y apostando su dinero. Esto puede llevar a un aumento progresivo de la enfermedad adictiva ya que su sistema de recompensas está siendo cada vez más estimulado, no solo desde la respuesta físico-química, sino desde la compensación emocional y psicológica. Si esta persona no se detiene ya sea a través de un tratamiento o de un entorno protector que le permita salir de esta condición, la tendencia a sustituir las conductas adictivas será más alta y la progresión de la enfermedad adictiva será rápida y más difícil de manejar por la vía de la voluntad propia y el deterioro cognitivo, emocional y social será visible.
        p.mt-2.mb-4(data-aos="zoom-in") En el siguiente enlace del Ministerio de Salud, se puede apreciar información importante sobre esta temática desde el sector gubernamental.

      .col-md-8.col-12.mt-4(data-aos="fade-left")
        a.anexo.mb-4.mb-lg-0(href="https://www.minsalud.gov.co/salud/Paginas/convivencia-desarrollo-humano-sustancias-psicoactivas.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            h4 Enlace web. Prevención del Consumo de Sustancias Psicoactivas (SPA)
      
      .col-12.mt-5
        p(data-aos="zoom-in") Para entender por qué la adicción es una enfermedad, es importante tener claro que el cerebro humano maneja un sistema de compensaciones, que funciona a través de diversas estructuras tales como el sistema límbico (cerebro emocional) y el hipocampo, que en condiciones naturales se activan a través de los mecanismos fisiológicos de refuerzo como tomar agua -cuando hay sed-, comer -cuando se siente hambre- o las conductas sexuales -cuando hay deseo sexual-; estos se conocen como efectos reforzadores. 
        p.mt-2.mb-4(data-aos="zoom-in") Sin embargo, cuando este sistema se dispara a través de sustancias que el cerebro no necesita y que lo estimulan, el efecto de refuerzo se vuelve persistente a través del recuerdo de las sensaciones placenteras que la sustancia generó, incitando al deseo o #[i craving] para experimentarlo de nuevo. 

    .row.justify-content-center.align-items-center.mt-2.mb-4 
      .col-12.col-md-6(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-06.png', alt='Este estado de necesidad pone a funcionar el pensamiento y conductas automáticas')
      .col-12.col-md-6(data-aos="zoom-out")
        p Este estado de necesidad pone a funcionar el pensamiento y conductas automáticas, es decir no conscientes que llevan a las personas a buscar el consumo de dicha sustancia. El gran riesgo de este estado, es que cada vez más va a superar otro tipo de necesidades, produciendo cambios en el comportamiento, la forma de pensar y sobre el autocontrol. 
        p.mb-0 La persona dependiente cada vez más justifica el consumo de sustancias, con argumentos que lo llevan a convencerse a sí mismo de que hay que seguir consumiendo, de esta forma las personas se convierten en adictos fisiológicos, pero también y más graves aún, en adictos psicológicos.

      .col-12.mt-4(data-aos="zoom-in")
        p Con el paso del tiempo las personas pueden darse cuenta de que su conducta es problemática, ya que los efectos a nivel académico, familiar y social se empiezan a sentir y seguramente hay un deseo de abandonar o reducir el consumo, sin embargo si ha desarrollado dependencia va encontrar dificultades para hacerlo ya que su capacidad de autocontrol va a estar deteriorada y realizará esfuerzos por alejarse, pero tras un periodo de pocas semanas volverá a consumir y recaerá, entrando en periodos de culpa, abstención, consumo, recaída, configurando así el círculo propio de la adicción.


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Diferencia entre consumo, abuso y dependencia de SPA
    p.mb-5(data-aos="zoom-in") Las personas que consumen sustancias psicoactivas no necesariamente terminan en una enfermedad adictiva, razón por la cual es fundamental diferenciar las características del uso, abuso y dependencia a las SPA.

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.col-md-10(data-aos="fade-left")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-07.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4 Uso o consumo de sustancias psicoactivas
            br
            br
            p.mb-2(data-aos="zoom-in") El consumo hace referencia al uso aislado o episódico de cualquier sustancia psicoactiva, sin presentar dependencia o afectaciones físicas o psicológicas. Sin embargo, un consumo esporádico de una droga sin medición del riesgo o el límite puede generar un daño por sobredosis o un riesgo, como por ejemplo accidentalidad vial como consecuencia del consumo de alcohol u otra sustancia que disminuya la conciencia, reflejos y estado de alerta.
      
      .col-12.mt-4(data-aos="fade-left")
        p Se habla por lo general de tres tipos o niveles de consumo:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Tipos de consumo</i>
      .col-12.px-0(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Tomada de Barra y Diazconti (2013)
            thead
              tr
                th(style="width:20%") Tipo
                th Características
            tbody
              tr
                td.td-uno-table.text-center #[strong Experimental]
                td.td-dos-table.px-3 Punto de partida de toda forma de consumo que se da por curiosidad y la persona prueba una o más sustancias para sentir el efecto de estas, lo hace una o máximo dos veces y no vuelve a consumir.
              tr
                td.td-uno-table.text-center #[strong Recreativo]
                td.td-dos-table.px-3 Tiene como objetivo principal orientar a las organizaciones para que sus productos y servicios cumplan con los estándares de calidad para la satisfacción de sus clientes.
              tr
                td.td-uno-table.text-center #[strong Habitual]
                td.td-dos-table.px-3 Para llegar a este nivel las personas han pasado por el uso experimental y/o recreativo. Ya se ha definido una sustancia de preferencia, lo que significa que se han probado una amplia gama de estas y la elección se basa en el gusto por la sensación que produce. A este nivel la cantidad y la frecuencia han aumentado y la droga pasa a tener un papel importante para la vida del consumidor. El riesgo de desarrollar una enfermedad adictiva a este nivel es alto dependiendo del tipo de droga.
    
    .row.justify-content-center.align-items-center.mt-4
      .col-12.col-md-10(data-aos="fade-left")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-08.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4 Abuso de sustancias psicoactivas
            br
            br
            p.mb-2(data-aos="zoom-in") Se habla de abuso cuando el consumo se vuelve una compulsión, es decir, que el estado de necesidad aparece de manera más frecuente y a la persona le cuesta resistirse, depende de la droga, del contexto donde se mueve el consumo y de las sensaciones y estilo de vida. En este sentido, el abuso se convierte en un consumo problemático que genera afectaciones sobre la salud física y consecuencias sociales evidentes.
      
      .col-12.mt-5
        p(data-aos="fade-right") A continuación, se describen las condiciones clave que permiten tipificar una conducta de consumo abusivo durante un periodo máximo de un año.

      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
        p.titulo.pb-0.mb-0 <b>Tabla 2.</b> <i>Condiciones para identificar el abuso de SPA</i>
      .col-12.px-0(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Tomada de Barra y Diazconti (2013)
            thead
              tr
                th(style="width:20%") Tipo
                th Características
            tbody
              tr
                td.td-uno-table.text-center #[strong Tolerancia]
                td.td-dos-table.px-3 Se refiere a la necesidad de consumir cantidades más altas del psicoactivo para conseguir las sanciones deseadas o un efecto considerablemente menor con el uso continuo de la sustancia.
              tr
                td.td-uno-table.text-center #[strong Abstinencia]
                td.td-dos-table.px-3 Son los síntomas que la persona empieza a presentar como consecuencia de la falta de la droga y empieza a buscar consumos alternativos que permitan compensar el sufrimiento físico y psicológico que produce el no consumo. 
              tr
                td.td-uno-table.text-center #[strong Alto consumo]
                td.td-dos-table.px-3 Aumento significativo de la cantidad y frecuencia del consumo.
              tr
                td.td-uno-table.text-center #[strong Deseo persistente]
                td.td-dos-table.px-3 Se evidencia una necesidad difícil de controlar frente al consumo de la sustancia. La persona lucha por dejar de consumir, pero no lo logra.
              tr
                td.td-uno-table.text-center #[strong Mal uso del tiempo]
                td.td-dos-table.px-3 La persona consumidora invierte la mayor parte de su tiempo tratando de conseguir la droga, consumiendo o recuperándose de sus efectos.
              tr
                td.td-uno-table.text-center #[strong Abandono de actividades]
                td.td-dos-table.px-3 Poco a poco la persona va abandonando las actividades sociales, recreativas, trabajo, estudio ya que el enfoque está en su propio consumo.
              tr
                td.td-uno-table.text-center #[strong Consumo continuado]
                td.td-dos-table.px-3 El uso de la sustancia se hace más frecuente, a pesar de que la persona reconoce los efectos negativos de la misma a nivel físico y psicológico.
    
    .row.justify-content-center.align-items-center.mt-4
      .col-12.col-md-10(data-aos="fade-left")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-09.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4 Dependencia
            br
            br
            p.mb-2(data-aos="zoom-in") El estado de dependencia está enmarcado en la enfermedad adictiva y se puede desarrollar de forma rápida o lentamente de acuerdo al tipo de psicoactivo consumido. La característica principal de la dependencia es la imposibilidad de dejar de consumir debido a la reacción física y psicológica de la abstinencia. Para el adicto, la vida gira en torno al consumo y la ansiedad se hace cada vez más fuerte.
      
    .row.justify-content-center.align-items-center.mb-4.mt-4(data-aos="fade-left")
      .col-md-10.col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Círculo vicioso de las adicciones</i>
      .col-md-10.col-lg-6.col-12(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-10.svg", alt='"Círculo vicioso de las adicciones". En la figura se representa que el circulo vicioso se centra en vivir para consumir y consumir para vivir, rodeado de las acciones conseguir, consumir, nuevamente conseguir y consumir.')

      .col-12.mt-5(data-aos="fade-right")
        p La dependencia puede evidenciarse de dos formas, como se muestra a continuación:

    .row.justify-content-center.mb-4.mt-4(data-aos="fade-left")
      .col-lg-4.col-md-6.col-12
        figure
          img(src="@/assets/curso/temas/tema1/tema1-11.svg", alt="")
        h4.mt-3 Dependencia física
        p Se manifiesta a través de los cambios neuroquímicos y fisiológicos derivados del consumo de la sustancia y la tolerancia a la misma. De esta forma, el cuerpo necesita dosis cada vez más altas para lograr la compensación requerida.
      .col-lg-4.col-md-6.col-12
        figure
          img(src="@/assets/curso/temas/tema1/tema1-12.svg", alt="")
        h4.mt-3 Dependencia psicológica
        p Se evidencia en los cambios conductuales y emocionales que la droga produce: depresión, ansiedad, angustia, irritabilidad, falta de sentido de vida, culpa. La persona consumidora para no sentir este malestar y sufrimiento emocional, busca consumir más, generando la sensación de no poder vivir sin el psicoactivo.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Efectos sobre el funcionamiento cerebral
    p(data-aos="zoom-in") Las sustancias psicoactivas aumentan la producción de una molécula llamada dopamina, que funciona como vehículo de conexión neuronal de sustancias químicas. La dopamina es, entonces, un neurotransmisor responsable, entre otras de sus funciones, del sistema de recompensa. Corominas y Roncero (2007), plantean que la dopamina tiene dos funciones principales: por un lado, facilita el aprendizaje relacionado con la recompensa y, por el otro, activa el recuerdo del estímulo que genera placer y estimula los pensamientos automáticos para la búsqueda de dicha recompensa. 
    p.mb-5(data-aos="zoom-in") Esta alteración de los sistemas de recompensa produce afectaciones cerebrales que se describen a continuación.

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/tema1-14.svg', alt='Efectos sobre el funcionamiento cerebral')

      div(x="5%" y="16%" tooltip="Ver más")
        p #[strong Esta estructura corteza prefrontal] es la responsable del pensamiento lógico-formal, de la toma de decisiones, de la planificación y organización y del control de los impulsos básicos. Se ha evidenciado que la maduración de esta corteza culmina hacia los 25 años, lo que aumenta los factores de riesgo en las personas que inician consumo a temprana edad ya que disminuye aún más la posibilidad de control del impulso frente al consumo, pero, además, genera alteraciones en las funciones vitales de pensamiento.
        p Otras partes del cerebro también se pueden ver afectadas por el consumo de sustancias, tales como el tronco encefálico que regula funciones vitales como el funcionamiento cardio respiratorio y los ciclos de sueño.
      div(x="75%" y="16%" tooltip="Ver más")
        p #[strong Los ganglios basales] tienen funciones relacionadas con la motivación positiva y los efectos placenteros de las mismas en actividades naturales como comer, la actividad sexual, la interacción social; de igual forma, intervienen en la conformación de hábitos. Esta zona hace parte de todo el circuito de recompensa del cerebro.
        p Los psicoactivos producen estimulación en el circuito generando “euforia” y sensación de placer al consumirla, sin embargo, la estimulación frecuente disminuye la sensibilidad, debido a los procesos adaptativos se generan, lo que hace que se necesite más estímulo para sentir la recompensa esperada.
      div(x="5%" y="81%" tooltip="Ver más")
        p #[strong En la amígdala extendida] se producen las sensaciones de estrés, irritabilidad, angustia y ansiedad que hacen parte del efecto de la abstinencia y que se produce cuando se deja de consumir y la sustancia psicoactiva desaparece del sistema nervioso. Estas sensaciones que generan desagrado, sufrimiento emocional y físico, son un impulso para volver a consumir y las personas ya no lo hacen para mantener el estado de euforia, sino para disminuir los síntomas de la abstinencia.


    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Sistema de compensaciones
    p(data-aos="zoom-in") Como ya se ha explicado, el cerebro, en su circuito de recompensa, trabaja y se activa para proporcionar placer y bienestar. Las evidencias y estudios realizados para entender la forma como las sustancias psicoactivas funcionan en el cuerpo y fundamentalmente en el cerebro, han mostrado que son más fuertes que la recompensa natural. De esta forma es muy fácil que el cerebro deje de sentir placer por situaciones que antes eran motivantes, como la música, la diversión, el deporte, la comida, entre muchas otras fuentes de placer humano, esto, debido al efecto supresor que generan la drogas, que hace que cada vez sea más difícil esta estimulación natural y haya necesidad de buscarla a partir de la sustancia psicoactiva que consume. 
    p.mb-5(data-aos="zoom-in") Por este motivo una persona que abusa de las drogas termina desmotivada, con desánimo y depresión y le costará cada vez más disfrutar de la vida sin el uso de las sustancias, que también van aumentando en sus dosis para lograr el estado de “euforia”, debido al efecto de tolerancia.
    
    .row.justify-content-center.align-items-center.mb-4.mt-4
      .col-md-6.col-12(data-aos="zoom-in-up")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-13.png", alt="")
      .col-md-6.col-12(data-aos="zoom-in-up")
        p.mb-0 Ese #[i high] euforia que se siente al ingerir SPA, se ha estudiado y, sin embargo, aún no se ha logrado establecer qué es lo que realmente lo produce, las teorías más fuertes establecen que se genera una tormenta de químicos que envían respuestas, conexiones y señales que activan el circuito de compensación o placer. Parte de estos químicos incluyen las endorfinas (opioides naturales del cuerpo) y de otros neurotransmisores, que hacen más fuerte las sensaciones placenteras en comparación con las recompensas naturales, por ello las drogas son tan adictivas. 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    alt_img_3:
      'En la figura se representa los factores que contribuyen para una enfermedad mental como la genética, experiencias raumáticas como guerras, desastres naturales, también factores como historia familiar, ambiente social y cultura, igualmente contribuyen factores como roles de género, edad, etnia, además los niveles de pobreza, nivel educativo y el consumo de sustancias psicoactivas. "Acciones de prevención y control del dengue".',
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
