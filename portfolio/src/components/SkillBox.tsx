import { Box, Card, CardActionArea, CardMedia } from "@mui/material";

type SkillBoxProps = {
  alt?: string;
  src?: string;
};

const SkillBox = ({ alt, src }: SkillBoxProps) => {
  return (
    <Box
      sx={{
        width: "114px",
        height: "114px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
      }}
    >
      <Card
        sx={{
          objectFit: "cover",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image={src}
            alt={alt}
          />
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SkillBox;
