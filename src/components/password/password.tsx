import React, { Component, useState } from "react";
import { Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import Footer from "../bottomButton/bottomButton";
import { useRouter } from 'next/router';
import axios from "axios";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function Password() {
  const [userpwd, setUserpwd] = React.useState("");
  const [updatepwd, setUpdatePwd] = React.useState("");
  const [userpassword, setUserpassword] = React.useState("");
  const [alert , setAlert] = React.useState(false);
  const router = useRouter();
  const handleClick = () => {
    var url = "http://192.168.31.163:3000/updatePwd"
    var data = {usercode:localStorage.getItem('username'),userpwd:userpwd , updatepwd:updatepwd}
    axios.post(url,data,).then(res => {
        if(res.data.msg === 'The old password is incorrect'){
            setAlert(true)
        }else{
            router.push('/login');
        }
    })
    
}
  return (
    <Box className={styles.pwd_root}>
        {alert ? 
            <Alert severity="error"
          action={
            <IconButton aria-label="close" size="small"
              onClick={() => {
                setAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
          原密码错误
        </Alert>
                :<></>}
      <h4>Password Settings</h4>
      <span>Old password</span>
      <br />
      <input
        type="text"
        className={styles.pwd_input}
        value={userpwd}
        onChange={(e) => {
            setUserpwd(e.target.value);
        }}
      />
      <br />
      <br />
      <span>New password</span>
      <br />
      <input
        type="text"
        className={styles.pwd_input}
        onChange={(e) => {
            setUpdatePwd(e.target.value);
        }}
      />
      <br />
      <br />
      <span>Confirm new password</span>
      <br />
      <input
        type="text"
        className={styles.pwd_input}
        onChange={(e) => {
            setUserpassword(e.target.value);
        }}
      />
      {/* <Footer /> */}
      <Box className={styles.buttonBox}>
        <Button className={styles.update} variant="contained"
            onClick={handleClick}
        >
          Update
        </Button>
        <Button className={styles.cancel}>Cancel</Button>
      </Box>
    </Box>
  );
}
