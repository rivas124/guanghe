import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import styles from './header.module.scss'

export default function ImgCarousel() {
    return (
      <Container className={styles.header} maxWidth='100%'>
        <h1 className={styles.companyName}>
          testtesttest
        </h1>

      </Container>
    )
  }
