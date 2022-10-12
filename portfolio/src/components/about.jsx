import { useState , useEffect } from 'react'
import axios from "axios"

import AboutText from './about_components/about_text'
import Skills from './about_components/skills'
import Selfie from './about_components/selfie'

import "../styles/about.scss"

function About() {
  const [currentTab, setCurrentTab] = useState("about");
  const [aboutData, setAboutData] = useState({})
  
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/about").then(
      (response) => {
        setAboutData(response.data)})
  },[])

  function tabChanger(tab) {
    if (tab === "about") {
      setCurrentTab("about")
    } else if (tab === "skills") {
      setCurrentTab("skills")
    } else if (tab === "selfie") {
      setCurrentTab("selfie")
    }
  }

  return (
    <section className="about" data-panel="third">
      <div className="flexx">
        <div className="flexy">
          <div>
            <div className="about-tabs flexx">
              <button onClick={() => tabChanger("about")} className={"header-text " + (currentTab === "about" && "active")}>About<span>;</span></button>
              <button onClick={() => tabChanger("skills")} className={"header-text " + (currentTab === "skills" && "active")}>Skills<span>;</span></button>
              <button onClick={() => tabChanger("selfie")} className={"header-text " + (currentTab === "selfie" && "active")}>Picture<span>;</span></button>
            </div>
            <div>
              <div className="about-text">
                {(currentTab === "about") ? <AboutText aboutData={aboutData}/>
                : (currentTab === "skills") ? <Skills/>
                : (currentTab === "selfie") && <Selfie/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About