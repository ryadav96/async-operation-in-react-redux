import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "../reducers";

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
