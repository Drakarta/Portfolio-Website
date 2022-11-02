import "../styles/project.scss"
import axios from "axios"
import { useState, useEffect } from 'react'

import ProjectGrid from "./sub-componennts/project_grid"

function Project() {
  const [projectData, setProjectData] = useState({})
  
  useEffect(() => {
    axios.get("/api/project")
      .then((response) => {setProjectData(response.data)})
  },[])

  return (
    <section className="project" data-panel="second">
      <div><span className="header-text" style={{fontSize: "2.35rem"}}>Project<span>;</span></span></div>
      <ProjectGrid data={projectData} />
    </section>
  )
}

export default Project