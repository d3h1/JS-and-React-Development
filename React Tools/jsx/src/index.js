// Import the React and ReactDOM Libraries
import React from "react";
import { createRoot } from "react-dom/client";
import MyApp1, { message } from "./Exports";

// Reference to the div with with ID Root
const rootElement = document.getElementById('root')

// React takes control of the element
const root = createRoot(rootElement);


// Show component
root.render(
  <div>
    <MyApp1 />
    {message}
  </div>
);