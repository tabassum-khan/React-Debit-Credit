import React from "react";

const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

const modal = (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    
                    <div className="modal-header">
                        <input type="text" className="modal-customer-name form-control" placeholder="Enter Customer Name" />
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div className="modal-body">
                        <ul className="transaction-list">
                            
                            <li className="transaction">
                                <span className="transaction-date">{date + "-" + month + "-" + year}</span>
                                <div>
                                    <input type="text" className="form-control credit" placeholder="Edit Amount" />
                                    <i className="fa fa-pencil" aria-hidden="true">
                                        <span className="tooltip-text edit">Edit</span>
                                    </i>
                                    <i className="fa fa-trash" aria-hidden="true">
                                        <span className="tooltip-text delete">Delete</span>
                                    </i>
                                </div>
                            </li>

                            <li className="transaction">
                                <span className="transaction-date">{date + "-" + month + "-" + year}</span>
                                <div>
                                    <input type="text" className="form-control debit" placeholder="Edit Amount" />
                                    <i className="fa fa-pencil" aria-hidden="true">
                                        <span className="tooltip-text edit">Edit</span>
                                    </i>
                                    <i className="fa fa-trash" aria-hidden="true">
                                        <span className="tooltip-text delete">Delete</span>
                                    </i>
                                </div>
                            </li>

                            <li className="transaction">
                                <span className="transaction-date">{date + "-" + month + "-" + year}</span>
                                <div>
                                    <input type="text" className="form-control credit" placeholder="Edit Amount" />
                                    <i className="fa fa-pencil" aria-hidden="true">
                                        <span className="tooltip-text edit">Edit</span>
                                    </i>
                                    <i className="fa fa-trash" aria-hidden="true">
                                        <span className="tooltip-text delete">Delete</span>
                                    </i>
                                </div>
                            </li>

                            <li className="transaction">
                                <span className="transaction-date">{date + "-" + month + "-" + year}</span>
                                <div>
                                    <input type="text" className="form-control debit" placeholder="Edit Amount" />
                                    <i className="fa fa-pencil" aria-hidden="true">
                                        <span className="tooltip-text edit">Edit</span>
                                    </i>
                                    <i className="fa fa-trash" aria-hidden="true">
                                        <span className="tooltip-text delete">Delete</span>
                                    </i>
                                </div>
                            </li>

                        </ul>
                    </div>  
                    
                    <div className="modal-footer">
                        <div className="transaction-money">
                            <i className="fa fa-inr" aria-hidden="true"></i>
                            <input type="text" className="form-control" placeholder="Enter Amount"></input>
                        </div>  

                        <div className="button-section">
                            <button type="button" className="btn btn-cred btn-block">
                                <span>
                                    <span className="transaction-text">You Gave</span>
                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                </span>
                            </button>
                            <button type="button" className="btn btn-debt btn-block">
                                <span>
                                    <span className="transaction-text">You Borrowed</span>
                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </div> 

                </div>
            </div>
    </div>
);

function Modal(){
    return modal;
}

export default Modal;