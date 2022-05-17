import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        <ListItem>
          <ListItemText>
            电话:xxx xxxx xxx
            <br />
            邮箱:xxxxxxxx@xxx.com
          </ListItemText>
          <ListItemText></ListItemText>
        </ListItem>
      </List>
    </Dialog>
  );
}

let c = 0;
export function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [info, setInfo] = React.useState(null);
  const [info, setInfo] = React.useState<any[]>([]);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const DialoghandleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    router.push("/");
    sessionStorage.clear();
  };

  const settingClick = () => {
    router.push({
      pathname: "/user",
    });
  };
  let s = global.sessionStorage;
  if (global.sessionStorage) {
    c = s.length;
  }

  React.useEffect(() => {
    setOpen(false);
    var item: any = global.sessionStorage.getItem("img");
    setInfo(item);
  });
  return (
    <Grid container justifyContent="space-around" alignItems="baseline">
      <Grid>
        <p>沈阳广合科技发展有限公司</p>
      </Grid>
      <Grid>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          color="inherit"
        >
          <Button
            onClick={() => {
              router.push("/");
            }}
          >
            首页
          </Button>
          <Button
            onClick={() => {
              window.scroll({
                top: 1500,
                behavior: "smooth",
              });
            }}
          >
            成员
          </Button>
          <Button
            onClick={() => {
              window.scroll({
                top: 700,
                behavior: "smooth",
              });
            }}
          >
            关于
          </Button>
          <Button
            onClick={() => {
              window.scroll({
                top: 2500,
                behavior: "smooth",
              });
            }}
          >
            博客
          </Button>
          <Button
            onClick={() => {
              window.scroll({
                top: 1000,
                behavior: "smooth",
              });
            }}
          >
            服务
          </Button>
          <Button onClick={handleClickOpen}>联系我们</Button>
          {c > 0 ? (
            <>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <Image
                  src={"http://192.168.31.163:3000/" + info}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={settingClick}>用户设置</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            ""
          )}
        </ButtonGroup>
        <SimpleDialog open={open} onClose={DialoghandleClose} />
      </Grid>
    </Grid>
  );
}
