import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import PanelSnap from 'panelsnap';

import NavBar from './components/navbar';
import About from './components/about';
import Project from './components/project'
import Header from './components/header';
import Footer from './components/footer';

import "./styles/main.scss";

function Index() {
  
  const panelSnapInstance = new PanelSnap({
    panelSelector: "> #root > #body > section"
  })

  function formReducer(state, action) {
    switch (action.type) {
      case "name_change": {
        return {
          name: action.newState,
          email: state.email,
          message: state.message
        }
      }
      case "email_change": {
        return {
          name: state.name,
          email: action.newState,
          message: state.message
        }
      }
      case "message_change": {
        return {
          name: state.name,
          email: state.email,
          message: action.newState
        }
      }
    }
  }
  
  function formStateChange(e, event) {
    setFormState({
      type: (event + "_change"),
      newState: e.target.value
    })
  }

  let initialFormState = { name: "", email: "", message: ""}
  const [formState, setFormState] = useReducer(formReducer, initialFormState)

  return (
    <React.StrictMode>
      <NavBar/>
      <div id='body'>
        <Header formState={formState} onFormStateChange={formStateChange} />
        <Project/>
        <About formState={formState} onFormStateChange={formStateChange} />
        <Footer/>
      </div>
      
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);