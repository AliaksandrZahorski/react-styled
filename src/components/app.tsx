import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { store } from "../store/store";
import { Page } from "./page/page";

export class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Page />
        </Provider>
      </BrowserRouter>
    );
  }
}
