import './App.css';
import Button from './components/general/Button';
import Heading from './components/general/Heading';
import InputText from './components/general/InputText';
import Login from './components/login/login';
import React from 'react';

function App() {
  const [inputText, setInputText] = React.useState("");
  const changeHandler = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div className="App">
      <Login />      
    </div>
  );
}

export default App;
