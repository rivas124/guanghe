import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import { getList, UpdateFactor } from "../../../../configs/componyApi/api";

export function Security(userInfo: {
  userInfo: { Recovery: number; tel: any };
}) {
  const [login, setLogin] = React.useState("");
  const [twofactor, setTwoFactor] = React.useState("");
  const [recovery, setRecovery] = React.useState(userInfo.userInfo.Recovery);
  const [alert, setAlert] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    getList().then((res: any) => {
      var userinfo = res.data[0];
      setLogin(userinfo.Login);
      setTwoFactor(userinfo.TwoFactor);
    });
  }, []);

  const updateClick = () => {
    var data = {
      Login: login,
      TwoFactor: twofactor,
      tel: userInfo.userInfo.tel,
      Recovery: recovery,
    };
    UpdateFactor(data).then((res: any) => {
      setAlert(true);
    });
  };

  const handleChange = () => {
    if (recovery === 1) {
      setRecovery(2);
    } else if (recovery === 2) {
      setRecovery(1);
    }
  };

  const getback = () => {
    router.push("/");
  };
  return (
    <Box className={styles.security_root}>
      <Box>
        {alert ? (
          <Alert
            severity="success"
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
            修改成功
          </Alert>
        ) : (
          <></>
        )}
      </Box>
      <h4>Security Settings</h4>
      <form>
        <p>Login</p>
        <input
          type="text"
          className={styles.security_input}
          defaultValue={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <p>Two-factor auth</p>
        <input
          type="text"
          className={styles.security_input}
          defaultValue={twofactor}
          onChange={(e) => {
            setTwoFactor(e.target.value);
          }}
        />
        <br />
        <input
          type="checkbox"
          className={styles.security_checkbox}
          defaultChecked={userInfo.userInfo.Recovery == 2}
          onChange={handleChange}
        />
        <p style={{ display: "inline" }}> Recovery</p>
      </form>
      <Button
        className={styles.page1_update}
        variant="contained"
        onClick={updateClick}
      >
        Update
      </Button>
      <Button className={styles.page1_cancel} onClick={getback}>
        Cancel
      </Button>
    </Box>
  );
}
