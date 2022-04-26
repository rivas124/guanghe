import React, { Component, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useEffect } from 'react'
import './styles.scss'
import axios from 'axios'
import { compose } from '@mui/system'
export default function Account(
    userInfo
) {
    //   const [info , setInfo] = React.useState(null)
    //     var userInfo = []    
    //         axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
    //             userInfo = res.data.data[0]
    //             console.log(userInfo)
    //             setInfo(userInfo)
    //         })
    //             console.log(info)
    return (
        <Box className='root'>
            <h2>Account Settings</h2>
                <span>First Name</span><br/>
                <input type='text' className='input' defaultValue={userInfo.userInfo.firstName} />

                <span style={{position:'relative',bottom:'30px',left:'70px'}}>Last Name</span>
                <input type='text' className='input' defaultValue={userInfo.userInfo.lastName} /><br/><br/>

                <span>Email</span><br/>
                <input type='text' className='input' defaultValue={userInfo.userInfo.email} />

                <span style={{position:'relative',bottom:'30px',left:'70px'}}>Phone number</span>
                <input type='text' className='input' defaultValue={userInfo.userInfo.tel}  style={{position:'relative',right:'25px'}}/><br/><br/>

                <span>Company</span><br/>
                <input type='text' className='input' defaultValue={userInfo.userInfo.company} />

                <span style={{position:'relative',bottom:'30px',left:'70px'}}>Designation</span>
                <input type='text' className='input' defaultValue={userInfo.userInfo.Desi}/><br/><br/>

                <span>Bio</span><br/>
                <textarea rows="5" cols="60" className='textarea' defaultValue={userInfo.userInfo.Bio}></textarea>

                <Box>
                <Button className='page1-update' variant="contained">Update</Button>
                <Button className='page1-cancel'>Cancel</Button>
                </Box>
        </Box>
    )
}
