import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
//cls
  const toggleMode = () => {
    if(mode === 'light'){ 
      setMode('dark')
      document.body.style.backgroundColor = '#11243e';
      // showAlert("Dark mode has been enabled", "success");
  }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#0d6efd40';
      // showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title='TextUtils' aboutText="About" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        <Route exact path="/about">
          <About heading2="About Us" mode={mode}/>
        </Route>
        <Route exact path="/">
          <TextForm showAlert= {showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
        </Route>
      </Switch>
      </div>
    </Router>
    </>
    ); 
}

export default App;