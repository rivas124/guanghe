import React, { Component } from "react";
import Box from "@mui/material/Box";
import styles from "./carousel.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ImgCarousel } from "react-responsive-carousel";
import loginImg2 from "../../../../public/img/login/LoginPage2.jpeg";
import loginImg1 from "../../../../public/img/login/LoginPage1.jpeg";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/styles";
import { getList, Login, Register } from "../../../configs/componyApi/api";

const AppTextField = styled(TextField)({
  width: "20vw",
});

const AppButton = styled(Button)({
  width: "60%",
  color: "white",
});

const AppButtonGroup = styled(ButtonGroup)({
  margin: "1rem 20% 0 20%",
  width: "80%",
});
export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography align="left" color="#888">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

let c = 0;
export function Carousel() {
  const [value, setValue] = React.useState(0);
  const [userlogincode, setUserlogincode] = React.useState("");
  const [userloginpwd, setUserloginpwd] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [alert1, setAlert1] = React.useState(false);
  const [alert2, setAlert2] = React.useState(false);
  const [alert3, setAlert3] = React.useState(false);
  const [alert4, setAlert4] = React.useState(false);
  const [alert5, setAlert5] = React.useState(false);
  const [usercode, setUsercode] = React.useState("");
  const [userpwd, setUserpwd] = React.useState("");
  const [userpassword, setUserpassword] = React.useState("");
  const [tel, setTel] = React.useState("");
  const router = useRouter();
  const [info, setInfo] = React.useState<any[]>([]);

  var userInfo = [];
  const loginHandleClick = () => {
    if (userlogincode === "") {
      (document.getElementById("hid") as HTMLInputElement).style.display =
        "block";
    } else if (userloginpwd === "") {
      (document.getElementById("pwdhid") as HTMLInputElement).style.display =
        "block";
    } else {
      var data = { usercode: userlogincode, userpwd: userloginpwd };
      Login(data).then((res: any) => {
        if (res.data.code === -1) {
          setAlert(true);
        } else {
          // localStorage.setItem('token',res.data.data.token);
          // localStorage.setItem('username',res.data.data.userInfo.username)
          global.sessionStorage.setItem("token", res.data.data.token);
          global.sessionStorage.setItem(
            "username",
            res.data.data.userInfo.username
          );
          setAlert4(true);
          setTimeout(() => {
            setAlert4(false);
          }, 3000);
          location.reload();
        }

        getList().then((res: any) => {
          console.log(res);
          userInfo = res.data[0];
          setInfo(userInfo);
          global.sessionStorage.setItem("img", res.data[0].imgurl);
        });
      });
    }
  };

  const regHandleClick = () => {
    if (userpwd !== userpassword) {
      setAlert2(true);
    } else if (
      usercode === "" ||
      userpwd === "" ||
      userpassword === "" ||
      tel === ""
    ) {
      setAlert3(true);
    } else {
      var data = { usercode: usercode, userpwd: userpwd, tel: tel };
      Register(data).then((res: any) => {
        if (res.data.code === -1) {
          setAlert1(true);
        } else {
          setAlert5(true);
          location.reload();
        }
      });
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let s = global.sessionStorage;
  if (global.sessionStorage) {
    c = s.length;
  }
  return (
    <Box style={{ height: "100px" }}>
      <Box>
        {alert ? (
          <Alert
            severity="error"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, position: "absolute", zIndex: 1000, width: "30%" }}
          >
            用户名或密码错误
          </Alert>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        {alert1 ? (
          <Alert
            severity="error"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setAlert1(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, position: "absolute", zIndex: 1000, width: "30%" }}
          >
            注册失败,请重试
          </Alert>
        ) : (
          <></>
        )}
      </Box>

      <Box>
        {alert2 ? (
          <Alert
            severity="error"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setAlert2(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, position: "absolute", zIndex: 1000, width: "30%" }}
          >
            不能为空
          </Alert>
        ) : (
          <></>
        )}
      </Box>

      <Box>
        {alert3 ? (
          <Alert
            severity="error"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setAlert3(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, position: "absolute", zIndex: 1000, width: "30%" }}
          >
            两次密码输入不一致
          </Alert>
        ) : (
          <></>
        )}
      </Box>

      <Box>
        {alert4 ? (
          <Alert
            severity="success"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setAlert4(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, position: "absolute", zIndex: 1000, width: "30%" }}
          >
            登陆成功
          </Alert>
        ) : (
          <></>
        )}
      </Box>

      <Box>
        {alert5 ? (
          <Alert
            severity="success"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setAlert5(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, position: "absolute", zIndex: 1000, width: "30%" }}
          >
            注册成功
          </Alert>
        ) : (
          <></>
        )}
      </Box>
      <Box className={styles.middle}>
        <ImgCarousel autoPlay infiniteLoop>
          <Image src={loginImg1} />
          <Image src={loginImg2} />
        </ImgCarousel>
      </Box>
      {c == 0 ? (
        <Box className={styles.form}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              style={{ marginTop: "5%" }}
            >
              <Tab
                label="登录"
                {...a11yProps(0)}
                style={{
                  width: "50%",
                  fontSize: "1.5rem",
                  fontFamily: "fantasy",
                  fontWeight: 800,
                }}
              />
              <Tab
                label="注册"
                {...a11yProps(1)}
                style={{
                  width: "50%",
                  fontSize: "1.5rem",
                  fontFamily: "fantasy",
                  fontWeight: 800,
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} sx={{ width: "100%" }}>
            <Typography align="left" color="#888">
              {" "}
              用户名:
            </Typography>
            <AppTextField
              placeholder="请输入用户名..."
              onChange={(event) => {
                setUserlogincode(event.target.value);
                dispatch({type:'CHANGE_USERNAME',value:event.target.value});
              }}
              required
              sx={{ width: "20vw" }}
            />
            <span id="hid" style={{ display: "none", color: "red" }}>
              此输入框不能为空
            </span>
            <span id="hid1" style={{ display: "none", color: "red" }}>
              ✔
            </span>
            <Typography align="left" color="#888">
              密码:
            </Typography>
            <AppTextField
              placeholder="请输入密码..."
              onChange={(event) => {
                setUserloginpwd(event.target.value);
                dispatch({type:'CHANGE_PASSWORD',value:event.target.value});
              }}
              required
              type="password"
            />
            <span id="pwdhid" style={{ display: "none", color: "red" }}>
              此输入框不能为空
            </span>
            <AppButtonGroup
              color="primary"
              sx={{ margin: "1rem 20%", width: "50%" }}
            >
              <AppButton
                onClick={loginHandleClick}
                variant="contained"
                color="secondary"
              >
                登陆
              </AppButton>
            </AppButtonGroup>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography align="left" color="#888">
              {" "}
              用户名:
            </Typography>
            <AppTextField
              placeholder="请输入用户名..."
              onChange={(event) => {
                setUsercode(event.target.value);
              }}
              required
            />
            <span
              id="hid"
              style={{ display: "none", color: "red", marginLeft: "80px" }}
            >
              此输入框不能为空
            </span>
            <br />
            <Typography align="left" color="#888">
              密码:
            </Typography>
            <AppTextField
              placeholder="请输入密码..."
              onChange={(event) => {
                setUserpwd(event.target.value);
              }}
              required
              type="password"
            />
            <span
              id="pwdhid"
              style={{ display: "none", color: "red", marginLeft: "80px" }}
            >
              此输入框不能为空
            </span>
            <br />
            <Typography align="left" color="#888">
              确认密码:
            </Typography>
            <AppTextField
              placeholder="请再次输入密码..."
              onChange={(event) => {
                setUserpassword(event.target.value);
              }}
              required
              type="pwd"
            />
            <br />
            <Typography align="left" color="#888">
              电话:
            </Typography>
            <AppTextField
              placeholder="请输入电话..."
              onChange={(event) => {
                setTel(event.target.value);
              }}
              required
              type="number"
            />
            <AppButtonGroup color="primary">
              <AppButton
                onClick={regHandleClick}
                variant="contained"
                color="secondary"
              >
                注册
              </AppButton>
            </AppButtonGroup>
          </TabPanel>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
function dispatch(arg0: { type: string; value: string; }) {
  throw new Error("Function not implemented.");
}

