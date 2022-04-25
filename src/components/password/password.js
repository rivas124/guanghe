import React, { Component } from 'react'
import { Box } from '@mui/material'
import './styles.scss'
import Footer from '../footer/footer'

export default function Password() {
    return (
        <Box className='pwd-root'>
            <h2>Password Settings</h2>
            <form>
                <h5>Old password</h5>
                <input type='text' className='pwd-input' />
                <h5>New password</h5>
                <input type='text' className='pwd-input' />
                <h5>Confirm new password</h5>
                <input type='text' className='pwd-input' />
            </form>
            <Footer />
        </Box>
    )
}