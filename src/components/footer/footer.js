import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import './styles.scss'

export default function footer() {
    return (
        <Box style={{margin:'2vw 0'}}>
            <Button className='update' variant="contained">Update</Button>
            <Button className='cancel'>Cancel</Button>
        </Box>
    )
}