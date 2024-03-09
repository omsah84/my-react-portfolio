import React from 'react'
import './navigation.scss'

export default function Navigation() {
  return (
    <div className='navigation'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OMSAH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item m-auto">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
