import '../../styles/contact.scss'

function Contact(props) {
  function contactStateHandler() {
    props.onContactStateChange(!props.contactState)
  }

  return (
    <>
      <div className="contact-bg" onClick={() => contactStateHandler()}></div>
      <div className="contact-container">
        <div>
          <form className="contact-form">
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <div style={{paddingBottom: "0.5rem"}}>
              <span style={{fontSize: "2rem"}} className="header-text">Contact </span><span style={{fontSize: "2rem"}} className="header-text">me<span>;</span></span>
              </div>
              <button style={{alignSelf: "flex-start"}} type="button" onClick={() => contactStateHandler()}><span className="material-symbols-rounded">close</span></button>
            </div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Name" value={props.formState.name} onChange={(e) => props.onFormStateChange(e, "name")} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Email@gmail.com" value={props.formState.email} onChange={(e) => props.onFormStateChange(e, "email")} />
            <label htmlFor="message">Message:</label>
            <textarea type="text" id="message" placeholder="Message" value={props.formState.message} onChange={(e) => props.onFormStateChange(e, "message")} />
            <div style={{display: "flex", flexDirection: "row-reverse"}}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
  
  export default Contact