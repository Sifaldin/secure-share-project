import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";


export default function Footer() {
  return (
    <div>
      
      <div className="social-icons">
        <Link href="#!"><a><FontAwesomeIcon icon={faGithub} size={"2x"} /></a></Link>
        <Link href="#!"><a ><FontAwesomeIcon icon={faTwitter} size={"2x"} /></a></Link>
        <Link href="#!"><a ><FontAwesomeIcon icon={faInstagram} size={"2x"} /></a></Link>
        <Link href="#!"><a ><FontAwesomeIcon icon={faFacebook} size={"2x"} /></a></Link>
      </div>

      <footer>&copy; Copyright 2020</footer>
    </div>

  )
}
