import './App.css';
import React from 'react';
import Navigation from './components/navigation';
function App() {
  const [inputText, setInputText] = React.useState("");
  const changeHandler = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div className="App">
      <Navigation />           
    </div>
  );
}

export default App;
