import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

type AboutItemProps = {
  icon?: React.ReactNode;
  title?: string;
  content?: string;
};

const AboutItem = ({ icon, title, content }: AboutItemProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "33%",
          height: "100%",
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          textAlign: "left",
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  );
};

export default AboutItem;
