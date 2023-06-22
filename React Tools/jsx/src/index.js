// Import the React and ReactDOM Libraries
import React from "react";
import { createRoot } from "react-dom/client";

// Reference to the div with with ID Root
const rootElement = document.getElementById('root')

// React takes control of the element
const root = createRoot(rootElement);

// Component created
function App() {
  let message = 'Bye there!'
  if (Math.random() > 0.5) {
    message = 'Hello there!'
  }

  return (
    <div>
      {/* Short hand JS functions are very useful to minimize functions above */}
      <h1>{Math.random().toFixed(1)} = {message}</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
    ) 
}

// Show component
root.render(<App />);