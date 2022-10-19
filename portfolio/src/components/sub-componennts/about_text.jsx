import React, { useState , useEffect, useCallback } from "react"
import ReactMarkdown from 'react-markdown'

import GithubImg from '../../assets/images/icons/github.svg'
import LinkedInImg from '../../assets/images/icons/linkedin.svg'
import MailImg from '../../assets/images/icons/mail.svg'

function AboutText(props) {

  function contactStateHandler() {
    props.onContactStateChange(!props.contactState)
  }

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
        <ReactMarkdown children={props.aboutData.Text}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <div className="about-text-icons">
            <button onClick={() => window.open("https://github.com/Drakarta")}><img src={GithubImg} alt="github" /></button>
            <button onClick={() => window.open("")}><img src={LinkedInImg} alt="linkedin" /></button>
            <button onClick={() => contactStateHandler()}><img src={MailImg} alt="mail" /></button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default AboutText