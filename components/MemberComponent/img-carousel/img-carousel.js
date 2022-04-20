import imageOne from '../../../assets/images/profile1.jpeg'
import imageThree from '../../../assets/images/profile2.jpeg'
import Image from 'next/image'
import styles from './carousel.module.scss'
import Box from '@material-ui/core/Box';

import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  return (
    <Box>
      <OwlCarousel loop touchDrag>
        <Box>
          <Box className={styles.item}>
            <Image src={imageOne} width='500px' height='400px' />
          </Box>
        </Box>
        <Box className={styles.item}>
          <Image src={imageThree} width='500px' height='400px' />
        </Box>
        <Box className={styles.item}>
          <Image src={imageOne} width='500px' height='400px' />
        </Box>
        <Box className={styles.item}>
          <Image src={imageThree} width='500px' height='400px' />
        </Box>
      </OwlCarousel>
    </Box>
  );
}
