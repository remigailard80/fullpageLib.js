import React, { useEffect, useRef } from "react";
import styles from './container.module.scss'
import scrollHandler from '../scripts/scroll';

function Container({ children }) {
    const main = useRef();

    useEffect(() => {
        const sections = main.current.childNodes;
        scrollHandler(sections);
    }, [])
    return (
        <>
            <div id={styles.fullpage} ref={main}>
                {children}
            </div>
        </>
    );
};

export default Container;
