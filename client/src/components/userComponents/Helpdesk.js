import React, { useState } from "react";
import "./Helpdesk.css";
import emailjs from "emailjs-com";

export const Helpdesk = () => {
  const [ticketData, setTicketData] = useState({
    topic: "",
    issueDescription: "",
    receiveReplyByEmail: false,
  });

  const [errors, setErrors] = useState({});
  const [posted, setPosted] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTicketData({ ...ticketData, [name]: value });
    validateForm(name, value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTicketData({ ...ticketData, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Add logic to submit the ticket data here
      console.log("Ticket submitted:", ticketData);
      emailjs
        .sendForm(
          "service_tj2bosl",
          "template_k50v9jj",
          event.target,
          "KOcaNmy3DZ-ljf5-x"
        )
        .then(
          (result) => {
            console.log(result.text);
            setPosted(true);
            setMessage("Query mailed to Admin");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const validateForm = (name, value) => {
    const newErrors = { ...errors };

    if (name === "topic" && !value) {
      newErrors.topic = "Topic is required";
    }

    if (name === "issueDescription" && !value) {
      newErrors.issueDescription = "Issue description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <section className="account vh-10">
        <div className="container py-5 h-10">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    {/* Add your image here */}
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <h2>Help Desk</h2>
                      <h6>Raise a ticket and write your queries to us</h6>
                      <br />
                      <form onSubmit={handleSubmit}>
                        <div className="input-transact form-group">
                          <label>Select a relevant topic</label>

                          <select
                            className="form-control small-input"
                            name="topic"
                            value={ticketData.topic}
                            onChange={handleInputChange}
                            required
                            placeholder="Choose your issue"
                          >
                            <option value="">Choose Your Issue</option>
                            <option value="Login Credentials">
                              Login Credentials
                            </option>
                            <option value="Account statement">
                              Account statement
                            </option>
                            <option value="Early Installments">
                              Early Installments
                            </option>
                            <option value="About loans">About loans</option>
                            <option value="Avail loans">Avail loans</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <br></br>
                        {errors.topic && (
                          <p className="error">{errors.topic}</p>
                        )}

                        <div className="form-group input-transact">
                          <label>Describe your issue</label>
                          <textarea
                            className="form-control small-input"
                            name="issueDescription"
                            placeholder="Describe your issue"
                            value={ticketData.issueDescription}
                            onChange={handleInputChange}
                            required
                          />
                          {errors.issueDescription && (
                            <p className="error">{errors.issueDescription}</p>
                          )}
                        </div>
                        <br></br>

                        <div className="form-check form-group input-transact">
                          <input
                            type="checkbox"
                            name="receiveReplyByEmail"
                            checked={ticketData.receiveReplyByEmail}
                            onChange={handleCheckboxChange}
                            className="form-check-input"
                          />
                          <label className="form-check-label small-label">
                            Receive the reply of this ticket by email
                          </label>
                        </div>
                        <br></br>

                        <button
                          id="transact-btn"
                          type="submit"
                          className="btn btn-primary"
                        >
                          Raise Ticket
                        </button>
                      </form>
                      {posted && (
                        <div
                          class=" w-100 mt-4 mx-auto alert alert-success alert-dismissible fade show d-flex justify-content-between"
                          role="alert"
                        >
                          <div>
                            <strong>{message}</strong>
                          </div>
                          <button
                            type="button"
                            className="close btn btn-secondary btn-sm"
                            data-dismiss="alert"
                            aria-label="Close"
                            onClick={() => {
                              setPosted(false);
                            }}
                          >
                            Click Here
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
