import { useState } from "react";

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // WIll stop the common DOM process of form-inputs that reloads them
    
    onSubmit(term);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Putting this input inside a form allows the DOM to activate a submit event */}
        <input value={term} onChange={handleChange} placeholder="Search Items"/>
      </form>
    </div>
  );
};

export default Searchbar;
