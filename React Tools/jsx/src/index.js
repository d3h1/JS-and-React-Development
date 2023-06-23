// Import the React and ReactDOM Libraries
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Reference to the div with with ID Root
const rootElement = document.getElementById('root')

// React takes control of the element
const root = createRoot(rootElement);


// Show component
root.render(
  <App />
);