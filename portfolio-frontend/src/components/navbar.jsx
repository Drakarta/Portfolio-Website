import "../styles/navbar.scss"
import Moon from '../assets/images/icons/moon.png'

function NavBar() {
  
  return (
    <div className="side-nav">
      <div className="top">
        <img alt="moon" src={Moon}/>
        <span className="material-symbols-rounded nav-icon menu-icon">menu</span>
      </div>
      <ul className="menu" id="menu">
        <li><button data-panel="first" id="button">Home</button></li>
        <li><button data-panel="second" id="button">Project</button></li>
        <li><button data-panel="third" id="button">About</button></li>
        <li><button data-panel="fourth" id="button">Footer</button></li>
      </ul>
      <div className="nav-butt">
        <div className="nav-drop">
          <span className="material-symbols-rounded nav-icon nav-show">settings</span>
          <button><span className="material-symbols-rounded nav-icon nav-hide">login</span></button>
          <button><span className="material-symbols-rounded nav-icon nav-hide">brightness_high</span></button>
        </div>
      </div>
    </div>
  )
}

export default NavBar