import { useState , useEffect, useCallback } from 'react'
import axios from "axios"

import AboutText from './sub-componennts/about_text'
import Skills from './sub-componennts/skills'
import Selfie from './sub-componennts/selfie'
import Contact from "./sub-componennts/contact"

  import Picture from "../assets/images/puma/20220826_222900.jpg"
import "../styles/about.scss"

function About(props) {
  const [currentTab, setCurrentTab] = useState("about");
  const [aboutData, setAboutData] = useState({})
  
  useEffect(() => {
    axios.get("/api/about")
      .then((response) => {setAboutData(response.data)})
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
          <img src={Picture} alt="picture" className="picture" />
        </div>
        <div className="flexy">
          <div>
            <div className="about-tabs flexx">
              <button onClick={() => tabChanger("about")} id="about" className={"header-text " + (currentTab === "about" && "active")}>About<span>;</span></button>
              <button onClick={() => tabChanger("skills")} id="skills" className={"header-text " + (currentTab === "skills" && "active")}>Skills<span>;</span></button>
              <button onClick={() => tabChanger("selfie")} id="selfie" className={"header-text " + (currentTab === "selfie" && "active")}>Picture<span>;</span></button>
            </div>
            <div>
              <div className="about-text">
                {(currentTab === "about") ? <AboutText aboutData={aboutData} onContactStateChange={props.onContactStateChange} contactState={props.contactState} />
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