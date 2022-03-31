//静态数据
export const stateToProps = (state) => { 
    return {
      inputValue: state.inputValue,
      list: state.list,
      userName: state.userName,
      passwords: state.passwords,
      time: state.time,
    };
  };
  