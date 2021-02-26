import { useState } from "react";
import Link from "next/link";
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from "@auth0/nextjs-auth0";



export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, isLoading } = useUser();

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  }

  return (
    <header>
      <div className={`menu-btn ${showMenu ? "open" : ""}`} onClick={toggleMenu} >
        <span className={`menu-btn-burger ${showMenu ? "open" : ""}`}> </span>
      </div>

      <nav className={showMenu ? "open" : ""}>

        <ul className={`menu-nav ${showMenu ? "open" : ""}`}>

          <li className={`menu-nav-item active ${showMenu ? "open" : ""}`}>
            <a className="menu-nav-link">Home</a>
          </li>
          <li className={`menu-nav-item  ${showMenu ? "open" : ""}`}>
            <a className="menu-nav-link">Files</a>
          </li>
          <li className={`menu-nav-item ${showMenu ? "open" : ""}`}>
            <a className="menu-nav-link">Contact Us</a>
          </li>
          {
            user && !isLoading && <li className={`menu-nav-item ${showMenu ? "open" : ""}`}>
              <Link href="/api/auth/logout">
                <a className="menu-nav-link">
                  <FontAwesomeIcon icon={faSignOutAlt} size={"lg"} />
                </a>
              </Link>
            </li>
          }

          {!user && !isLoading && <li className={`menu-nav-item  ${showMenu ? "open" : ""}`}>
            <Link href="/api/auth/login">
              <a className="menu-nav-link">
                <FontAwesomeIcon icon={faSignInAlt} size={"lg"} />
              </a>
            </Link>
          </li>
          }



        </ul>
      </nav>
    </header>
  )
}
