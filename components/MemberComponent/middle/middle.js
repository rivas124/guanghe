import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './middle.module.scss'

export default function Middle() {
    return (
        <Card className={styles.textCard}>
            <CardContent className={styles.introduceCard}>
                <h2>Our Team</h2>
                <p> The production team is not only at the forefront of
                    the industry technically,but we pay more attention to
                    the clear and accurate expression of customers' products.
                    Most of us are from science, and we have done research
                    in various disciplines such as machinery, games, electronics,
                    physics, etc. We can easily understand customers' ideas,
                    so we can better express customers' intentions.</p>
            </CardContent>
        </Card>
    )
}