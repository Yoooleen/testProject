import React from "react";
import { connect } from 'react-redux'
import './index.css'
import Header from '../Header'
import Aside from "../Aside";
import Footer from '../Footer'
import MainPageContent from '../MainPageContent'
import { dispatchToProps } from '../ActionAndHttp/action'
import { stateToProps } from '../ActionAndHttp/GetDatas'
const MainPage = (props) => {
    return(
        <div className="mainPage">
            <p className="projectName">泡泡的办公系统</p>
            <Header time={props}/>
            <div className="NavAndContent">
                <Aside/>
                <MainPageContent />
            </div>
            <Footer/>
        </div>
    )
}

export default connect(stateToProps,dispatchToProps)( MainPage)