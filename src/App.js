import './App.css';
import Button from './components/general/Button';
import Heading from './components/general/Heading';
import InputText from './components/general/InputText';
import React from 'react';

function App() {
  const [inputText, setInputText] = React.useState("");
  const changeHandler = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div className="App">
      <Heading title={"School Coaching"} />
      <Button title={"Click Me"} />
      <InputText value={inputText} changeHandler={changeHandler} placeholder={"Enter String"} />
    </div>
  );
}

export default App;
