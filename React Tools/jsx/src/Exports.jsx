import React from "react";

const DefaultExport = () => {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  const minValue = 5;

  // !!!OBJECTS DO NOT DISPLAY other than as a PROP
  return (
    <div>
      {/* Short hand JS functions are very useful to minimize functions above */}
      <h1>
        {Math.random().toFixed(1)} = {message}
      </h1>
      <h3>{new Date().toLocaleTimeString()}</h3>

      {/* We can customize things like input with PROPS */}
      {/* You are allowed to provide an OBJECT as a PROP */}
      <input
        type="number"
        min={minValue}
        max={10}
        style={{ backgroundColor: "lightgreen" }}
        readOnly={true}
        spellCheck={true}
        placeholder="hello"
      />
      <br />
      <br />
      <textarea autoFocus={false} />
    </div>
  );
};

//! This is a DEFAULT export -- You can import it as another name in index.js like MyApp becuase it is being exported as a default value
export default DefaultExport;

// !This is a NAMED export -- You can import it inside curly braces and the name cannot be changed once imported
const message = 'hi';
export {message}

