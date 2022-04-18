import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../assets/images/aaaa.jpeg'
import imageThree from '../../assets/images/b.jpeg'
import './styles.scss'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useHistory}  from 'react-router-dom';

export default function ImgCarousel() {
  const history = useHistory();
  return (
    <Carousel
      plugins={[
        'infinite',
        'arrows',
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 3.9,
          }
        },
      ]}
      className='picture-Carousel'>
      <Box className='picture-box'>
        <Grid item xs className='picture-grid'>
            <img src={imageOne} 
            // onClick={() => {
            //   history.push('/')
            // }}
            />
            <Paper className="paper">
              <p className='introduce'>
                <h3 >AKA kaikai</h3><br />
                city from dbc
              </p>
            </Paper>
        </Grid>
      </Box>
      <Box className='picture-box'>
        <Grid item xs className='picture-grid'>
          <img src={imageThree} />
          <Paper className="paper">
            <p className='introduce'>
              <h3>AKA kaikai</h3><br />
              city from dbc
            </p>
          </Paper>
        </Grid>
      </Box>

    </Carousel>
  )
}

