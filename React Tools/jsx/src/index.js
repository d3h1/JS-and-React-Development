// Import the React and ReactDOM Libraries
import React from "react";
import { createRoot } from "react-dom/client";

// Reference to the div with with ID Root
const rootElement = document.getElementById('root')

// React takes control of the element
const root = createRoot(rootElement);

// Component created
function App() {
  return <h1>Hi there!</h1>
}

// Show component
root.render(<App />);