export default {
  global: {
    componenteFormativo: 'Consumo, abuso y adicciones y marco normativo',
    descripcionCurso:
      'Este componente formativo se enfoca en la comprensión de las características del consumo que pueden llevar a desarrollar una enfermedad adictiva y la forma como esta debe ser abordada desde una perspectiva de derechos para las personas consumidoras y el abordaje de atención integral y tratamiento de la enfermedad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Salud mental y consumo de Sustancias Psicoactivas - SPA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de salud mental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Adicción a SPA como enfermedad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diferencia entre consumo, abuso y dependencia de SPA',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Efectos sobre el funcionamiento cerebral',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Sistema de compensaciones',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atención al consumo de sustancias psicoactivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principio de atención integral',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Atención primaria en salud',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principio de progresividad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tratamiento para personas en condición de consumo de SPA',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Derechos y acceso a los servicios de salud para personas con trastornos derivados del consumo de SPA',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sustancias psicoactivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Efectos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Grupos vulnerables',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Enfermedad adictiva y factores relacionados',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Factor de riesgo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Determinantes sociales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Riesgo psicosocial',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Entornos de riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Colegios, universidades, amigos, comunidad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Papel de las redes sociales en el consumo de SPA',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Factores biológicos (cómo influyen en la conducta adictiva)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Familia',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Clases',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Estructura',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Función social',
            hash: 't_5_7',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Violencia intrafamiliar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Formas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Características',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Salud mental y consumo de SPA',
      referencia:
        'Ministerio de Justicia. (2016). <em>Estudio nacional de consumo de sustancias psicoactivas en población escolar.<em>',
      tipo: 'Estudio estadístico',
      link:
        'https://www.unodc.org/documents/colombia/2018/Junio/CO03142016_estudio_consumo_escolares_2016.pdf',
    },
    {
      tema: 'Sustancias psicoactivas',
      referencia:
        'Infodrogas (2.022). <em>Qué son las drogas - Clasificación.</em>',
      tipo: 'Texto informativo',
      link: 'https://www.infodrogas.org/drogas?start=1 ',
    },
    {
      tema: 'Papel de las redes sociales en el consumo de SPA',
      referencia:
        'De Corral, P., E. (2010). Adicción a las nuevas tecnologías y a las redes sociales en jóvenes. <em>Adicciones</em>, 22(2), 91-95.',
      tipo: 'Paper',
      link: 'https://www.redalyc.org/articulo.oa?id=289122889001',
    },
  ],
  glosario: [
    {
      termino: 'Afrontamiento',
      significado:
        'en psicología, el afrontamiento ha sido definido como un conjunto de estrategias cognitivas y conductuales que la persona utiliza para gestionar demandas internas o externas que sean percibidas como excesivas para los recursos del individuo. Se puede considerar como una respuesta adaptativa, de cada uno, para reducir el estrés que deriva de una situación vista como difícil de afrontar.',
    },
    {
      termino: 'Abuso de drogas',
      significado:
        'se produce cuando la persona que consume una o varias drogas lo hace de forma repetitiva y eso le provoca consecuencias adversas.',
    },
    {
      termino: 'Alcohol',
      significado:
        'etanol, componente psicoactivo principal de las bebidas alcohólicas. Por extensión, el término alcohol también se utiliza para referirse a las bebidas alcohólicas. En España, se considera bebida alcohólica la que tiene 1,2 grados de alcohol o más.',
    },
    {
      termino: 'Anfetamina',
      significado:
        'droga estimulante (conocida también con el nombre de <em>speed</em>) que provoca inicialmente estados de euforia y excitación, incremento de la energía y disminución del hambre y de la fatiga. Cuando pasan estos efectos, se experimenta una sensación de agotamiento, depresión, insomnio, somnolencia, ansiedad, etc.',
    },
    {
      termino: 'Calidad de vida',
      significado:
        'percepción del individuo sobre su posición en la vida dentro del contexto cultural y el sistema de valores en el que vive y con respecto a sus metas, expectativas, normas y preocupaciones.',
    },
    {
      termino: '<em>Cannabis</em>',
      significado:
        'sustancia que se obtiene a partir de la planta <em>Cannabis sativa</em>. Las presentaciones más consumidas del cannabis son la marihuana (hojas y tallos secados y triturados) y el hachís (resina prensada).',
    },
    {
      termino: 'Colaboración intersectorial',
      significado:
        'relación reconocida entre parte o partes de distintos sectores de la sociedad que se ha establecido para emprender acciones en un tema con el fin de lograr resultados de salud o resultados intermedios de salud, de manera más eficaz, eficiente o sostenible que aquella que el sector sanitario pueda lograr actuando en solitario.',
    },
    {
      termino: 'Condiciones de vida',
      significado:
        'las condiciones de vida son el entorno cotidiano de las personas donde estas viven, actúan y trabajan. Estas condiciones de vida son producto de las circunstancias sociales y económicas, y del entorno físico, todo lo cual puede ejercer impacto en la salud, estando en gran medida fuera del control inmediato del individuo.',
    },
    {
      termino: 'Droga Alucinógena',
      significado:
        'sustancia que provoca alteraciones de la percepción, de la coherencia del pensamiento y de la regularidad del estado de ánimo, pero sin confusión mental persistente o trastornos de la memoria.',
    },
    {
      termino: 'Droga estimulante',
      significado:
        'sustancia que estimula el sistema nervioso central y el cerebro, y le provoca una falsa sensación de control y de disminución de la fatiga.',
    },
    {
      termino: 'Factor de riesgo',
      significado:
        'condiciones sociales, económicas o biológicas, conductas o ambientes que están asociados con o causan un incremento de la susceptibilidad para una enfermedad específica, una salud deficiente o lesiones.',
    },
    {
      termino: 'Prevalencia',
      significado:
        'número de casos clínicos o portadores de una enfermedad en un determinado momento dentro de una comunidad.',
    },
    {
      termino: 'Prevención de la enfermedad',
      significado:
        'abarca las medidas destinadas no solamente a prevenir la aparición de la enfermedad, tales como la reducción de los factores de riesgo, sino también a detener su avance y atenuar sus consecuencias una vez establecida.',
    },
    {
      termino: 'Salud pública',
      significado:
        'concepto social y político destinado a mejorar la salud, prolongar la vida y mejorar la calidad de vida de las poblaciones mediante la promoción de la salud, la prevención de la enfermedad y otras formas de intervención sanitaria.',
    },
    {
      termino: 'Violencia intrafamiliar',
      significado:
        'cualquier tipo de abuso de poder cometido por algún miembro de la familia sobre otro; para dominar, someter, controlar o agredir física, psíquica, sexual, patrimonial o económicamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barra, A., y Diazconti, R. (2013). <em>Guías para el debate: diferencias entre uso, abuso y dependencia a las drogas.</em> ',
      link:
        'https://idpc.net/es/publications/2013/10/guias-para-el-debate-las-diferencias-entre-el-uso-el-abuso-y-la-dependencia-a-las-drogas',
    },
    {
      referencia:
        'Belarde, P., V. (2011). <em>Efectos psicológicos de la violencia intrafamiliar.</em> (Informe final del Trabajo de Grado). Universidad Central del Ecuador. ',
      link: 'http://www.dspace.uce.edu.ec/handle/25000/1680',
    },
    {
      referencia:
        'Congreso de Colombia. (2013). Ley 1566 de 2012 por la cual se dictan normas para garantizar la atención integral a personas que consumen sustancias psicoactivas y se crea el premio nacional "entidad comprometida con la prevención del consumo, abuso y adicción a sustancias" psicoactivas. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48678',
    },
    {
      referencia:
        'Corominas, M., Roncero, C., y Casas, M. (2007). El sistema dopaminérgico en las adicciones. <em>Revista de Neurología,</em> (44), 23-31. ',
      link:
        'https://www.semanticscholar.org/paper/Sistema-dopamin%C3%A9rgico-y-adicciones-Corominas-Roncero/edbd1e510ee461a73ba00b546776e2d38d30f87a',
    },
    {
      referencia:
        'Guardia J., Surkov S., y Cardúz M. (s. f.). <em>Manual de adicciones para médicos especialistas en formación.</em>',
      link: '',
    },
    {
      referencia:
        'Huttanus, S. R., Mazariegos, D. A., y Ramírez, A. M. (2016). Violencia en la familia: efectos psicológicos del maltrato. <em>Revista PsicoEducativa: Reflexiones y Propuestas,</em> 2(4), 99-104.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Justicia. (2016). <em>Estudio nacional de consumo de sustancias psicoactivas en población escolar.</em> ',
      link:
        'https://www.minjusticia.gov.co/programas-co/ODC/Publicaciones/Publicaciones/CO03142016_estudio_consumo_escolares_2016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). <em>El consumo de sustancias psicoactivas es un asunto de salud pública. Guía práctica para entender los derechos en salud y atención integral de las personas que consumen sustancias psicoactivas.</em> ',
      link:
        'https://www.minjusticia.gov.co/programas-co/ODC/Publicaciones/Publicaciones/CO031052013-Cartilla.pdf',
    },
    {
      referencia:
        'National Institute on Drug Abuse. (2020). <em>Las drogas, el cerebro y la conducta: bases científicas de la adicción.</em> NIDA. ',
      link: 'https://nida.nih.gov/sites/default/files/soa_sp.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2013). <em>Plan de acción sobre salud mental 2013-2020.</em> OMS. ',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/97488/9789243506029_spa.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2009). <em>Epidemiología de los trastornos mentales en América Latina y el Caribe.</em> OPS. ',
      link:
        ' https://iris.paho.org/bitstream/handle/10665.2/740/9789275316320.pdf',
    },
    {
      referencia:
        'Parra, A., y Diazconti, R. (2013). <em>Guías para el debate: diferencias entre uso, abuso y dependencia a las drogas.</em> ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Margarita Leal Cruz',
          cargo: 'Experto temático',
          centro:
            'Regional Distrito Capital Centro de Formación de Talento Humano en Salud',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Esocbar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Esocbar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
