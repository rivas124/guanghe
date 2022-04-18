import React from 'react'
import './styles.scss'
import Container from '@material-ui/core/Container';
import Logo from '../../../assets/images/logo.png'
import './styles.scss'
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@material-ui/core/Box';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import flashviewone from '../../../assets/images/flashview1.jpeg'
import flashviewtwo from '../../../assets/images/flashview3.jpeg'
import { indigo } from '@material-ui/core/colors';


export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box className='header' maxWidth='100%'>
            <Box className='header-navigation'>
                <img src={Logo} className='company-logo' />
                <Box className='user-management'>
                    <PersonIcon className='profile-icon' sx={{ fontSize: 30 }} 
                       style={{ color: indigo[50] }}
                    />
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="dropdown-button" color='inherit'>
                        <ArrowDropDownIcon sx={{ fontSize: 30 }} />
                    </Button>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <a href=''>homepage</a>
                <a href=''>product</a>
                <a href=''>service</a>
                <a href=''>team</a>
                <a href=''>about</a>
            </Box>
            <Box className='carousel-box'>
            <Carousel
                    plugins={[
                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000,
                            }
                        },
                    ]}
                    animationSpeed={5000}
                    className='page-carousel'
                >
                    <img src={flashviewone} />
                    <img src={flashviewtwo} />
                </Carousel>
                </Box>
        </Box>
    )
}
