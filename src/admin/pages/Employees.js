import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Employees() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Employee</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <a
                type="button"
                classNameName="btn btn-primary text-light float-right btn-rounded"
                data-toggle="modal"
                data-target="#AddEmployeeModalLong"
              >
                <i class="fa fa-plus"></i> Add Employee
              </a>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">Employee ID</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus ">
                {/* <label className="focus-label">Role</label> */}
                <select className=" floating form-control">
                  <option>Select Role</option>
                  <option>Manager</option>
                  <option>Team leader</option>
                  <option>Receptionist</option>
                  <option>Accountant</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <a href="#" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: "200px" }}>Name</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th style={{ minWidth: "200px" }}>Join Date</th>
                      <th>Role</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="../assets/img/user.jpg"
                          class="rounded-circle"
                          alt=""
                        />{" "}
                        <h2>Albina Simonis</h2>
                      </td>
                      <td>NS-0001</td>
                      <td>albinasimonis@example.com</td>
                      <td>828-634-2744</td>
                      <td>7 May 2015</td>
                      <td>
                        <span className="custom-badge status-green">
                          Manager
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditEmployeeModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="../assets/img/user.jpg"
                          class="rounded-circle"
                          alt=""
                        />{" "}
                        <h2>Cristina Groves</h2>
                      </td>
                      <td>DR-0001</td>
                      <td>cristinagroves@example.com</td>
                      <td>928-344-5176</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <span className="custom-badge status-blue">
                          Team leader
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditEmployeeModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="../assets/img/user.jpg"
                          class="rounded-circle"
                          alt=""
                        />{" "}
                        <h2>Mary Mericle</h2>
                      </td>
                      <td>SF-0003</td>
                      <td>marymericle@example.com</td>
                      <td>603-831-4983</td>
                      <td>27 Dec 2021</td>
                      <td>
                        <span className="custom-badge status-grey">
                          Accountant
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditEmployeeModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="../assets/img/user.jpg"
                          class="rounded-circle"
                          alt=""
                        />{" "}
                        <h2>Haylie Feeney</h2>
                      </td>
                      <td>SF-0002</td>
                      <td>hayliefeeney@example.com</td>
                      <td>616-774-4962</td>
                      <td>21 Apr 2021</td>
                      <td>
                        <span className="custom-badge status-red">
                          Receptionist
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditEmployeeModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i classname="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div class="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Sandeep Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item new-message">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Abcd</span>
                        <span className="message-time">1 Aug</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Taran </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">See all messages</a>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="AddEmployeeModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add Employee
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="content">
                  <div className="row">
                    {/* <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Employee</h4>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                First Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Age <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Email <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="email" />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Employee ID{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Date of Birth</label>
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group gender-select">
                              <label className="gen-label">Gender:</label>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="gender"
                                    className="form-check-input"
                                  />
                                  Male
                                </label>
                              </div>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="gender"
                                    className="form-check-input"
                                  />
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Joining Date{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="cal-icon">
                                <input
                                  class="form-control datetimepicker"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Role</label>
                              <select className="select form-control">
                                <option>Admin</option>
                                <option>General Manager</option>
                                <option>Team Leader</option>
                                <option>Team Member</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="display-block">Status</label>
                          <div className="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_active"
                              value="option1"
                              checked
                            />
                            <label
                              class="htmlForm-check-label"
                              htmlFor="employee_active"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_inactive"
                              value="option2"
                            />
                            <label
                              class="htmlForm-check-label"
                              htmlFor="employee_inactive"
                            >
                              Inactive
                            </label>
                          </div>
                        </div>
                        {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Employee</button>
                            </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Create Employee
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="EditEmployeeModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Edit Employee
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="content">
                  <div className="row">
                    {/* <div className="col-lg-8 offset-lg-2">
                                <h4 className="page-title">Edit Employee</h4>
                            </div> */}
                  </div>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                First Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Age <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Email <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="email" />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Employee ID{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Joining Date{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="cal-icon">
                                <input
                                  class="form-control datetimepicker"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Role</label>
                              <select className="select form-control">
                                <option>Admin</option>
                                <option>General Manager</option>
                                <option>Team Leader</option>
                                <option>Team Member</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="display-block">Status</label>
                          <div className="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_active"
                              value="option1"
                              checked
                            />
                            <label
                              class="htmlForm-check-label"
                              for="employee_active"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_inactive"
                              value="option2"
                            />
                            <label
                              class="htmlForm-check-label"
                              for="employee_inactive"
                            >
                              Inactive
                            </label>
                          </div>
                        </div>
                        {/* <div className="m-t-20 text-center">
                                        <button className="btn btn-primary submit-btn">Create Employee</button>
                                    </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
