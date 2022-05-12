import { withRouter} from 'next/router'
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import React from 'react';
import Header from '../components/LoginComponent/Header/header'
import Footer from '../components/LoginComponent/footer/footer'

const newsPage= ({router})=>{
    let arr = router.query
    const [info , setInfo] = React.useState('')
    React.useEffect(() => {
        setInfo(arr)
    })

    var today = new Date(),
        date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return (
        <>
        <Header />
        <Box
            sx={{
                width:'80%',
                textAlign:'center',
                margin:'1% auto'
            }}
        >
            <Box 
                sx={{
                    marginTop:'3%',
                    marginBottom:'5%'
                }}
            >
                <h2>{info.title}</h2>
                <h6>{date}</h6>
            </Box>
            <Image src={'http://192.168.31.163:3000/'+arr.img} width={800} height={200}></Image>
            <Box
                sx={{
                    width:'80%',
                    margin:'0 auto'
                }}
            >
                <h4>{info.body}</h4>
            </Box>

        </Box>
        <Footer />
        </>
    )
}
export default withRouter(newsPage)