import "normalize.css";
import style from "./scss/index.scss";
import App from "./components/App";
import React from "react";
import { render } from "react-dom";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Oswald:400,700", "Lato"]
  }
});

render(<App />, document.getElementById("root"));
