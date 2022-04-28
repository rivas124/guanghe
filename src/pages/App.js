import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from '../components/Account/account';
import styles from './App.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Password from '../components/password/password';
import Security from '../components/Security/security';
import Application from '../components/Application/application';
import Notification from '../components/Notification/notification';
import axios from 'axios'

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

export default function VerticalTabs() {
  
  const [value, setValue] = React.useState(1);
  const [info , setInfo] = React.useState({info:null})

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    var userInfo = []    
    React.useEffect(()=>{
        axios.get('http://192.168.31.163:3000/getUserInfo?tel='+919876543215).then((res) => {
            userInfo = res.data.data[0]
            console.log(userInfo)
            setInfo(userInfo)
        })
    },[])
    console.log(info)
  return (
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
        <Security />
      </TabPanel>
      <TabPanel value={value} index={4} className={styles.tabpanel}>
        <Application />
      </TabPanel>
      <TabPanel value={value} index={5} className={styles.tabpanel}>
        <Notification />
      </TabPanel>
    </Box>
  );
}
