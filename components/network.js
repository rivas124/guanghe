import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Image from "next/image";
import Router from "next/router";

class Network2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Box sx={{flexGrow: 1, width: '100%', height: '630px'}}>
                <Grid container spacing={2} >
                    <Grid xs={4.3}></Grid>
                    <Grid xs={4} p={18} style={{textAlign:'center'}}>
                        <Typography variant="h5" gutterBottom>
                            新闻动态
                        </Typography>
                        <Typography variant="body3">
                            NEWS
                        </Typography>
                        <Typography color={'#82b1ff'} variant="h4">
                             —
                        </Typography>
                    </Grid>
                    <Grid xs={3.7}></Grid>
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" rowSpacing={8}>
                        {this.props.newslist.map((newlist) => {
                            return (
                                <Grid key={newlist.id}>
                                    <Image src={'http://192.168.31.163:3000/'+newlist.img} width={460} height={200}></Image>
                                    <Typography variant="body1" gutterBottom>
                                            <a onClick={()=>{
                                                Router.push({
                                                    pathname:'/newsPage',
                                                    query:newlist
                                                }).then((res)=>{
                                                })
                                            }}>{newlist.title}</a>
                                        </Typography>
                                    <Typography color={'#979797'} variant="body2" gutterBottom>
                                        {newlist.body.substring(0,32)}...
                                    </Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Network2;