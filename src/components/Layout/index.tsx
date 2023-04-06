import React from 'react';
import classes from './Layout.module.scss'
import Header from "../Header";
import Footer from "@/src/components/Footer";
import {ReactNode} from 'react'

interface Props{
    children?: ReactNode
}
//包含头尾组件的通用布局组件
const Layout: React.FC<Props> = ({children})=>{
    return (
        <div className={classes.root}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;