import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import securitycon1 from '../../../assets/images/securitycon1.png'
import securitycon2 from '../../../assets/images/securitycon2.png'
import securitycon3 from '../../../assets/images/securitycon3.png'
import Image from 'next/image'
import styles from './security.module.scss'

export default function SecurityModule() {
    return (
        <Box className={styles.security_box}>
            <List className={styles.security_list}>
                <ListItem className={styles.security_item}>
                    <a href=''>
                        <Image src={securitycon1} className={styles.securityicon} />
                        <Box className={styles.security_explain_box} style={{position:'relative',bottom:'10px'}}>
                            <p className={styles.security_explain_title} >Network security</p><br />
                            <p className={styles.security_explain_content} >Carrier industry</p>
                        </Box>
                    </a>
                </ListItem>
                <ListItem className={styles.security_item}>
                    <a href=''>
                        <Image src={securitycon2} className={styles.securityicon} />
                        <Box className={styles.security_explain_box} >
                            <p className={styles.security_explain_title} >security service</p><br />
                            <p className={styles.security_explain_content} >Customer oriented</p>
                        </Box>
                    </a>
                </ListItem>
                <ListItem className={styles.security_item}>
                    <a href=''>
                        <Image src={securitycon3} className={styles.securityicon} />
                        <Box className={styles.security_explain_box} >
                            <p className={styles.security_explain_title} >urban safety</p><br />
                            <p className={styles.security_explain_content} >Safety oriented production</p>
                        </Box>
                    </a>
                </ListItem>
            </List>
        </Box>
    )
}
