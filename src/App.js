import './App.css';
import React from 'react';
import Navigation from './components/navigation';
import {welcomeslice} from './store/Registration'
function App() {
  const dispatch = useDispatch();
  const {name} = useSelector((state)=>(state.welcome));
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
