import { Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer style={{ color: "gray", position: "fixed", bottom: 0 }}>
        <Button onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
      </footer>
    </div>
  );
};

export default Footer;
