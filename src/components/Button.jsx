import "../styles/Button.css"
function Button({content}){
    return(
        <div className="flex justify-center w-full my-8">
            <button className="contant-button" onClick={() => setMenuOpen(false)}>
              {/* <img src={explore || "/placeholder.svg"} alt="" /> */}
              {content}
            </button>
          </div>
       
    )
}
export default Button;