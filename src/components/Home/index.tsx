import React from 'react';
import classes from './Home.module.scss'
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import {ReactNode} from 'react'

interface Props{
    children?: ReactNode
}

const Home: React.FC<Props> = (props)=>{
    return (
        <div className={classes.root}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Home;