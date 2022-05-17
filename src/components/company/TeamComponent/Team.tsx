import Grid from "@mui/material/Grid";
import styles from "./styles.module.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import itemData from "../../../../public/itemData.json";

export function Team() {
  return (
    <Grid margin={"2vw"}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          成员
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          our team
        </Typography>
        <Typography color={"#82b1ff"} variant="h3" gutterBottom>
          -
        </Typography>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        <ImageList sx={{ width: 1220, height: 300 }} cols={4} rowHeight={270}>
          {itemData.itemData.map((item) => (
            <ImageListItem key={item.img} className={styles.imageListItem}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                style={{ height: "10rem" }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                className={styles.imageListItemBar}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
