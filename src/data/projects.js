const projects = [
  {
    name: "Recipe Box",
    repo: "recipebox",
    url: "https://recipebox.jimmyguzman.com/",
    description:
      "This Recipe Box was built with React, Redux and Sass. It's a webapp where the user is able to view, create and edit recipes.",
    spanish:
      "Esta Recipe Box fue construida con React, Redux y Sass. Es una aplicación de web en la que el usuario puede ver, crear y editar recetas.",
    tech: ["ReactJS", "Redux", "JavaScript", "Sass", "JSX", "Parcel"]
  },
  // {
  //   name: "fcc Camper Leaderboard",
  //   repo: "fccCamperLeaderboard",
  //   url: "https://jimmy-guzman.github.io/fccCamperLeaderboard/",
  //   description:
  //     "The fcc Camper Leaderboard is a webapp built with React where the user is able to see the brownie points leaderboard according to their selection.",
  //   spanish:
  //     "La fcc Camper Leaderboard es una aplicación de web echa con React. El usuario puede ver la tabla de puntuaciones de brownie dependiendo de su selección.",
  //   tech: ["ReactJS", "JavaScript", "JSX", "Parcel"]
  // },
  // {
  //   name: "React Flickr Gallery",
  //   repo: "reactflickrgallery",
  //   url: "https://reactflickrgallery.jimmyguzman.com/",
  //   description:
  //     "The React Flickr Gallery is an image gallery made in react that pulls images from the Flickr API based on the user's search.",
  //   spanish:
  //     "La React Flickr Gallery es una galería echa con React que baja imágenes del API de Flickr basado en la busqueda del usuario.",
  //   tech: ["ReactJS", "CSS", "JavaScript"]
  // },
  {
    name: "Markdown Previewer",
    repo: "markdownpreviewer",
    url: "https://jimmy-guzman.github.io/markdownpreviewer/",
    description:
      "The Markdown Previewer is a webapp that incorporates both React and Sass to render a preview of markdown in real time.",
    spanish:
      "El Markdown Previewer es una aplicación de web que incorpora React y Sass para renderizar Markdown en tiempo real.",
    tech: ["ReactJS", "Sass", "marked.js"]
  },
  // {
  //   name: "Simon Game",
  //   repo: "simongame",
  //   url: "https://jimmy-guzman.github.io/simongame/",
  //   description:
  //     "The Simon Game was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that uses Javascript to play Simon Says.",
  //   spanish:
  //     "The Simon Game fue parte de los proyectos avanzados de freeCodeCamp. Es una aplicación de web que usa Javascript para jugar a Simon Says",
  //   tech: ["JavaScript", "HTML", "CSS"]
  // },
  {
    name: "Tic Tac Toe Game",
    repo: "tictactoegame",
    url: "https://jimmy-guzman.github.io/tictactoegame/",
    description:
      "In this Tic Tac Toe Game user is able to play tic tac toe versus the computer. The computer ai is based on the minimax algorithm.",
    spanish:
      "El juego Tic Tac Toe fue parte del currículum de proyectos avanzados de FreeCodeCamp. El usuario puede jugar tres en raya contra la computadora.",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "pomodoroclock",
    name: "Pomodoro Clock",
    url: "https://jimmy-guzman.github.io/pomodoroclock/",
    description:
      "This Pomodoro Clock was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that acts as minimalist Pomodoro Technique timer with options.",
    spanish:
      "El Pomodoro Clock fue parte del plan de estudios avanzado de freeCodeCamp. Es una aplicación de web que actúa como un minutero minimalista de Pomodoro Technique con opciones.",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "javascriptcalculator",
    name: "Javascript Calculator",
    url: "https://jimmy-guzman.github.io/javascriptcalculator/",
    description:
      "Javascript Calculator was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that replicates a basic calculator through Javascript.",
    spanish:
      "La Javascript Calculator fue parte del plan de estudios avanzado de freeCodeCamp. Es una aplicación de web que replica una calculadora básica a través de Javascript.",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "employeedirectorydashboard",
    name: "Employee Directory Dashboard",
    url: "https://jimmy-guzman.github.io/employeedirectorydashboard/",
    description:
      "Employee directory dashboard that communicates with a third-party API.",
    spanish:
      "Tablero de directorios de empleados que se comunica con una API de terceros",
    tech: ["JavaScript", "jQuery", "HTML", "CSS"]
  },
  {
    repo: "webappdashboard",
    name: "Web App Dashboard",
    url: "https://jimmy-guzman.github.io/webappdashboard/",
    description:
      "Web dashboard complete with JavaScript-driven charts and graphs.",
    spanish:
      "Tablero web completo con tablas y gráficos guiados por JavaScript.",
    tech: ["JavaScript", "ChartJS", "Sass", "HTML"]
  },
  // {
  //   repo: "randomquotegenerator",
  //   name: "Random Quote Generator",
  //   url: "https://jimmy-guzman.github.io/randomquotegenerator/",
  //   description:
  //     "The random quote generator uses an API to grab a random quote. The user is also able to tweet the random quote.",
  //   spanish:
  //     "El Random Quote Generator usa una API para obtener una cotización aleatoria. El usuario también puede twittear la cita aleatoria.",
  //   tech: ["JavaScript", "AJAX", "HTML", "CSS"]
  // },
  // {
  //   repo: "localweatherapp",
  //   name: "Local Weather App",
  //   url: "https://jimmy-guzman.github.io/localweatherapp/",
  //   description:
  //     "The Local Weather App uses Dark Sky's API to fetch your local weather based on your location.",
  //   spanish:
  //     "La Local Weather App usa la API de Dark Sky para buscar el clima local con tu ubicación.",
  //   tech: ["JavaScript", "HTML", "CSS"]
  // },
  {
    repo: "wikipediaviewer",
    name: "Wikipedia Viewer",
    url: "https://jimmy-guzman.github.io/wikipediaviewer/",
    description:
      "The Wikipedia Viewer pulls results or a random article from Wikipedia's API based on the user's criteria.",
    spanish:
      "El Wikipedia Viewer extrae resultados o un artículo aleatorio de la API de Wikipedia basado en los criterios del usuario.",
    tech: ["JavaScript", "HTML", "CSS"]
  }
  // {
  //   repo: "twitchtvviewer",
  //   name: "TwitchTv Viewer",
  //   url: "https://jimmy-guzman.github.io/twitchtvviewer/",
  //   description:
  //     "The TwitchTv viewer uses Twitch's API to fetch your list of twitch streams and show their current status.",
  //   spanish:
  //     "El TwitchTv Viewer usa la API de Twitch para buscar tu lista de transmisiones de twitch y mostrar su estado actual.",
  //   tech: ["JavaScript", "HTML", "CSS"]
  // },
  // {
  //   repo: "svganimations",
  //   name: "SVG Animations",
  //   url: "https://jimmy-guzman.github.io/svganimations/",
  //   description:
  //     "Modernized the user interface of a web page by adding, styling and optimizing SVG graphics.",
  //   spanish:
  //     "En este proyecto al agregar, diseñar y optimizar gráficos SVG modernicé la interfaz de usuario de una página web ",
  //   tech: ["SVG", "HTML", "CSS"]
  // },
  // {
  //   repo: "gameshowapp",
  //   name: "Game Show App",
  //   url: "https://jimmy-guzman.github.io/gameshowapp/",
  //   description:
  //     "Game show app built with Javascript. The user is presented with a random phrase that players will try to guess by entering different letters into the app.",
  //   spanish:
  //     "La Game Show App fue desarrollada con Javascript. Ingresando diferentes letras en la applicacion, el usuario intentará adivinar las frases aleatoria que se le presenta.",
  //   tech: ["JavaScript", "HTML", "CSS"]
  // },
  // {
  //   repo: "interactivevideoplayer",
  //   name: "Interactive Video Player",
  //   url: "https://jimmy-guzman.github.io/interactivevideoplayer/",
  //   description:
  //     "The Interactive Video Player was developed using JavaScript and the HTML5 Video API. The player synchronizes the video and the transcript. In addition, when a user clicks on a transcript line it takes them to the appropriate part in the video.",
  //   spanish:
  //     "El Interactive Video Player se desarrolló utilizando JavaScript y HTML5 Video API. El reproductor de video sincroniza el video y la transcripción. Además, cuando un usuario hace clic en una línea de transcripción, lo lleva a la parte apropiada del video.",
  //   tech: ["JavaScript", "HTML", "CSS"]
  // },
  // {
  //   repo: "webstyleguide",
  //   name: "Web Style Guide",
  //   url: "https://jimmy-guzman.github.io/webstyleguide/",
  //   description:
  //     "The Web Style Guide is using Sass and BEM style classes to prototype and apply a consistent look across multiple pages of a site.",
  //   spanish:
  //     "La Web Style Guide usa clases de estilo Sass y BEM para prototipar y aplicar una apariencia coherente en varias páginas de un sitio.",
  //   tech: ["SASS", "HTML"]
  // },
  // {
  //   repo: "interactivephotogallery",
  //   name: "Interactive Photo Gallery",
  //   url: "https://jimmy-guzman.github.io/interactivephotogallery/",
  //   description: "An interactive, searchable gallery of photos.",
  //   spanish: "Una galería de fotos interactiva que se puede buscar.",
  //   tech: ["JavaScript", "HTML", "CSS"]
  // }
];

export default projects;
