const defaultState ={
    inputValue:'Hearling',
    list:[],
    userName:'',
    passwords:''
}

export default (state = defaultState, action) => {
    switch(action.type){
        case 'change_input':
            let changeValue = JSON.parse(JSON.stringify(state))
            changeValue.inputValue = action.value
            return changeValue

        case 'add_item':
            let addItem = JSON.parse(JSON.stringify(state))
            addItem.list.push(addItem.inputValue)
            addItem.inputValue=''
            return addItem

        case 'delete_item':
            let deleteItem = JSON.parse(JSON.stringify(state))
            deleteItem.list.splice(action.index,1)
            deleteItem.inputValue=''
            return deleteItem
        
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
