import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import './styles.scss'
import Footer from '../footer/footer'

export default function application() {
    return (
        <Box className='application-root'>
            <h2>Application Settings</h2>
            <form>
            <input type='checkbox' className='application-checkbox'/>
            <p style={{display:'inline'}}> App check</p>
            <br/>
            <input type='checkbox' className='application-checkbox'/>
            <p style={{display:'inline'}}> Lorem ipsum dolor sit.</p>
            </form>
            <Footer />
        </Box>
    )
}
