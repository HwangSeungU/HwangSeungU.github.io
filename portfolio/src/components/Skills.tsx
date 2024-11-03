import { Box, Grid, Typography } from "@mui/material";
import SkillBox from "./SkillBox";

const Skills = () => {
  return (
    <Box sx={{ backgroundColor: "#CBD0D8" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1080px",
          margin: "0 auto",
          gap: "12px",
          marginTop: "32px",
          paddingBottom: "32px",
          paddingTop: "24px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Skills</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            display: "flex",
            gap: "8px",
            margin: "0 auto",
            padding: "12px",
          }}
        >
          <Grid container columns={{ xs: 4, sm: 12, md: 20 }}>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="oracle" src="/oracle.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="azure" src="/azure.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="css" src="/css.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="html" src="/html.jpg"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="java" src="/java.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="javascript" src="/javascript.jpeg"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="jsp" src="/jsp.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="mysql" src="/mysql.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="node_express" src="/node_express.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="react" src="/react.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="spring" src="/spring.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="springboot" src="/springboot.png"></SkillBox>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SkillBox alt="typescript" src="/typescript.png"></SkillBox>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
