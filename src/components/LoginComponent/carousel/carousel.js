import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import styles from './carousel.module.scss'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'
import { Carousel as ImgCarousel } from 'react-responsive-carousel';
import loginImg2 from '../../../assets/images/login/LoginPage2.jpeg'
import loginImg1 from '../../../assets/images/login/LoginPage1.jpeg'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Carousel() {
    const [usercode, setUsercode] = React.useState('');
    const [userpwd, setUserpwd] = React.useState('');
    const [value, setValue] = React.useState('recents');
    const router = useRouter();
    const handleClick = () => {
        if (usercode === '') {
            // alert('用户名不能为空')
            document.getElementById('hid').style.display = 'block'
        } else if (userpwd === '') {
            // alert('密码不能为空')
            document.getElementById('pwdhid').style.display = 'block'
        }else{
            var url = "http://192.168.31.163:3000/login";
            var data = { "usercode": usercode, "userpwd": userpwd }
            axios.post(url, data,).then(res => {
                console.log(res);
                if (res.data.code === -1) {
                    alert('用户名或密码错误');

                } else {
                    router.push('/');
                }
            })
        }
    }
    return (
        <Box>
            <Box className={styles.middle}>
                <ImgCarousel autoPlay infiniteLoop
                    width='100%'
                >
                    <Image src={loginImg1} />
                    <Image src={loginImg2} />
                </ImgCarousel>
            </Box>

            <Box className={styles.form}>
                <h2>
                    欢迎登录
                </h2>
                <br />
                <br />
                <p> 用户名:</p>
                <input
                    placeholder="请输入用户名..."
                    onChange={(event) => {
                        setUsercode(event.target.value);
                    }}
                    maxLength={10}
                    required
                    className={styles.textField}
                />
                <span id='hid' style={{ display: 'none', color: 'red' }}>此输入框不能为空</span>
                <span id='hid1' style={{ display: 'none', color: 'red' }}>✔</span>
                <br />
                <p>密码:</p>
                <input
                    placeholder="请输入密码..."
                    onChange={(event) => { setUserpwd(event.target.value); }} maxLength={18}
                    required
                    className={styles.textField}
                    type='password'
                />                
                <span id='pwdhid' style={{ display: 'none', color: 'red' }}>此输入框不能为空</span>
                <span id='pwdhid1' style={{ display: 'none', color: 'red' }}>✔</span>
                <br />
                <br />
                <ButtonGroup type="primary" className={styles.buttongroup}>
                    <Button
                        className={styles.button}
                        onClick={handleClick}
                    >登陆
                    </Button>
                </ButtonGroup>
                <br />
                <Link href='/register'>
                    <a className={styles.link}>注册账户</a>
                </Link>
            </Box>
        </Box>
    )
}
