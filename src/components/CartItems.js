import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { cartDetails } from "../redux/actions/ProductAction";
import { useDispatch } from "react-redux";

const CartItems = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function GetItemsFromFireDB() {
    axios.get(`API 2`).then((response) => {
      setCartProducts(response.data);
      dispatch(cartDetails(response.data));
    });
  }

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`Api 3`);
  };

  useEffect(() => {
    GetItemsFromFireDB();
  });

  const HandleOrderNow = () => {
    navigate("/order");
  };

  return (
    <Layout>
      <Grid style={{ padding: "30px" }} container spacing={1}>
        {cartProducts ? (
          Object.values(cartProducts).map((cartProduct, n) => {
            return (
              <div key={n}>
                <Card
                  style={{
                    border: "2px solid",
                    margin: "25px",
                    height: 400,
                    width: 300,
                  }}
                >
                  <CardHeader
                    title={cartProduct.category}
                    subheader={cartProduct.Description}
                  />
                  <CardMedia
                    component="img"
                    height="150"
                    width="150"
                    image={cartProduct.url}
                    alt="ProductImage"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {cartProduct.ProductName}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    Price: {cartProduct.Price}
                    <Button
                      style={{ marginLeft: "130px" }}
                      onClick={() => handleDelete(Object.keys(cartProducts)[n])}
                    >
                      Remove From Cart
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        ) : (
          <div
            style={{
              width: 200,
              height: 200,
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
              textAlign: "center",
            }}
          >
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_mawpsliw.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            <Wrapper>
              <b>No Items In The Cart</b>
            </Wrapper>
          </div>
        )}
      </Grid>
      <div style={{ marginBottom: 20, paddingRight: 20 }}>
        <Button
          onClick={HandleOrderNow}
          variant="contained"
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            marginBottom: 10,
            marginRight: 20,
          }}
        >
          Order Now
        </Button>
      </div>
    </Layout>
  );
};

export default CartItems;
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-100px); }
`;
const Wrapper = styled.span`
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;
