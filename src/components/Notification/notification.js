import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import './styles.scss'
import Footer from '../footer/footer'


export default function notification() {
    return (
        <Box className='notification-root'>
        <h2>Notification Settings</h2>
        <form>
        <input type='checkbox' className='notification-checkbox'/>
        <p style={{display:'inline'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, <br/>
        neque cupiditate quis</p>
        <br/><br/>
        <input type='checkbox' className='notification-checkbox'/>
        <p style={{display:'inline'}}>hic nesciunt repellat perferendis voluptatum totam porro eligendi.</p>
        <br/><br/>
        <input type='checkbox' className='notification-checkbox'/>
        <p style={{display:'inline'}}> commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit.</p>
        </form>
        <Footer />
    </Box>
    )
  }
