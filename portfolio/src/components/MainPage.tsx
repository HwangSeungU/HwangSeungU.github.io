import { Box } from "@mui/material";
import Header from "./Header";
import HeroPage from "./HeroPage";

const MainPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: "1",
          width: "100%",
        }}
      >
        <Header />
      </Box>
      <HeroPage />
    </Box>
  );
};

export default MainPage;
