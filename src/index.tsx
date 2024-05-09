import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./_components/Navbar";
import AppRouter from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";

import "./index.css";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<div id="background" />
		<Router>
			<Navbar />
			<AppRouter />
		</Router>
		<ToastContainer bodyClassName={"toast__body"} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
