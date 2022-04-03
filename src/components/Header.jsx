import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const Logout = () => {
    window.localStorage.removeItem("Current User");
    window.location.href = "/signin";
  };

  const handleHomepage = () => {
    navigate("/");
  };

  const handleCartPage = () => {
    navigate("/cartpage");
  };
  const handleAddProducts = () => {
    navigate("/addproducts");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={handleHomepage}
            variant="h6"
            component="div"
            style={{ cursor: "pointer" }}
            sx={{ flexGrow: 1 }}
          >
            Ecommerce Web Shop
          </Typography>
          <Typography
            onClick={handleAddProducts}
            variant="h6"
            component="div"
            style={{
              cursor: "pointer",
              marginRight: "750px",
              width: 40,
              paddingLeft: 15,
            }}
            sx={{ flexGrow: 1 }}
          >
            Add Products
          </Typography>
          <div style={{ width: 50, height: 50, cursor: "pointer" }}>
            <lottie-player
              src="https://assets4.lottiefiles.com/private_files/lf30_x2lzmtdl.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              onClick={handleCartPage}
            ></lottie-player>
          </div>
          <Button size="humongous" onClick={Logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
