import React from "react";
import { Container, Card, CardContent, Grid, Typography } from "@mui/material";

function AboutUs() {
  const cardsData = [
    {
      title: "Who We Are",
      description:
        "We are a relationship bank for a digital world. Championing potential, helping people, families and businesses to thrive. By supporting our customers at every stage of their lives, we can build long-term value, invest for growth, make a positive contribution to society and drive sustainable returns for shareholders.",
      color: "#6a4585",
      imageSrc:
        "data:image/png;base64,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",
    },
    {
      title: "Loans",
      description:
        "We as a relationship bank provide the services to our customers so that they longer have to wait for days to get a loan sanctioned and can avail instant loans within minutes. And this is applicable for various types of loans, from personal to two-wheeler loans, and even business loans without much documentation.",
      color: "#4ca2ff",
      imageSrc:
        "https://cdn4.vectorstock.com/i/1000x1000/56/13/transaction-history-flat-color-icon-vector-36215613.jpg",
    },
    {
      title: "Services We Provide",
      description:
        "We provide services in almost all loan types such as Individual Loans, Educational Loans, Housing Loans, Vehicle Loans, Medical Loans, Gold Loans, Personal Loans, Business Loans, Small term Loans, Long Term Loans, Commercial Real Estate Loans, Startup loan Loans, Working capital Loans and Business Acquisition Loans.",
      color: "#40ab59",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXp7SoNdFjQ0NK1mOwA6ZlRhizzTYSXm6d2w&usqp=CAU",
    },
    {
      title: "Our Approach",
      description:
        "There is so much more to our bank beyond our financial products and services. We work with the ideology of tackling climate change, living more sustainably, growing your skills and confidence with money and getting your business started or helping it to grow.",
      color: "#ffcc33",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJrKLo5Oh7dlw8DFg-nlXPfOzKbsnQn4phQ&usqp=CAU",
    },
  ];

  return (
    <>
      {/* <div className="purple-div">
          <h3 className="white-text" style={{ font :"bold"}} >Loan Details</h3>
        </div> */}
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Card
                style={{
                  backgroundColor: card.color,
                  height: "100%",
                  padding: "20px",
                  borderRadius: "70px",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    style={{ height: "100px", marginBottom: "20px" }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br></br>
    </>
  );
}

export default AboutUs;
