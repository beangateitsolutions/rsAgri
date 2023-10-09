import React from "react";
import { useState } from "react";

const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();


export default function Wallet() {

    const [Money, setMoney] = useState(100);


    function moneySet(){

    }
  return (
    <div className="container w-50 m-auto border border-6 rounded-2 shadow bg-light my-4 py-3 px-4">
      <div className="row">
        <div className="col-md-12">
          <h5 className="fw-bold">Total Wallet Balance</h5>
        </div>
      </div>
      <div className="row  ">
        <div className="col-11 fw-bold ">&#8377; 500.00</div>
        <div className="col-1">
          <i className="bx bx-wallet text-warning fs-4 shadow-lg  rounded " ></i>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <h6 className="fw-bold"> Add Mony to Wallet</h6>
        </div>
        <div className="col-12 my-3">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              {" "}
              &#8377;
            </span>
            <input
              type="number"
              className="form-control"
              placeholder={Money}
              aria-label="Username"
              aria-describedby="addon-wrapping"

              onChange={(e)=>(                
                setMoney(e.target.value)
                )}
              
              />
          </div>
          <div className="col-12 my-3">
            <a href="javascript:;" class="services btn-ecomm text-green w-100">
              Proceed To add {Money}
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {/* <a
            href="javascript:;"
            class="btn btn-outline-warning bg-opacity-75 btn-ecomm text-green w-100"
          >
            View History
          </a> */}

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h6 class="accordion-header  h-50 ">
                <button
                  class="accordion-button  bg-opacity-75 bg-transparent text-green"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  View History
                </button>
              </h6>
              <div
                id="collapseOne"
                class="accordion-collapse collapse "
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div className="row g-3">
                    <div className="col-9 text-green fw-bold">+500</div>
                    <div className="col-2 text-green">
                      {day}/{month}/{year}{" "}
                    </div>
                    <div className="col-9 text-danger fw-bold">-250</div>
                    <div className="col-2 text-green">
                      {day}/{month}/{year}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
