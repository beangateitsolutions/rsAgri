import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Invoices() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-5 col-4">
                        <h4 className="page-title">Invoices</h4>
                    </div>
                    <div className="col-sm-7 col-8 text-right m-b-30">
                        <a href="create-invoice.html" className="btn btn-primary btn-rounded"><i class="fa fa-plus"></i> Create New Invoice</a>
                    </div>
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">From</label>
                            <div className="cal-icon">
                                <input class="form-control floating datetimepicker" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">To</label>
                            <div className="cal-icon">
                                <input class="form-control floating datetimepicker" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Status</label>
                            <select className="select floating">
                                <option>Select Status</option>
                                <option>Pending</option>
                                <option>Paid</option>
                                <option>Partially Paid</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="#" className="btn btn-success btn-block"> Search </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Invoice Number</th>
                                        <th>Employee</th>
                                        <th>Joining Date</th>
                                        <th>Payment Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><a href="invoice-view.html">#INV-0001</a></td>
                                        <td>Sandeep</td>
                                        <td>1 Aug 2023</td>
                                        <td>7 Aug 2023</td>
                                        <td>Rs. 6000</td>
                                        <td><span className="custom-badge status-green">Paid</span></td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-invoice.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="invoice-view.html"><i class="fa fa-eye m-r-5"></i> View</a>
                                                    <a className="dropdown-item" href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a>
													<a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
									<tr>
                                        <td>2</td>
                                        <td><a href="invoice-view.html">#INV-0002</a></td>
                                        <td>Sanjay</td>
                                        <td>24 Aug 2023</td>
                                        <td>24 Aug 2023</td>
                                        <td>Rs. 7000</td>
                                        <td><span className="custom-badge status-blue">Sent</span></td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-invoice.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="invoice-view.html"><i class="fa fa-eye m-r-5"></i> View</a>
                                                    <a className="dropdown-item" href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a>
													<a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
									<tr>
                                        <td>3</td>
                                        <td><a href="invoice-view.html">#INV-0003</a></td>
                                        <td>Nawaz</td>
                                        <td>1 Sep 2023</td>
                                        <td>7 Sep 2023</td>
                                        <td>Rs. 8000</td>
                                        <td><span className="custom-badge status-orange">Partially Paid</span></td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="edit-invoice.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="invoice-view.html"><i class="fa fa-eye m-r-5"></i> View</a>
                                                    <a className="dropdown-item" href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a>
                                                    <a className="dropdown-item" href="#"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													<a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
    </>
  )
}
