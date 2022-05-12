import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from '../components/userComponent/Account/account';
import styles from './App.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Password from '../components/userComponent/password/password';
import Security from '../components/userComponent/security/security';
import Application from '../components/userComponent/application/application';
import Notification from '../components/userComponent/notification/notification';
import axios from 'axios'
import { get } from 'http';
import { useRouter } from 'next/router';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Header from '../components/LoginComponent/Header/header'
import Footer from '../components/LoginComponent/footer/footer'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(1);
  const [info , setInfo] = React.useState({info:null})
  const [alert , setAlert] = React.useState(false);
  const router = useRouter();
  console.log(props)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    var userInfo = []    
    React.useEffect(()=>{
        axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
            userInfo = res.data.data[0]
            setInfo(userInfo)
        })
    },[])
  return (
    <>
    <Header/>
    <Box className={styles.AppRoot}>
      <Box>
            {alert ? 
            <Alert 
            severity="success" 
            variant="filled"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , position:'absolute' ,zIndex:1000 ,width:'30%'}}
        >
          请先登录
        </Alert>
                :<></>}
            </Box>
    <h2 className={styles.App_h2}>Account Settings</h2>
    <Box
      className={styles.box}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={styles.root1}
      >
        <Box className={styles.app_box}>
            <img 
            src={'http://192.168.31.163:3000/'+info.imgurl}
            className={styles.app_img}/>
            <p style={{marginLeft:'150%',display:'flex',justifyContent: 'flex-end'}}>{info.firstName} {info.lastName}</p>
        </Box>
        <Tab icon={<HomeIcon />} label="Account" {...a11yProps(1)} className={styles.tab} />
        <Tab icon={<KeyIcon />} label="Password" {...a11yProps(2)} className={styles.tab}/>
        <Tab icon={<PersonIcon/>} label="Security" {...a11yProps(3)} className={styles.tab}/>
        <Tab icon={<PersonalVideoIcon />} label="Application" {...a11yProps(4)} className={styles.tab}/>
        <Tab icon={<NotificationsActiveIcon />}label="Notification" {...a11yProps(5)} className={styles.tab}/>
      </Tabs>
      <TabPanel value={value} index={1} className={styles.tabpanel}>
          <Account 
              userInfo = {info}
          /> 
      </TabPanel>
      <TabPanel value={value} index={2} className={styles.tabpanel}>
        <Password />
      </TabPanel>
      <TabPanel value={value} index={3} className={styles.tabpanel}>
        <Security 
        userInfo = {info}/>
      </TabPanel>
      <TabPanel value={value} index={4} className={styles.tabpanel}>
        <Application 
          userInfo = {info}
        />
      </TabPanel>
      <TabPanel value={value} index={5} className={styles.tabpanel}>
        <Notification 
          userInfo = {info}
        />
      </TabPanel>
    </Box>
    </Box>
    <Footer />
    </>
  );
}
