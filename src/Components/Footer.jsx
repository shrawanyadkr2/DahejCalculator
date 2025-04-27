import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        mt: 4,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Developed with ❤️ by <strong>Shrawan Yadav</strong>
      </Typography>
    </Box>
  );
};

export default Footer;
