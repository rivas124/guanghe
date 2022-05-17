import React from "react";
import { Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { getList, UpdateAccount } from "../../../../configs/componyApi/api";
import Typography from '@mui/material/Typography';

export function Account(userInfo: { userInfo: { tel: any } }) {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [compony, setCompony] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    getList().then((res: any) => {
      var userinfo = res.data[0];
      setFirstName(userinfo.firstName);
      setLastName(userinfo.lastName);
      setEmail(userinfo.email);
      setPhoneNumber(userinfo.tel);
      setCompony(userinfo.company);
      setDesignation(userinfo.Desi);
      setBio(userinfo.Bio);
    });
  }, []);

  const updateClick = () => {
    var data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      Compony: compony,
      Desi: designation,
      Bio: bio,
      tel: phonenumber,
      oldTel: userInfo.userInfo.tel,
    };
    UpdateAccount(data).then((res: any) => {
      setAlert(true);
    });
  };

  const getback = () => {
    router.push("/");
  };
  return (
    <Box className={styles.root}>
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

      <h2>Account Settings</h2>
      <Typography>First Name</Typography>
      <br />
      <input
        type="text"
        className={styles.input}
        defaultValue={firstname}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <Typography className={styles.rightinputtitle}>Last Name</Typography>
      <input
        type="text"
        className={styles.input}
        defaultValue={lastname}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <br />

      <Typography>Email</Typography>
      <br />
      <input
        type="text"
        className={styles.input}
        defaultValue={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Typography className={styles.rightinputtitle}>Phone number</Typography>
      <input
        type="text"
        className={styles.input}
        defaultValue={phonenumber}
        style={{ position: "relative", right: "25px" }}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <br />
      <br />

      <Typography>Company</Typography>
      <br />
      <input
        type="text"
        className={styles.input}
        defaultValue={compony}
        onChange={(e) => {
          setCompony(e.target.value);
        }}
      />

      <Typography className={styles.rightinputtitle}>Designation</Typography>
      <input
        type="text"
        className={styles.input}
        defaultValue={designation}
        onChange={(e) => {
          setDesignation(e.target.value);
        }}
      />
      <br />
      <br />

      <Typography>Bio</Typography>
      <br />
      <textarea
        className={styles.textarea}
        defaultValue={bio}
        onChange={(e) => {
          setBio(e.target.value);
        }}
      ></textarea>

      <Box>
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
    </Box>
  );
}

