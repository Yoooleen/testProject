//静态数据
export const stateToProps = (state) => { 
    return {
      //登录页面用到的数据
      userName: state.userName,
      passwords: state.passwords,

      //header模块数据
      time: state.time,
      mainName: state.mainName
    };
  };
  