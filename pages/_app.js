
import React from 'react';
import '../assets/stylesheet/custom.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({Component,pageProps}){
    return <Component {...pageProps} />
}