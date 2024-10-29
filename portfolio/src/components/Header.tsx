import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1080px",
        color: "white",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h5"
        component={Link}
        to="/"
        sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        HSW PORTFOLIO
      </Typography>
      <List
        sx={{
          display: "flex",
          gap: "12px",
          width: "45%",
        }}
      >
        <ListItem
          sx={{
            textAlign: "center",
          }}
        >
          <ListItemText>Abuot me</ListItemText>
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
          }}
        >
          <ListItemText>Skills</ListItemText>
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
          }}
        >
          <ListItemText>Archiving</ListItemText>
        </ListItem>
        <ListItem
          sx={{
            textAlign: "center",
          }}
        >
          <ListItemText>Projects</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
