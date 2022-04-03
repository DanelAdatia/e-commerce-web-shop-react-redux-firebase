import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  color: "#3A3845",
  background: "#F7CCAC",
  fontWeight: "bold",
  fontSize: "12px",
}));

const Div2 = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  color: "#C69B7B ",

  fontWeight: "bold",
  fontSize: "15px",
}));

const Details = () => {
  const DetailsRedux = useSelector((state) => state.details);
  const { id } = useParams();
  const [chosenProduct, setChosenProduct] = useState([]);

  // console.log(chosenProduct.id.toString(), id);

  const handleAddToCart = () => {
    if (chosenProduct.id.toString() === id) {
      fetch("Api 4", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...chosenProduct }),
      }).then((res) => res.json());
    }
  };

  useEffect(() => {
    Object.values(DetailsRedux).map((product) => {
      return Object.values(product).map((kk) => {
        if (kk.id.toString() === id) {
          setChosenProduct(kk);
        }
      });
    });

    return null;
  });

  // const { state } = useLocation();
  // console.log(state);

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid>
          <img
            style={{
              alignSelf: "center",
              height: 350,
              width: 350,
              padding: "10px",
              marginTop: "10px",
              marginLeft: "150px",
            }}
            src={chosenProduct.url}
            alt="ProductImage"
          />
        </Grid>

        <Grid
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 10,
            paddingLeft: 10,
            marginTop: 20,
            marginLeft: "50px",
            width: "600px",
            height: "500px",
          }}
        >
          <Div variant="h6">{chosenProduct.ProductName}</Div>
          <div
            style={{
              display: "flex",
              float: "left",
              marginTop: "8px",
              marginRight: "5px",
            }}
          >
            Description:
          </div>
          <Div2> {chosenProduct.Description}</Div2>
          <div
            style={{
              display: "flex",
              float: "left",
              marginTop: "8px",
              marginRight: "5px",
            }}
          >
            Price:
          </div>
          <Div2> {chosenProduct.Price}</Div2>
          <div
            style={{
              display: "flex",
              float: "left",
              marginTop: "8px",
              marginRight: "5px",
            }}
          >
            Category:
          </div>
          <Div2> {chosenProduct.category}</Div2>
          <Button
            variant="contained"
            aria-label="outlined primary button group"
            style={{ backgroundColor: "#A68DAD" }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Details;
