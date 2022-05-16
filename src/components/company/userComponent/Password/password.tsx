import React from "react";
import { Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import { useRouter } from 'next/router';
import axios from "axios";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export function Password() {
  const [userpwd, setUserpwd] = React.useState("");
  const [updatepwd, setUpdatePwd] = React.useState("");
  const [userpassword, setUserpassword] = React.useState("");
  const [alert , setAlert] = React.useState(false);
  const [alert1 , setAlert1] = React.useState(false);
  const router = useRouter();
  const handleClick = () => {
    var url = "http://192.168.31.163:3000/updatePwd"
    var data = {usercode:global.sessionStorage.getItem('username'),userpwd:userpwd , updatepwd:updatepwd}
    axios.post(url,data,).then(res => {
        if(res.data.msg === 'The old password is incorrect'){
            setAlert(true)
        }else if(updatepwd !== userpassword){
          setAlert1(true)
        }else if(res.data.msg !== 'The old password is incorrect' && updatepwd === userpassword){
            router.push('/login');
        }
    })
    
}

const getback = () => {
  router.push('/')
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


{alert1 ? 
            <Alert severity="error"
          action={
            <IconButton aria-label="close" size="small"
              onClick={() => {
                setAlert1(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
          两次密码输入不一致
        </Alert>
                :<></>}
      <h4>Password Settings</h4>
      <span>Old password</span>
      <br />
      <input
        type="password"
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
        type="password"
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
        type="password"
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
        <Button className={styles.cancel} onClick={getback}>Cancel</Button>
      </Box>
    </Box>
  );
}
