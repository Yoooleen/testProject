import React from "react";
import './index.css'
import Header from '../Header'
import Aside from "../Aside";
import Footer from '../Footer'
const MainPage = (props) => {

    return(
        <div className="mainPage">
            <p className="projectName">泡泡的办公系统</p>
            <Header/>
            <Aside/>
            <Footer/>
        </div>
    )
}

export default MainPage