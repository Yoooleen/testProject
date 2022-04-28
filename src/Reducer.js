const defaultState ={

    // 登录页面数据
    userName:'', // 登录页用户名
    passwords:'', // 登录页用户密码

    //header模块数据
    time: new Date().toLocaleTimeString(), // header模块展示的时间
    mainName: 'Yooleen', // header模块展示的用户名字
}

export default (state = defaultState, action) => {
    switch(action.type){
        
        // 获取用户名
        case 'userNameChange':
            let userNameChange = JSON.parse(JSON.stringify(state))
            userNameChange.userName = action.value
            return userNameChange
        
        // 获取密码
        case 'passwordChange':
            let passwordChange = JSON.parse(JSON.stringify(state))
            passwordChange.password = action.value
            return passwordChange
        
        // 登录按钮点击事件
        case 'submit':
            let userName = action.value.userName;
            let password = action.value.password;
            if(userName === 'admin' || password === 'admin'){
                action.value.navigate('/')
            } else {
                console.log('userName or password is wrong!')
                alert('账号或密码错误，请重新输入！')
            }
            return state
        default: return state

    }
}
