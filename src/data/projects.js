const projects = [
  {
    name: "Recipe Box",
    repo: "recipebox",
    url: "https://recipebox.jimmyguzman.com/",
    description:
      "This Recipe Box was built with React, Redux and Sass. It's a webapp where the user is able to view, create and edit recipes.",
    spanish:
      "Esta Recipe Box fue construida con React, Redux y Sass. Es una aplicación de web en la que el usuario puede ver, crear y editar recetas.",
    tech: ["React", "Redux", "JavaScript", "Sass", "JSX", "Parcel"]
  },
  {
    name: "fcc Camper Leaderboard",
    repo: "fccCamperLeaderboard",
    url: "https://jimmy-guzman.github.io/fccCamperLeaderboard/",
    description:
      "The fcc Camper Leaderboard is a webapp built with React where the user is able to see the brownie points leaderboard according to their selection.",
    spanish: "",
    tech: ["React", "JavaScript", "JSX", "Parcel"]
  },
  {
    name: "React Flickr Gallery",
    repo: "reactflickrgallery",
    url: "https://reactflickrgallery.jimmyguzman.com/",
    description:
      "The React Flickr Gallery is an image gallery gallery made in react that pulls images from the Flickr API based on the user's search.",
    spanish: "",
    tech: ["React", "CSS", "JavaScript"]
  },
  {
    name: "Markdown Previewer",
    repo: "markdownpreviewer",
    url: "https://jimmy-guzman.github.io/markdownpreviewer/",
    description:
      "The Markdown Previewer was part of freeCodeCamp's React projects curriculum. It's a webapp that incorporates both React and Sass to render a preview of markdown in real time.",
    spanish: "",
    tech: ["React", "Sass", "marked.js"]
  },
  {
    name: "Simon Game",
    repo: "simongame",
    url: "https://jimmy-guzman.github.io/simongame/",
    description:
      "The Simon Game was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that uses Javascript to play Simon Says.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Tic Tac Toe Game",
    repo: "tictactoegame",
    url: "https://jimmy-guzman.github.io/tictactoegame/",
    description:
      "The Tic Tac Toe game was part of freeCodeCamp's advanced front end projects curriculum. The user is able to play tic tac toe versus the computer.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "pomodoroclock",
    name: "Pomodoro Clock",
    url: "https://jimmy-guzman.github.io/pomodoroclock/",
    description:
      "This Pomodoro Clock was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that acts as minimalist Pomodoro Technique timer with options.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "javascriptcalculator",
    name: "Javascript Calculator",
    url: "https://jimmy-guzman.github.io/javascriptcalculator/",
    description:
      "Javascript Calculator was part of freeCodeCamp's advanced front end projects curriculum. It's a web app that replicates a basic calculator through Javascript.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "employeedirectorydashboard",
    name: "Employee Directory Dashboard",
    url: "https://jimmy-guzman.github.io/employeedirectorydashboard/",
    description: "Employee directory that communicates with a third-party API.",
    spanish: "",
    tech: ["JavaScript", "jQuery", "HTML", "CSS"]
  },
  {
    repo: "webappdashboard",
    name: "Web App Dashboard",
    url: "https://jimmy-guzman.github.io/webappdashboard/",
    description:
      "Web dashboard complete with JavaScript-driven charts and graphs.",
    spanish: "",
    tech: ["JavaScript", "Sass", "HTML"]
  },
  {
    repo: "randomquotegenerator",
    name: "Random Quote Generator",
    url: "https://jimmy-guzman.github.io/randomquotegenerator/",
    description:
      "The random quote generator uses an API to grab a random quote. The user is also able to tweet the random quote.",
    spanish: "",
    tech: ["JavaScript", "AJAX", "HTML", "CSS"]
  },
  {
    repo: "localweatherapp",
    name: "Local Weather App",
    url: "https://jimmy-guzman.github.io/localweatherapp/",
    description:
      "The local weather app uses Dark Sky's API to fetch your local weather based on your location.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "wikipediaviewer",
    name: "Wikipedia Viewer",
    url: "https://jimmy-guzman.github.io/wikipediaviewer/",
    description:
      "The Wikipedia Viewer pulls results or a random article from Wikipedia's API based on the user's criteria.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "twitchtvviewer",
    name: "TwitchTv Viewer",
    url: "https://jimmy-guzman.github.io/twitchtvviewer/",
    description:
      "The TwitchTv viewer uses Twitch's API to fetch your list of twitch streams and show their current status.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "svganimations",
    name: "SVG Animations",
    url: "https://jimmy-guzman.github.io/svganimations/",
    description:
      "Modernized the user interface of a web page by adding, styling and optimizing SVG graphics.",
    spanish: "",
    tech: ["SVG", "HTML", "CSS"]
  },
  {
    repo: "gameshowapp",
    name: "Game Show App",
    url: "https://jimmy-guzman.github.io/gameshowapp/",
    description:
      "Game show app built with Javascript. The user is presented with a random phrase that players will try to guess by entering different letters into the program.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "interactivevideoplayer",
    name: "Interactive Video Player",
    url: "https://jimmy-guzman.github.io/interactivevideoplayer/",
    description:
      "The Interactive Video Player was developed using JavaScript and the HTML5 Video API. The player synchronizes the video and the transcript. In addition, when a user clicks on a transcript line it takes them to the appropriate part in the video.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    repo: "webstyleguide",
    name: "Web Style Guide",
    url: "https://jimmy-guzman.github.io/webstyleguide/",
    description:
      "The web style guide is using Sass and BEM style classes to prototype and apply a consistent look across multiple pages of a site.",
    spanish: "",
    tech: ["SASS", "HTML"]
  },
  {
    repo: "interactivephotogallery",
    name: "Interactive Photo Gallery",
    url: "https://jimmy-guzman.github.io/interactivephotogallery/",
    description:
      "An interactive, searchable gallery of photos made using HTML, CSS and JavaScript.",
    spanish: "",
    tech: ["JavaScript", "HTML", "CSS"]
  }
];

export default projects;
