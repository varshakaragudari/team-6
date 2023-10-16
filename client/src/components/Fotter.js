import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faDribbble,
  faTwitter,
  faGooglePlusG,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Theme from "./Themes/Theme";
import "./x.css";
import { ThemeProvider } from "@mui/material";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div
        className="bottom-0"
        style={{
          // minHeight: "100%",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <div
          className="text-center"
          style={{
            backgroundColor: Theme.palette.primary.main,
            padding: "20px",
          }}
        >
          <section className="mb-4">
            <button
              className="btn btn-light btn-lg m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button
              className="btn btn-light btn-lg m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faDribbble} />
            </button>
            <button
              className="btn btn-light btn-lg m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button
              className="btn btn-light btn-lg m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </button>
            <button
              className="btn btn-light btn-lg m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button
              className="btn btn-light btn-lg m-2"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </button>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{
            backgroundColor: Theme.palette.primary.main,
            color: "white",
          }}
        >
          © 2023 Copyright : <strong>NatWest</strong>
        </div>
      </div>
    </ThemeProvider>
  );
}
