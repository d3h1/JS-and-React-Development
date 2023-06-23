import React from "react";

const App = () => {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  const minValue = 5;

  // !!!OBJECTS TO NOT DISPLAY other than as a PROP
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

export default App;
