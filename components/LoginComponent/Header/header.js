import React from 'react'
import Box from '@material-ui/core/Box';
import styles from './header.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import loginImg1 from '../../../assets/images/login/LoginPage1.jpeg'
import loginImg2 from '../../../assets/images/login/LoginPage2.jpeg'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Header() {
    const [usercode, setUsercode] = React.useState('');
    const [userpwd, setUserpwd] = React.useState('');
    const [value, setValue] = React.useState('recents');
    const router = useRouter();
    const handleChange = () => {
        var url = "http://192.168.31.163:3000/login";
        var data = { "usercode": usercode, "userpwd": userpwd }
        axios.post(url, data,).then(res => {
            console.log(res);
            if(res.data.code === -1){
                alert('error');
            }else{
                router.push('/memberPage/memberPage');
            }
        })

    }
    return (
        <Box>
            <Box className={styles.root}>
                <p>沈阳广合科技发展有限公司</p>
            </Box>
            <Box className={styles.middle}>
                <Carousel autoPlay infiniteLoop>
                    <Image src={loginImg1} />
                    <Image src={loginImg2} />
                </Carousel>
                <Box className={styles.form}>
                    <h2>
                        欢迎登录
                        <br />
                        <br />
                        <TextField
                            label="请输入用户名..."
                            onChange={(event) => { setUsercode(event.target.value); }} maxLength={10}
                            variant="standard"
                            focused
                            required
                            multiline
                            variant="filled"
                            className={styles.textField}
                            color='info'
                        />
                        <br />
                        <br />
                        <TextField
                            label="请输入密码..."
                            onChange={(event) => { setUserpwd(event.target.value); }} maxLength={18}
                            variant="standard"
                            focused
                            required
                            multiline
                            variant="filled"
                            className={styles.textField}
                            color='info'
                        /><br />
                        {/* <label>账号:{usercode}密码:{userpwd}</label> */}
                        <br />
                        <br />
                        <ButtonGroup type="primary" className={styles.buttongroup}>
                            <Button
                                className={styles.button}
                                onClick={handleChange}
                            >登陆</Button>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup type="primary" className={styles.buttongroup}
                            style={{ width: '70%', backgroundColor: "#fff" }}>
                            <Button type="primary" className={styles.button} onClick={
                                function reg() { router.push('/register/register') }}>注册</Button>
                        </ButtonGroup>
                    </h2>
                </Box>
            </Box>
        </Box>
    )
}