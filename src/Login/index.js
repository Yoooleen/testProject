import { connect } from 'react-redux'
import './index.css'
import { dispatchToProps } from '../ActionAndHttp/action'
import { stateToProps } from '../ActionAndHttp/GetDatas'
import { Link, useNavigate } from 'react-router-dom'
const LoginPage = (props) => {

    let {password, userName } = props;  //get datas
    let {UserName, Password, submitBtn} = props  //get function
    const navigate = useNavigate()
    return(
        <div className="outbody">
            <div className="contentzone">
                <div className="inputName">
                    <p className='userName'>账号：</p>
                    <input type="text" placeholder='请输入您的登录账号' className='name' onChange={e=>{UserName(e.target.value)}}/>
                </div>
                <div className="inputPassword">
                    <p className='userPassword'>密码：</p>
                    <input type="passWord" placeholder='请输入您的登录密码' className='password' onChange={ e => {Password(e.target.value)}}/>
                </div>
                <div className="buttons">
                    <button className='loginbtn' onClick={ () => {submitBtn({userName: userName, password: password, navigate: navigate})}}>登录</button>
                    <button className='canclebtn'>取消</button>
                </div>
                <div className="forgetPassword">
                    <Link to='/signUp' className='signin'>注册新账号</Link>
                    <Link to='/forgetPassword' className='noPassword'>忘记密码</Link>
                </div>
            </div>
        </div>
    )
}
export default connect(stateToProps,dispatchToProps)(LoginPage);