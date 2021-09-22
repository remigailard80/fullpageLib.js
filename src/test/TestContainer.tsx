import React from 'react'
import Container from '../components/Container'
import styles from '../components/container.module.scss'

const TestContainer = ({ children }) => {

    return (
        <Container>
            <div className={styles.section} style={{backgroundColor: 'red'}}>
                section1
            </div>
            <div className={styles.section} style={{backgroundColor: 'green'}}>
                section2
            </div>
            <div className={styles.section} style={{backgroundColor: 'purple'}}>
                section3
            </div>
        </Container>
    )
}

export default TestContainer