import React from "react";
import Abc from "temp";

function App() {

  const clickHandler = () => {
    console.log('clicked!');
  }

  return (
    <Abc><input onClick={clickHandler}>something</input></Abc>
  );
}

export default App;
