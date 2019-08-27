import React from "react";
import { render } from "react-dom";
import { createStore, compose } from "redux";
import { AppContainer } from "./components/app";

render(<AppContainer />, document.getElementById("root"));
