import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";

export function Footer() {
  const router = useRouter();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        color="inherit"
      >
        <Button
          onClick={() => {
            window.scroll({
              top: 700,
              behavior: "smooth",
            });
          }}
        >
          关于我们
        </Button>
        <Button>帮助中心</Button>
        <Button>联系我们</Button>
        <Button>客服中心</Button>
        <Button
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          广合科技
        </Button>
      </ButtonGroup>
    </Grid>
  );
}
