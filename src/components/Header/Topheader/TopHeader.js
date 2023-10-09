import React from 'react'
import { Link } from 'react-router-dom'
export default function TopHeader() {
  return (
    <div className="top-menu bg-dark text-white">
    <div className="container">
        <nav className="navbar navbar-expand text-white">
            <div className="shiping-title d-none d-sm-flex">Welcome To RS Online Service!</div>
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li class="nav-item"><Link class="nav-link text-white" to="/Trackingoder">Track Order</Link>
                </li>
                {/* <li class="nav-item"><Link class="nav-link text-white" to="about-usrequired/>">About</Link>
                </li> */}
                {/* <li class="nav-item"><Link class="nav-link text-white" to="shop-categoriesrequired/>">Our Stores</Link>
                </li> */}
                <li class="nav-item"><Link class="nav-link text-white" to="/Blogs">Blog</Link>
                </li>
                <li class="nav-item"><Link class="nav-link text-white" to="contact-us">Contact</Link>
                </li>
                <li class="nav-item"><Link class="nav-link text-white" to="javascript:;">Become Retailer</Link>
                </li>
            </ul>
            {/* <!-- <ul className="navbar-nav">
                <li class="nav-item dropdown"> <Link class="nav-link dropdown-toggle" to="#"
                        data-bs-toggle="dropdown">INR</Link>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li><Link class="dropdown-item" to="#">USD</Link>
                        </li>
                        <li><Link class="dropdown-item" to="#">EUR</Link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown"> <Link class="nav-link dropdown-toggle" to="#"
                        data-bs-toggle="dropdown">ENG</Link>
                    <div className="dropdown-menu dropdown-menu-lg-end">
                        <Link class="dropdown-item d-flex allign-items-center" to="javascript:;"> <i
                                className="flag-icon flag-icon-de me-2"></i><span>German</span>
                        </Link> <Link class="dropdown-item d-flex allign-items-center" to="javascript:;"><i
                                className="flag-icon flag-icon-fr me-2"></i><span>French</span></Link>
                        <Link class="dropdown-item d-flex allign-items-center" to="javascript:;"><i
                                className="flag-icon flag-icon-um me-2"></i><span>English</span></Link>
                        <Link class="dropdown-item d-flex allign-items-center" to="javascript:;"><i
                                className="flag-icon flag-icon-in me-2"></i><span>Hindi</span></Link>
                        <Link class="dropdown-item d-flex allign-items-center" to="javascript:;"><i
                                className="flag-icon flag-icon-cn me-2"></i><span>Chinese</span></Link>
                        <Link class="dropdown-item d-flex allign-items-center" to="javascript:;"><i
                                className="flag-icon flag-icon-ae me-2"></i><span>Arabic</span></Link>
                    </div>
                </li>
            </ul> --> */}
            <ul className="navbar-nav social-link ms-lg-2 ms-auto">
                <li class="nav-item"> <Link class="nav-link text-white" to="javascript:;"><i
                            className='bx bxl-facebook'></i></Link>
                </li>
                <li class="nav-item"> <Link class="nav-link text-white" to="javascript:;"><i
                            className='bx bxl-twitter'></i></Link>
                </li>
                <li class="nav-item"> <Link class="nav-link text-white" to="javascript:;"><i
                            className='bx bxl-linkedin'></i></Link>
                </li>
            </ul>
        </nav>
    </div>
</div>
  )
}
