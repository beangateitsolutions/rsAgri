import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Empsalary() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-5">
              <h4 className="page-title">Employee Salary</h4>
            </div>
            <div className="col-sm-8 col-7 text-right m-b-30">
              <a
                data-toggle="modal"
                data-target="#AddEmpSalaryModalLong"
                className="btn btn-success btn-rounded text-white float-right"
              >
                <i className="fa fa-plus"></i> Add Salary
              </a>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Role</label>
                <select className="select form-control floating">
                  <option> -- Select -- </option>
                  <option>Employee</option>
                  <option>Employee-2</option>
                  <option>Manager</option>
                  <option>Team leader</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Leave Status</label>
                <select className="select form-control floating">
                  <option> -- Select -- </option>
                  <option> Pending </option>
                  <option> Approved </option>
                  <option> Rejected </option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <label className="focus-label">From</label>
                <div className="cal-icon">
                  <input
                    className="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <label className="focus-label">To</label>
                <div className="cal-icon">
                  <input
                    className="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <a href="#" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table datatable">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}>Employee</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Joining Date</th>
                      <th>Role</th>
                      <th>Salary</th>
                      <th>Payslip</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          src="../assets/img/user.jpg"
                          height="28"
                          width="28"
                          alt=""
                        />{" "}
                        Sanjay
                      </td>
                      <td>B-0001</td>
                      <td>xyz@example.com</td>
                      <td>1 june 2023</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="custom-badge status-grey dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Team leader
                          </a>
                          <div className="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              Team Leader
                            </a>
                            <a class="dropdown-item" href="#">
                              Manager
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee-2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>Rs. 59698</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
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
                              data-target="#EditEmpSalaryModalLong"
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
                          className="rounded-circle"
                          src="../assets/img/user.jpg"
                          height="28"
                          width="28"
                          alt=""
                        />{" "}
                        Sanjay
                      </td>
                      <td>B-0001</td>
                      <td>xyz@example.com</td>
                      <td>1 june 2023</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="custom-badge status-grey dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Team leader
                          </a>
                          <div className="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              Team Leader
                            </a>
                            <a class="dropdown-item" href="#">
                              Manager
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee-2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>Rs. 59690</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
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
                              data-target="#EditEmpSalaryModalLong"
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
                          className="rounded-circle"
                          src="../assets/img/user.jpg"
                          height="28"
                          width="28"
                          alt=""
                        />{" "}
                        Sanjay
                      </td>
                      <td>B-0001</td>
                      <td>xyz@example.com</td>
                      <td>1 june 2023</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="custom-badge status-grey dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            manager
                          </a>
                          <div className="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              Team Leader
                            </a>
                            <a class="dropdown-item" href="#">
                              Manager
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee-2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>Rs. 59698</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
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
                              data-target="#EditEmpSalaryModalLong"
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
          className="modal fade"
          id="EditEmpSalaryModalLong"
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
                                  className="form-control datetimepicker"
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
                              className="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_active"
                              value="option1"
                              checked
                            />
                            <label
                              className="htmlForm-check-label"
                              htmlFor="employee_active"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_inactive"
                              value="option2"
                            />
                            <label
                              className="htmlForm-check-label"
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
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="AddEmpSalaryModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                Add Staff Salary
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
                {/* <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Staff Salary</h4>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Staff Name</label>
										<input class="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
									<div className="form-group">
										<label>Net Salary</label>
										<input class="form-control" type="text"/>
									</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4 className="text-primary">Earnings</h4>
                                    <div className="form-group">
                                        <label>Basic</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>DA(40%)</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>HRA(15%)</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Conveyance</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Allowance</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Medical Allowance</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Others</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="text-primary">Deductions</h4>
                                    <div className="form-group">
                                        <label>TDS</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>ESI</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>PF</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Leave</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Prof. Tax</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Labour Welfare</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Fund</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Others</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Salary</button>
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
                Create Salary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
