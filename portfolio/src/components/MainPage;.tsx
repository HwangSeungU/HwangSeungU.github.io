import { Box, Typography } from "@mui/material";

const MainPage = () => {
  return (
    <Box>
      <Typography variant="h2">mui 적용 테스트</Typography>
      <Typography
        component="a"
        href="https://www.notion.so/0cc8a3f5ec974cd5bcf685f76e35a6b7"
        variant="h5"
      >
        notion 정리 내용
      </Typography>
      <Typography variant="h5">사용 라이브러리 : mui, react-dom</Typography>
    </Box>
  );
};

export default MainPage;
