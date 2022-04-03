import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { setDetails } from "../redux/actions/ProductAction";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  function GetItemsFromFireDB() {
    axios.get(`Api 5`).then((response) => {
      console.log(
        Object.values(response.data["api6"].addProducts).map((p) => p.formData)
      );
      setProducts(
        Object.values(response.data["api7"].addProducts).map((p) => p.formData)
      );
      dispatch(
        setDetails(
          Object.values(response.data["api8"].addProducts).map(
            (p) => p.formData
          )
        )
      );
    });
  }

  const NavigateToDetails = (product) => {
    // navigate(`/details`, { state: product });
    navigate(`details/${product.id}`);
  };

  useEffect(() => {
    GetItemsFromFireDB();
  });

  return (
    <Layout>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            direction="row"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((product) => {
              return (
                <Grid
                  key={product.url}
                  style={{ marginTop: "50px", marginLeft: "100px" }}
                  item
                  md={4}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => NavigateToDetails(product)}
                  >
                    <Item>
                      <img
                        style={{ width: 350, height: 380 }}
                        src={product.url}
                        alt="productImage"
                      />
                    </Item>
                    <Item style={{ fontSize: "15px" }}>
                      <b>{product.category}</b>
                    </Item>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </Layout>
  );
};

export default HomePage;
