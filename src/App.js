import './App.css';
import React from 'react';
import Navigation from './components/navigation';
import {welcomeslice} from './store/slices/Registration';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const {name} = useSelector((state)=>(state.register));
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
