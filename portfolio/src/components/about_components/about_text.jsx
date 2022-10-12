import React, { useState , useEffect } from "react"
import ReactMarkdown from 'react-markdown'

function AboutText({aboutData}) {

  return (
    <>
      <ReactMarkdown children={aboutData.Text}/>
    </>
  )
}

export default AboutText