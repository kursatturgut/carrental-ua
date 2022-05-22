import React from 'react'
import { Spinner } from 'react-bootstrap'
import logo from '../../../assets/img/logo/logo.png';
import "./loading.css";

export const Loading = () => {
    return (
        <div className="loading-page">
            <Spinner animation="border"></Spinner>
            <img src={logo}/>
            
            
            
    </div>
      )
}
