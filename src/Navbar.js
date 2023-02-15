import React from 'react'
import PropTypes from 'prop-types'// snipper-> impt
import { Link } from "react-router-dom";
function Navbar(props) {
  
  return (
    <div>
      <nav className ={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}> {/*bg-dark colors the navbar background to dark while navbar-dark greyish or darkens the components inside navbar from blue */}
        {/* ${props.mode} ye yaad karlo ki kaise classname ke beech me javascript ghusedni ho toh kase karte hai */}
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"} >{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/About'}>{props.aboutText}</Link>
              </li>
            </ul>
            <form className="d-flex mx-5" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`} > {/*inputing SWITCH from bootsrap */} 
            {/*humesha Jab bhi '$' wala sign andarr hoga toh toh humesha classname me   `` use karna na ki ''     */}
            {/* text-light is used to white text inside the component in bootstrap */}
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.PropType = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "default title is this",
  aboutText: "this is default aboutText"
}
export default Navbar