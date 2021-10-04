import {useState} from "react"
import "./Nav.css"

const Nav = () => {

    const [showLinks,setShowLinks]=useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return(
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar__logo">Logo</div>
            <ul className="navbar__links">
                <li className="navbar_item slideInDown-1">
                    <a href="" className="navbar__link">
                        Home
                    </a>
                </li>
                <li className="navbar_item slideInDown-2">
                    <a href="" className="navbar__link">
                        Portfolio
                    </a>
                </li>
                <li className="navbar_item slideInDown-3">
                    <a href="" className="navbar__link">
                        Services
                    </a>
                </li>
                <li className="navbar_item slideInDown-4">
                    <a href="" className="navbar__link">
                        Prices
                    </a>
                </li>
                <li className="navbar_item slideInDown-5">
                    <a href="" className="navbar__link">
                        Contact
                    </a>
                </li>
            </ul>
            <button 
            onClick={handleShowLinks}
            className="navbar__burger">
                <span className="burger-bar"></span>
            </button>
        </div>
    )
}

export default Nav