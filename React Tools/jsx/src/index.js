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

  const minValue = 5

  // !!!OBJECTS TO NOT DISPLAY other than as a PROP
  return (
    <div>
      {/* Short hand JS functions are very useful to minimize functions above */}
      <h1>{Math.random().toFixed(1)} = {message}</h1>
      <h3>{new Date().toLocaleTimeString()}</h3>

      {/* We can customize things like input with PROPS */}
      {/* You are allowed to provide an OBJECT as a PROP */}
      <input type="number" min={minValue} max={10} style={{ backgroundColor: 'lightgreen' }} readOnly={true} spellCheck={true} placeholder="hello"/>
      <br/>
      <br/>
      <textarea autoFocus={false}/>
    </div>
    ) 
}

// Show component
root.render(<App />);