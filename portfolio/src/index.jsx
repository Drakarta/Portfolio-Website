import React from 'react';
import ReactDOM from 'react-dom/client';
import PanelSnap from 'panelsnap';

import NavBar from './components/navbar';
import About from './components/about';
import Project from './components/project'
import Header from './components/header';
import Footer from './components/footer';

import "./styles/main.scss";

function Index() {

  return (
    <>
    {/* <React.StrictMode> */}
      <NavBar/>
      <div id='body'>
        <Header/>
        <Project/>
        <About/>
        <Footer/>
      </div>
    {/* </React.StrictMode> */}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index/>);