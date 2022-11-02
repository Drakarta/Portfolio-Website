function ProjectGrid(props) {
    let loops = 0
    const test = []
    for (let project in props.data["projects"]) {
      console.log(props.data["projects"][project])
      if (loops >= 16) {
        break
      }
      test.push(<button style={{background: `url(${props.data["projects"][project]["image"]})`, backgroundSize: "cover"}} onClick={() => window.open(props.data["projects"][project]["link"])} key={props.data["projects"][project]["name"]}><div>{props.data["projects"][project]["name"]}</div></button>);
      loops += 1
    }

    return (
      <div style={{display: "flex", flexDirection: "column", height: "100vh", marginTop: "50px"}}>
        <div className="proj-grid">
          {test}
        </div>
      </div>
    )
  }
  
  export default ProjectGrid