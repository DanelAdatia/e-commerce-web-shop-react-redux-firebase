import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import Layout from "./Layout";
import { useSelector } from "react-redux";

function AddProducts() {
  const productRedux = useSelector((state) => state.details.product);
  const [formData, setFormData] = useState({
    id: parseInt(Object.keys(productRedux).length),
    ProductName: "",
    Description: "",
    Price: "$",
    category: "",
    url: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddProducts = () => {
    fetch(
      "API1",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
    setFormData({
      Description: "",
      Price: "",
      category: "",
      url: "",
      ProductName: "",
      id: parseInt(Object.keys(productRedux).length) + 1,
    });
  };

  return (
    <Layout>
      <Paper
        style={{
          padding: 60,
          marginLeft: 200,
          marginRight: 250,
          marginTop: 20,
        }}
      >
        <Typography variant="h6" gutterBottom>
          <b> Add Products</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="id"
              name="id"
              style={{ width: 600 }}
              label="ID"
              value={formData.id}
              fullWidth
              variant="standard"
            />
            <TextField
              required
              id="ProductName"
              name="ProductName"
              style={{ width: 600 }}
              label="Product Name"
              value={formData.ProductName}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="Description"
              name="Description"
              label="Description"
              value={formData.Description}
              style={{ width: 600 }}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="Price"
              name="Price"
              label="Price"
              style={{ width: 300 }}
              value={formData.Price}
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="category"
              name="category"
              label="Category"
              value={formData.category}
              onChange={handleChange}
              style={{ width: 300 }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Image"
              name="url"
              label="Image URL"
              style={{ width: 300 }}
              fullWidth
              value={formData.url}
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleAddProducts}
          style={{ marginTop: 50 }}
          variant="contained"
          disabled={
            !formData.ProductName ||
            !formData.category ||
            !formData.Description ||
            !formData.Price ||
            !formData.url
          }
        >
          ADD
        </Button>
      </Paper>
    </Layout>
  );
}

export default AddProducts;
