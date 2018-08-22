import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./home/Home";

import './style.scss';

ReactDOM.render(<Home header="Humble electron generator" />, document.querySelector("electron-app"));
