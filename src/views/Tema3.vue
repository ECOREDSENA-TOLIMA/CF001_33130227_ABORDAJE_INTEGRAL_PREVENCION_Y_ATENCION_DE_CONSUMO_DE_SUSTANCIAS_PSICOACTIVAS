<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sustancias psicoactivas

    .row.justify-content-center.align-items-center.py-0.mb-4
      .col-12(data-aos="fade-up")
        p.mb-2 En la siguiente presentación, se amplía el concepto de sustancias psicoactivas, su uso y su clasificación.
    

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5(data-aos="fade-left")
      SlyderA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Acceder a las sustancias
            p.mb-0 Las personas a lo largo de la historia han buscado formas de estimulación que ayuden a generar efectos de placer, sin embargo, en la actualidad se ha desarrollado una infinidad de posibilidades que hacen muy tentador para las poblaciones de alto riesgo, consumir y, además, acceder a la sustancia.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/tema3-06.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Consumo de SPA
            p.mb-0 En Colombia, las sustancias pueden ser legales como el alcohol y el tabaco y otras son consideradas ilegales, debido a que no se permite el consumo de las mismas y su uso y comercialización es penalizado. En la actualidad, el consumo de SPA en el mundo se ha incrementado, lo que representa un riesgo para la salud y se ha considerado un problema de salud pública debido a las consecuencias del consumo problemático y la enfermedad adictiva.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/tema3-07.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Recuerde que es un SPA
            p.mb-0 Recuerde que una SPA (Sustancias Psicoactivas) es toda sustancia química que puede activar el sistema nervioso central, produciendo alteraciones en la conciencia, de las funciones psicológicas, perturbación mental y sensorial que se ve reflejada en el comportamiento y las emociones de quien la consume.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/tema3-08.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Uso recreativo
            p.mb-0 Las personas que consumen sustancias psicoactivas en un primer momento coinciden con el uso recreativo, el cual hace parte de los escenarios sociales en donde la diversión hace que una droga que se acepta socialmente sea parte de la vida de las personas desde muy temprana edad; es importante reconocer que el consumo de una droga puede llevar al consumo de otras.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/tema3-09.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Mecanismo de escape
            p.mb-0 Por otro lado, una SPA puede ser un mecanismo de escape a una realidad que no se quiere afrontar. Según el tipo de droga, puede producir efectos sobre la conciencia que permiten olvidar el dolor emocional que se puede estar sintiendo. El uso de una sustancia y las razones por la cuales cada persona elige consumir está directamente relacionado con sus condiciones personales, factores genéticos, contexto y nivel de satisfacción con la propia vida.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/tema3-10.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Clasificación
            p.mb-0 Las sustancias psicoactivas pueden clasificarse de diferentes formas teniendo en cuenta su efecto sobre el cerebro, la legalidad, el origen y la volatilidad de las mismas, aquí se abordará la clasificación, de acuerdo con los efectos sobre el sistema nervioso-cerebro, que es la que tiene pertinencia para comprender los riesgos frente a la salud mental.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/tema3-11.png', alt='')

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Efectos
    p(data-aos="zoom-in") Todas las SPA, producen alteraciones en el sistema nervioso en un mayor o menor grado y su efecto depende de varios factores:
    
    .row.justify-content-center.align-items-center.py-0  
      .col-12.mb-4
        ul.lista-ul
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            | Condiciones individuales.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            | Cantidad utilizada.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            | Primera vez, o control del síndrome de abstinencia.
          li(data-aos="zoom-in")
            i.lista-ul__vineta
            | Concomitancia con otras drogas.
      .col-12
        p(data-aos="zoom-in") Otro aspecto que es importante resaltar es que hay SPA que son depresores del sistema nervioso como el alcohol, pero en la ingesta inicial puede sentirse un estado de desinhibición y euforia, pero, finalmente, en su efecto final genera somnolencia y depresión.
        p(data-aos="zoom-in") En la siguiente tabla se presenta la clasificación y efectos que causan las sustancias psicoactivas.

    .row.justify-content-center
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
        p.titulo.pb-0.mb-0 <b>Tabla 4.</b> <i>Clasificación y efectos de las sustancias psicoactivas</i>
      .col-12.px-0(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Clasificación
                th Descripción - Efectos
                th Nombres con el que se conocen
                th Vía y forma de administración
                th Efectos 
            tbody
              tr
                td.td-uno-table Estimulantes.
                td.td-dos-table Alteran el sistema nervioso agitándolo, aumentando su ritmo y el de otros órganos. Euforia, excitabilidad.
                td.td-dos-table 
                  div
                    p Cocaína: fua, perico, blanquito, nieve, coca. 
                    p Bazuco: susto, zuco, pistolo.
                    p Anfetaminas: anfetas, meta y tiza.
                    p Éxtasis: píldora del amor o pastilla del abrazo, equis.
                    p #[em Popers.]
                    p Tabaco - cigarrillo.
                td.td-dos-table 
                  div
                    p Esnifada inyectada o tópica.
                    p Fumado - Esnifado.
                    p Oral es la más común. 
                    p Oral.
                    p Inhalado.
                    p Fumado.
                td.td-dos-table Daños: contracción de los vasos sanguíneos, elevando la presión arterial y provocando fuertes dolores de cabeza. A nivel cardiovascular, se generan arritmias y taquicardias. A nivel del sistema nervioso central, se presenta fiebre y en algunos casos convulsiones, pérdida de dientes (bazuco), depresiones por uso continuo, empatía, sensualidad (éxtasis). Cáncer (tabaco).
              tr
                td.td-uno-table Depresoras.
                td.td-dos-table Estas sustancias inhiben y vuelven lento el funcionamiento del sistema nervioso, Se conocen también como psicolépticas, en dosis altas, pueden producir un coma e incluso la muerte. Su nombre no significa que produzcan un estado emocional de depresión o tristeza. 
                td.td-dos-table 
                  div
                    p Alcohol - trago, chorro.
                    p Bóxer - (gale, galuche, sacol), cera, pintura, Cloruro de etileno 
                    p #[em Dick,] fragancia, Lady's o Lady D.
                    p Tranquilizantes, ansiolíticos, hipnóticos. 
                    p Heroína - H, merca, caballo.
                td.td-dos-table 
                  div
                    p Oral.
                    p Inhalado.
                    p Inhalado.
                    p.mb-0 Barbitúricos: vía oral.
                    p Benzodiacepinas: vía oral, sublingual, o intravenosa.
                    p.mb-0 Fumada (heroína de color café).
                    p.mb-0 Vía endovenosa (heroína blanca).
                    p.mb-0 También se consume por vía oral, esnifada, subcutánea e intramuscular.
                td.td-dos-table 
                  p.mb-0 Alteraciones psicomotoras y del comportamiento, gastritis, náuseas, vómitos, cefalea, paranoia o celotipia alcohólica, trastornos del sueño, trastornos del ánimo, trastornos de ansiedad. El alcohol puede producir agresividad. Disminución del apetito y del frío (bóxer).
                  p.mb-0 En ciertas ocasiones pueden generar alucinaciones, agresividad e hiperactividad motora.
                  p Los efectos secundarios incluyen: somnolencia, mareo, dolor de cabeza, desorientación, visión borrosa, habla confusa.

              tr
                td.td-uno-table Alucinógenas.
                td.td-dos-table Generan alteraciones en la percepción sensorial, cognitiva, se ve afectado el estado de conciencia y las personas tienen alucinaciones.
                td.td-dos-table 
                  div
                    p LSD (ácido lisérgico), hongos, ácidos, #[em trips.]
                    p Marihuana, #[em cannabis,] hachís, bareta, porro, ganya,
                    p Ketamina - Keta, special K. 
                td.td-dos-table 
                  div
                    p Oral.
                    p Inhalada, fumada - vía oral.
                    p Vía oral, intranasal, rectal, inhalada, intravenosa e intramuscular.
                td.td-dos-table 
                  p.mb-0 Dilatación de la pupila. calor, aumento de la presión sanguínea, vértigo, náuseas, somnolencia, debilidad muscular, picores y hormigueos en la piel, sentimientos de fortaleza, depresión profunda, aumento o disminución de la ansiedad, confusión general. Escaso rendimiento en la ejecución de tareas complejas marihuana, problemas de memoria y concentración. Deterioro de habilidades de lenguaje. #[em Flashbacks] (keta). 

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Grupos Vulnerables
    p(data-aos="zoom-in") Estos son grupos poblacionales desprotegidos que se encuentran en un alto riesgo de consumir sustancias psicoactivas.
    p(data-aos="zoom-in") A continuación, se mencionan ciertos factores que inciden en que la vulnerabilidad frente al consumo de SPA se incremente.

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Individuales
            p A nivel individual la baja tolerancia a la frustración, la baja estima, la agresividad, suelen ser condiciones que ponen en riesgo a las personas frente al consumo; también incide la edad ya que esta cumple un papel muy importante ya que los cambios de etapas: niñez - adolescencia, adultez - vejez, constituyen grupos de alta vulnerabilidad por las características propias de las cargas emocionales, cambios hormonales,  necesidad de aceptación, condiciones de vida, aumento de responsabilidades, nido vacío, entre otros. 
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Familiares
            p Entre los factores familiares se encuentran el consumo de sustancias psicoactivas por parte de padres de familia o cuidadores, comportamientos autoritarios innegociables, ausencia de la figura paterna o materna, negligencia, sobreprotección, falta de supervisión de los padres o cuidadores, violencia intrafamiliar, abuso, entre otros. 
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-02.png', alt='')    
        .row.justify-content-center.align-items-center
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Sociales
            p A nivel social se encuentran el bajo apoyo o carencia de redes sociales, acceso y frecuencia a entornos de consumo de las sustancias psicoactivas, uso de sustancias psicoactivas por parte de pares, violencias en el entorno escolar y laboral.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-03.png', alt='')  


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Enfermedad adictiva y factores relacionados
    p(data-aos="zoom-in") A lo largo del texto se ha hablado de cómo el consumo puede terminar en una enfermedad adictiva de manejo interdisciplinar y de efectos fuertes sobre la salud psicológica, física y en el entorno social en general. Cabe resaltar que no todas las personas que consumen y abusan del consumo, terminan desarrollando la adicción y esto tiene que ver con las condiciones individuales que generan mayor riesgo, en su mayoría ligadas a la afectividad y rasgos de personalidad. 
    p(data-aos="zoom-in") A continuación, se detallan algunos factores que se consideran pueden generar mayor riesgo de desarrollar la enfermedad; sin embargo, no son los únicos. 
    p(data-aos="zoom-in") Es importante comprender que más allá de los factores individuales, familiares y sociales, se ha estudiado otros factores determinantes para el consumo entre los que se encuentran los siguientes:
    
    .row.justify-content-center.align-items-center.py-0(data-aos="fade-left")
      .col-12.mb-4
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Enfermedad mental")
            .row.justify-content-center.align-items-center
              .col-md-6.col-12
                .row.justify-content-center.align-items-center
                  .col-md-6.col-12
                    figure
                      img(src='@/assets/curso/temas/tema3/tema3-04.svg', alt='')
              .col-md-6.mb-4.mb-md-0.col-12
                h4 Enfermedad mental
                p Se ha estudiado la co-ocurrencia de diferentes trastornos psiquiátricos derivados de las adicciones y se ha encontrado que las personas  con historial psiquiátrico de enfermedades como trastornos de ansiedad, depresión, esquizofrenia, trastorno bipolar, trastornos de la personalidad, estas personas pueden tener un 50% más de probabilidad de desarrollar una enfermedad adictiva que una persona sin diagnóstico psiquiátrico de base. 
            
          .py-3.py-md-4(titulo="Vínculos afectivos")
            .row.justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0.col-12
                .row.justify-content-center.align-items-center
                  .col-md-10.col-12
                    figure
                      img(src='@/assets/curso/temas/tema3/tema3-05.svg', alt='')
              .col-md-6.col-12
                h4 Vínculos afectivos
                p La construcción de vínculos afectivos sanos a lo largo de la vida es fundamental para proteger la estructura psicológica. Cabe resaltar que la violencia y el abuso es la expresión más sentida en la afectividad humana que aumenta el riesgo al consumo en la búsqueda de llenar vacíos emocionales que compensen el malestar emocional.
          
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
