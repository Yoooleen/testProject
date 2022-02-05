
export const dispatchToProps = (dispatch) => {
    return {
      
      //获取用户名
      UserName(data){
        let action = {
          type:'userNameChange',
          value: data
        }
        dispatch(action)
      },
      
      //获取登录密码
      Password(data){
        let action = {
          type:'passwordChange',
          value: data
        }
        dispatch(action)
      },
      
      // 登录页的登录按钮事件
      submitBtn(data){
        let action = {
          type:'submit',
          value: data
        }
        dispatch(action)
      }
    };
  };