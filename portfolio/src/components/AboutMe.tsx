import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import AboutItem from "./AboutItem";
import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";

const AboutMe = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        maxWidth: "1080px",
        margin: "0 auto",
        gap: "12px",
        marginTop: "32px",
        flexDirection: "column",
        fontWeight: "600",
        paddingBottom: "32px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">About Me</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Item>
              <AboutItem icon={<PersonIcon />} title="이름" content="황승우" />
            </Item>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Item>
              <AboutItem
                icon={<CakeIcon />}
                title="생년월일"
                content="1999.03.16"
              />
            </Item>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Item>
              <AboutItem
                icon={<LocationOnIcon />}
                title="지역"
                content="인천 남동구"
              />
            </Item>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Item>
              <AboutItem
                icon={<PhoneIcon />}
                title="연락처"
                content="010-3610-5710"
              />
            </Item>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Item>
              <AboutItem
                icon={<EmailIcon />}
                title="이메일"
                content="susj1475321@naver.com"
              />
            </Item>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Item>
              <AboutItem
                icon={<EditIcon />}
                title="학력"
                content="호서대학교"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;
