import { Box, Typography } from "@mui/material";

const HeroPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 84px)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          zIndex: "1",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="h3">황승우의 포트폴리오</Typography>
        <Typography variant="h5">안녕하세요.</Typography>
        <Typography variant="h5">
          황승우의 포트폴리오에 오신것을 환영합니다.
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
          width: "100%",
          height: "calc(100vh - 84px)",
          left: "0",
          top: "0",
        }}
      ></Box>
      <Box
        sx={{
          backgroundImage: 'url("/coffee-5303998_1920.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default HeroPage;
