import { Box } from "@mui/material";
import Header from "./Header";
import HeroPage from "./HeroPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

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
          position: "fixed",
          zIndex: "1",
          width: "100%",
        }}
      >
        <Header />
      </Box>
      <HeroPage />
      <AboutMe />
      <Skills />
    </Box>
  );
};

export default MainPage;
