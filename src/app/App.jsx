import React from "react";
import { Routing } from "../pages";
import { withProviders } from "./providers";
import "./App.css";

function App() {
  return <Routing />;
}

export default withProviders(App);
