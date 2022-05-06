import React, { Component, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useEffect } from 'react'
import styles from './styles.module.scss'
import axios from 'axios'
import { compose } from '@mui/system'
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useRouter } from "next/router";

export default function Account(
    userInfo
) {
    
    const [firstname , setFirstName] = React.useState("");
    const [lastname , setLastName] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [phonenumber , setPhoneNumber] = React.useState("");
    const [compony , setCompony] = React.useState("");
    const [designation , setDesignation] = React.useState("");
    const [bio , setBio] = React.useState("");
    const [alert , setAlert] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) =>{
        var userinfo= res.data.data[0]
        setFirstName(userinfo.firstName)
        setLastName(userinfo.lastName)
        setEmail(userinfo.email)
        setPhoneNumber(userinfo.tel)
        setCompony(userinfo.company)
        setDesignation(userinfo.Desi)
        setBio(userinfo.Bio)
        console.log(userinfo)
        })
    },[])
console.log(firstname)

    const updateClick = () => {
        var url = 'http://192.168.31.163:3000/updateUserInfo'
        var data = {firstName: firstname ,lastName: lastname,email: email, compony:compony,Desi: designation, Bio: bio,tel: phonenumber, 
            oldTel: userInfo.userInfo.tel
        }
        axios.post(url,data).then(res => {
            setAlert(true)
        })
    }

    const getback = () => {
        router.push('/')
    }
    return (
        <Box className={styles.root}>
            <Box>
            {alert ? 
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
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
          修改成功
        </Alert>
                :<></>}
            </Box>

            <h2>Account Settings</h2>
                <span >First Name</span><br/>
                <input type='text' 
                className={styles.input} 
                defaultValue={firstname}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                />

                <span className={styles.rightinputtitle}>Last Name</span>
                <input type='text' 
                className={styles.input} 
                defaultValue={lastname} 
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                /><br /><br/>

                <span>Email</span><br/>
                <input type='text'
                className={styles.input} 
                defaultValue={email} 
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                />

                <span className={styles.rightinputtitle}>Phone number</span>
                <input type='text' 
                className={styles.input} 
                defaultValue={phonenumber} 
                style={{ position: 'relative', right: '25px' }}
                onChange={(e) => {
                    setPhoneNumber(e.target.value);
                }}
                /><br /><br/>

                <span>Company</span><br/>
                <input type='text' 
                className={styles.input} 
                defaultValue={compony} 
                onChange={(e) => {
                    setCompony(e.target.value);
                }}
                />

                <span className={styles.rightinputtitle}>Designation</span>
                <input type='text' 
                className={styles.input} 
                defaultValue={designation}
                onChange={(e) => {
                    setDesignation(e.target.value);
                }}
                /><br /><br/>

                <span>Bio</span><br/>
                <textarea className={styles.textarea} 
                defaultValue={bio}
                onChange={(e) => {
                    setBio(e.target.value);
                }}
                ></textarea>

                <Box>
                <Button className={styles.page1_update} variant="contained" onClick={updateClick}>Update</Button>
                <Button className={styles.page1_cancel} onClick={getback}>Cancel</Button>
                </Box>
        </Box>
    )
}
