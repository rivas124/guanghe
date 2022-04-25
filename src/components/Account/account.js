import React, { Component, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useEffect } from 'react'
import './styles.scss'
import axios from 'axios'
export default function Account(){
    var userInfo = []
    useEffect(()=>{
        axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
            userInfo = res.data[0]
        })
    })
    return(
        <Box className='root'>
            <h2>Account Settings</h2>
            <h5>First Name</h5>
            <input type='text' className='input' placeholder={userInfo.firstName}/>
            <h5>Last Name</h5>
            <input type='text' className='input' />
            <h5>Email</h5>
            <input type='text' className='input' />
            <h5>Phone number</h5>
            <input type='text' className='input' />
            <h5>Company</h5>
            <input type='text' className='input' />
                <h5>Designation</h5>
            <input type='text' className='input' />
            <h5>Bio</h5>
            <textarea rows="10" cols="100" className='textarea'></textarea>
            <Box>
            <Button className='page1-update' variant="contained">Update</Button>
            <Button className='page1-cancel'>Cancel</Button>
        </Box>
        </Box>
    )
}
