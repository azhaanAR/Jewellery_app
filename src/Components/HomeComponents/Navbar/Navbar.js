import React from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const email = localStorage.getItem('email')
  const Navigate = useNavigate()

  const Logout = () => {
    localStorage.clear()
    Navigate('/log')
  }
  return (
    <>

      {/* .....Navbar Start.............  */}

      <div classname="header-section">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/"> <div className="logo">
              <img src={logo} className='img-fluid' alt="" />
            </div> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collections
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blogs
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/blog">Blog Grid 2 Columns</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Contact</a>
                </li>

                <form className="d-flex ">
                  <i class="fas fa-search"></i>
                </form>

                <li className="nav-item px-2">
                  <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
                </li> 
                <li className="nav-item px-2">
                  <Link className="nav-link active" aria-current="page" to="/pro">Account</Link>
                </li>
                <form className="d-flex btn-left">
                  {email ? <Link onClick={Logout} to="/Log"> <button className="btn btn-danger" type="submit">
                  Log Out</button></Link> : <Link to="/sign"></Link>}</form>
              </ul>
            </div>
          </div>
        </nav>
      </div>


      {/* .....Navbar End.............  */}


    </>
  )
}

export default Navbar