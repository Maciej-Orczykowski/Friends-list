import React from "react";
import "./App.css";
//Import components
import Search from "./components/search/Search";
import Contact from "./components/contacts/Contact";

function App() {
  return (
    <div className="App">
      <div className="Heading">Find your friend!</div>
      <div>
        <Search />
        <Contact />
      </div>
    </div>
  );
}

export default App;
