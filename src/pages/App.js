import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from '../components/Account/account';
import './App.css'
import HomeIcon from '@mui/icons-material/Home';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user2 from './image/user2.jpeg'
import Password from '../components/password/password';
import Security from '../components/Security/security';
import Application from '../components/Application/application';
import Notification from '../components/Notification/notification';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className='box'
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className='root1'
      >
        <Box style={{width:'20%',height:150}}>
            <img src={user2} style={{width:'120%',
            marginTop:'50%',marginLeft:'200%',borderRadius:'50%'
            }}/>
            <p style={{marginLeft:'150%'}}>Kiran Acharya</p>
        </Box>
        <Tab icon={<HomeIcon />} label="Account" {...a11yProps(0)} className='tab' />
        <Tab icon={<KeyIcon />} label="Password" {...a11yProps(1)} className='tab'/>
        <Tab icon={<PersonIcon/>} label="Security" {...a11yProps(2)} className='tab'/>
        <Tab icon={<PersonalVideoIcon />} label="Application" {...a11yProps(3)} className='tab'/>
        <Tab icon={<NotificationsActiveIcon />}label="Notification" {...a11yProps(4)} className='tab'/>
      </Tabs>
      <TabPanel value={value} index={1}>
        <Account></Account>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Password />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Security />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Application />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Notification />
      </TabPanel>
    </Box>
  );
}
