import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Retailers() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Retailers</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                    <a type="button" className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#AddRetailerModalLong">
                    <i className="fa fa-plus"></i> Add Retailers</a>
                        {/* <a href="add-doctor.html" classNameName="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Retailers</a> */}
                    </div>
                </div>
				<div className="row doctor-grid">
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Cristina Groves</a></h4>
                            
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Marie Wells</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Henry Daniels</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Mark Hunter</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="#"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Michael Sullivan</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Linda Barrett</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Ronald Jacobs</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Albert Sandoval</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Diana Bailey</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Shirley Willis</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Pamela Curtis</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Justin Parker</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                </div>
				<div className="row">
                    <div className="col-sm-12">
                        <div className="see-all">
                            <a class="see-all-btn" href="javascript:void(0);">Load More</a>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
        </div>
        <div class="modal fade" id="AddRetailerModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Retailer</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="content">
                {/* <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Retailer</h4>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Age <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input class="form-control" type="email"/>
                                    </div>
                                </div>
                                {/* <!-- <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input class="form-control" type="password">
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input class="form-control" type="password"/>
                                    </div>
                                </div> --> */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <div className="cal-icon">
                                            <input type="text" className="form-control datetimepicker"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group gender-select">
                                        <label className="gen-label">Gender:</label>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="gender" className="form-check-input"/>Male
                                            </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="gender" className="form-check-input"/>Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control "/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="form-control">
                                                    <option>India</option>
                                                    {/* <!-- <option>United Kingdom</option> --> */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>State/UT</label>
                                                <select className="form-control">
                                                    <option>Madhya Pradesh</option>
                                                    <option>Utter Pradesh</option>
                                                    <option>Maharastra</option>
                                                    <option>Gujrat</option>
                                                    <option>Chhatisgarh</option>
                                                    <option>Goa</option>
                                                    <option>Delhi</option>
                                                    <option>Hariyana</option>
                                                    <option>Jammu & Kashmir</option>
                                                    <option>Himachal Pradesh</option>
                                                    <option>Andhra Pradesh</option>
                                                    <option>Manipur</option>
                                                    <option>Sikkim</option>
                                                    <option>Tamil Nadu</option>
                                                    <option>Meghalaya</option>
                                                    <option>Arunachal Pradesh</option>
                                                    <option>Assam</option>
                                                    <option>Jharkhand</option>
                                                    <option>Mizoram</option>
                                                    <option>Telangana</option>
                                                    <option>Tripura</option>
                                                    <option>Nagaland</option>
                                                    <option>Karnataka</option>
                                                    <option>Bihar</option>
                                                    <option>Punjab</option>
                                                    <option>Odisha</option>
                                                    <option>Uttarakhand</option>
                                                    <option>Rajasthan</option>
                                                    <option>West Bengal</option>
                                                    <option>Andaman and Nicobar Islands</option>
                                                    <option>Dadra and Nagar Haveli and Daman & Diu</option>
                                                    <option>Lakshadweep</option>
                                                    <option>Puducherry</option>
                                                    <option>Ladakh</option>
                                                    <option>Chandigarh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Phone </label>
                                        <input class="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <div className="profile-upload">
                                            <div className="upload-img">
                                                <img alt="" src="../assets/img/user.jpg"/>
                                            </div>
                                            <div className="upload-input">
                                                <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Short Biography</label>
                                <textarea class="form-control" rows="3" cols="30"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Status</label>
                                <div className="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="status" id="doctor_active"
                                        value="option1" checked/>
                                    <label class="htmlForm-check-label" for="doctor_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="status" id="doctor_inactive"
                                        value="option2"/>
                                    <label class="htmlForm-check-label" for="doctor_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Retailer</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button className="btn btn-primary submit-btn">Create Retailer</button>

      </div>
    </div>
  </div>
</div>
    </>
  )
}
