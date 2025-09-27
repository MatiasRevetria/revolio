import React from 'react'
import '../styles/NavStyles.css'

const Nav = () => {
  return (
    <nav id='nav' className="navbar navbar-expand-lg bg-body-tertiary mt-4" data-bs-theme="dark" style={{borderRadius:'5px'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Matias</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto m-2">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#mision">Mision</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#jobs">Jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
