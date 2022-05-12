import React, { Component } from 'react'
import Box from '@mui/material/Box';
import styles from './styles.module.scss'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from "@mui/material/Typography";

export default function TeamComponent() {

    return (
        <Box className={styles.root}>
            <Box className={styles.fontBox}>
                <Typography className={styles.teamTitle}>成员</Typography>
                <Typography className={styles.teamText}>我们的团队</Typography>
                <Typography color={'#82b1ff'} variant="h4">—</Typography>
            </Box>
            <ImageList sx={{ width: 1220, height: 300, margin: '0 auto' }} cols={4} rowHeight={270}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} className={styles.imageListItem}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            style={{height:'10rem'}}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            className={styles.imageListItemBar}
                        />
                    </ImageListItem>
                ))}
            </ImageList>


        </Box>
    )

}

const itemData = [
    {
        img: 'https://wx1.sinaimg.cn/mw2000/006csUHZly1h1m25vf3poj31o0280b29.jpg',
        title: 'kkkk',
        author: '高级开发工程师'
    },
    {
        img: 'https://wx1.sinaimg.cn/mw2000/005ZytbTly1h01ggj82isj323u34n7wi.jpg',
        title: 'hua',
        author: '高级开发工程师'
    },
    {
        img: 'https://wx4.sinaimg.cn/mw2000/005ZytbTly1gyk4ugbvwhj30u011rdll.jpg',
        title: 'tutu',
        author: '高级开发工程师'
    },
    {
        img: 'https://wx1.sinaimg.cn/mw2000/005ZytbTly1gywy7z7vrij31ug1uhu0y.jpg',
        title: 'deng',
        author: '高级开发工程师'
    },
];
