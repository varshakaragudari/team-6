import React from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Theme from "../Themes/Theme";

const BoxTheme = createTheme({
  palette: {
    primary: {
      main: "#F2EAF9", // Your desired background color
    },
    secondary: {
      main: "#ff69b4",
    },
  },
});

export default function GetMoney() {
  return (
    <div>
      <div style={{ background: BoxTheme.palette.primary.main }}>
        <ThemeProvider theme={BoxTheme}>
          <div className=" container marketing">
            <div className="row my-5">
              <div className="col-8 align-self-center">
                <div className="">
                  <h1
                    className="mb-5"
                    style={{ color: Theme.palette.primary.main }}
                  >
                    <strong>Get Your Money Today</strong>
                  </h1>
                  <p style={{ fontWeight: "bold" }}>
                    Your money could be in your account the same day if you
                    apply and are approved before 5:45pm Monday to Friday,
                    excluding bank holidays. (It may take longer if we need more
                    info.)
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="rounded-circle mx-auto p-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oA7tqRfg74M3FmHtNtB-EHFwEPTR7POEQg&usqp=CAU"
                    alt="Circle Image"
                    className="img-fluid rounded-circle" // Use Bootstrap's rounded-circle class
                  />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
