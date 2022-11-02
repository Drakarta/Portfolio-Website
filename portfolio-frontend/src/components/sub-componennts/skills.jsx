import HTML from "../../assets/images/icons/html5.png";
import CSS from "../../assets/images/icons/css.png";
import JS from "../../assets/images/icons/javascript.png";
import PY from "../../assets/images/icons/python.png";

function Skills() {
  
  return (
    <div className="skill-grid">
      <button>
        <img src={HTML}/>
        <div>HTML</div>
      </button>
      <button>
        <img src={CSS} />
        <div>CSS</div>
      </button>
      <button>
        <img src={JS} />
        <div>JavaScript</div>
      </button>
      <button>
        <img src={PY} />
        <div>Python</div>
      </button>
    </div>
  )
}

export default Skills