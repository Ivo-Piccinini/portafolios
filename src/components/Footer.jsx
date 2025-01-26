import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import linkedinLogo from '../imgs/linkedin.png'
import githubLogo from '../imgs/github-sign.png'
import cvLogo from '../imgs/cv.png'

function Footer() {
  return (
    <footer>
      <Link to="https://www.linkedin.com/in/ivo-piccinini-7423a324b/" target='_blank' style={{ textDecoration: 'none' }}>
        <button><img src={linkedinLogo} alt="" /> Linkedin</button>
      </Link>
      <Link to="https://github.com/Ivo-Piccinini?tab=repositories" target='_blank' style={{ textDecoration: 'none' }}>
        <button><img src={githubLogo} alt="" /> Github</button>
      </Link>
      <Link to="https://drive.google.com/file/d/1nPs5JscgtiMRY-pELwuRHvrUe4HmHBHE/view?usp=sharing" target='_blank' style={{ textDecoration: 'none' }}>
        <button><img src={cvLogo} alt="" /> CV</button>
      </Link>
    </footer>
  )
}

export default Footer