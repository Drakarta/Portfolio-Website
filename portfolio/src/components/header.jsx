import "../styles/header.scss"

function Header() {
  
  return (
    <section className="header" data-panel="first">
      <div className="header-cont">
        <div><span className="header-text">Hello<span>,</span></span></div>
        <div><span className="header-text">My </span><span className="header-text">name </span><span className="header-text">is </span><span className="anthony header-text">Anthony<span>,</span></span></div>
        <div><span className="header-text">I<span>'</span>m</span><span className="header-text">a </span><span className="header-text">Programmer<span>.</span></span></div>
      </div>
      <div>
        <button className="contact-butt">Contact</button>  
      </div>
    </section>
  )
}

export default Header