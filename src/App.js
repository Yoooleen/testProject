import { connect } from 'react-redux'
import React from 'react';
import LoginPage from './Login/index'
import MainPage from './MainPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { dispatchToProps } from './ActionAndHttp/action'
import { stateToProps } from './ActionAndHttp/GetDatas'
import SignUp from './SignUp';
import ForgetPassword from './ForgetPassword';

const MainComponents = (props) =>{
  return(
    <div className='content'>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<MainPage/>}/>
          <Route path = '/login' element = {<LoginPage/>}/>
          <Route path = '/signup' element = {<SignUp/>} />
          <Route path = '/forgerpassword' element = {<ForgetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default connect(stateToProps,dispatchToProps)(MainComponents);
