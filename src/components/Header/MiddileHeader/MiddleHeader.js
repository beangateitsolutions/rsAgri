import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// let props.login = true;
// console.log(props.login);

export default function MiddleHeader(props) {
  const wishLength = useSelector((state) => state.wishes.value.length);
  const cartLength = useSelector((state) => state.carts.value.length);
  const [Input, setInput] = useState("");
  // console.log(wishLength);

  return (
    <div class="header-content">
      <div class="container">
        <div class="row align-items-center gx-4">
          <div class="col-auto">
            <div class="d-flex align-items-center gap-3">
              <div
                class="mobile-toggle-menu d-inline d-xl-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <i class="bx bx-menu"></i>
              </div>
              <div class="logo">
                <Link to="index.html">
                  <img src="./images/logo-icon.png" class="logo-icon" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl order-4 order-xl-0">
            <div class="input-group flex-nowrap pb-3 pb-xl-0">
              <input
                type="text"
                class="form-control w-100 border-warning border border-3"
                placeholder="Search for Products"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                class="btn btn-warning btn-ecomm border-3 text-green"
                type="button"
              >
                <Link to={"search/" + Input} style={{ textDecoration: "none" }}>
                  Search
                </Link>
              </button>
            </div>
          </div>
          <div class="col-auto d-none d-xl-flex ">
            <div class="d-flex align-items-center gap-3">
              <div class="fs-1 text-content">
                <i class="bx bx-headphone text-green"></i>
              </div>
              <div class="text-center ">
                <p class="mb-0 text-content text-green">CALL US NOW</p>
                <h5 class="mb-0 text-green">+011 5827918</h5>
              </div>
            </div>
          </div>
          <div class="col-auto ms-auto">
            <div class="top-cart-icons">
              <nav class="navbar navbar-expand">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown dropdown-large">
                    <Link to="/Cart" class="nav-link   fs-1 cart-link">
                      {" "}
                      <span class="alert-count">{cartLength}</span>
                      <i class="bx bx-shopping-bag"></i>
                    </Link>
                  </li>

                  <li class="nav-item dropdown dropdown-large">
                    <Link to="/wish" class="nav-link   fs-1 cart-link">
                      {" "}
                      <span class="alert-count">{wishLength}</span>
                      <i class="bx bx-heart"></i>
                    </Link>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link  dropdown-toggle-nocaret fs-1 text-green"
                      to="javascript:;"
                      data-bs-toggle="dropdown"
                    >
                      <i class="bx bx-user-circle"></i>
                    </Link>
                    <ul class="dropdown-menu">
                    <li>
                        <Link
                          class="dropdown-item"
                          to="account-user-details.html"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="account-dashboard.html">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="account-downloads.html">
                          Downloads
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="authentication-Wallet.html">
                          Wallet
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="account-orders.html">
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="admin-page ">
                          Admin
                        </Link>
                      </li>
                     
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                    

                      

                      <li>
                        <Link
                          class="dropdown-item"
                          to={props.login ? "/" : "/authentication-Login.html"}
                        
                        >
                          {props.login ? "Logout" : "Login/Register"}
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          class="dropdown-item"
                          to="authentication-register.html"
                        >
                          Register
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link
                          class="dropdown-item"
                          to="authentication-reset-password.html"
                        >
                          Password
                        </Link>
                      </li>

                      <li>
                        <Link
                          class="dropdown-item"
                          to="authentication-reset-password.html"
                        >
                          LogOut
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  {/* <!-- <li class="nav-item"><Link to="wishlist.html" class="nav-link cart-link"><i
                                        class='bx bx-heart'></i></Link>
                            </li> --> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
    </div>
  );
}
