import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Theme from "../Themes/Theme";

const FAQTheme = createTheme({
  palette: {
    primary: {
      main: "#DBEDFA", // Your desired background color
    },
    secondary: {
      main: "#ff69b4", // You can set a secondary color here if needed
    },
  },
});

const BoxTheme = createTheme({
  palette: {
    primary: {
      main: "#FFEAE6", // Your desired background color
    },
    secondary: {
      main: "#ff69b4",
    },
  },
});

const BoxxTheme = createTheme({
  palette: {
    primary: {
      main: "#F2EAF9", // Your desired background color
    },
    secondary: {
      main: "#ff69b4",
    },
  },
});

export default function Faqs({ faqData }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleShowModal = (faq, event) => {
    setSelectedFAQ(faq);
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.right + window.scrollX,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling when the modal is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling when the modal is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Make sure scrolling is enabled when the component unmounts
    };
  }, [showModal]);

  return (
    <div className="mt-5">
      <div style={{ background: BoxxTheme.palette.primary.main }}>
        <ThemeProvider theme={BoxxTheme}>
          <div className=" container marketing">
            <div className="mx-auto py-5">
              <h1
                className="text-center mb-3"
                style={{ color: Theme.palette.primary.main }}
              >
                <strong>Are You Ready to apply ?</strong>
              </h1>
              <br></br>
              <p style={{ fontWeight: "bold" }}>
                We provide services in almost all loan types such as Individual
                Loans, Educational Loans, Housing Loans, Vehicle Loans, Medical
                Loans, Gold Loans, Personal Loans, Business Loans, Small term
                Loans, Long Term Loans, Commercial Real Estate Loans, Startup
                loan Loans, Working capital Loans and Business Acquisition
                Loans.
              </p>
            </div>
          </div>
        </ThemeProvider>
      </div>
      <div className="container">
        <div className="mx-auto my-5">
          <h1
            className="text-center mb-4"
            style={{ color: Theme.palette.primary.main }}
          >
            <strong>Why get a loan from us ?</strong>
          </h1>
          <div
            className="row py-2"
            style={{
              background: FAQTheme.palette.primary.main,
              borderRadius: "20px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {faqData &&
              faqData.map((faq, index) => (
                <div
                  key={index}
                  className="col-10 col-sm-10 col-md-5 col-lg-5 mx-auto my-2"
                >
                  <Button
                    variant="link"
                    onClick={(event) => handleShowModal(faq, event)}
                  >
                    <span className="m-2" style={{ textDecoration: "none" }}>
                      +
                    </span>
                    <span
                      className="h5"
                      style={{
                        textDecoration: "underline",
                        color: Theme.palette.primary.main,
                      }}
                    >
                      {faq.question}
                    </span>
                  </Button>
                  {showModal && selectedFAQ === faq && (
                    <Modal
                      show={showModal}
                      onHide={handleCloseModal}
                      dialogClassName="modal-dialog-fixed"
                    >
                      <Modal.Header
                        closeButton
                        style={{ color: Theme.palette.primary.main }}
                      >
                        <Modal.Title>
                          <strong style={{ color: Theme.palette.primary.main }}>
                            {selectedFAQ && selectedFAQ.question}
                          </strong>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {selectedFAQ && selectedFAQ.answer}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          style={{
                            backgroundColor: Theme.palette.primary.main,
                          }}
                          onClick={handleCloseModal}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div style={{ background: BoxTheme.palette.primary.main }}>
        <ThemeProvider theme={BoxTheme}>
          <div className=" container marketing">
            <div className="mx-auto my-5">
              <h1
                className="text-center mb-3"
                style={{ color: Theme.palette.primary.main }}
              >
                <strong>We'll start with your free quote</strong>
              </h1>
              <br></br>
              <p style={{ fontWeight: "bold" }}>
                At the start of your application, we’ll usually let you know if
                you could get a loan – and your personalised rate – without
                affecting your credit score. It’s then up to you if you want to
                go ahead.
              </p>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
