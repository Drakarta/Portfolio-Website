import Picture from "../../assets/images/puma/20220826_222900.jpg"

function Selfie() {
  
  return (
    <div style={{overflow: "hidden", height: "100%"}}>
      <img src={Picture} alt="selfie" className="pic-tab" />
    </div>
  )
}

export default Selfie