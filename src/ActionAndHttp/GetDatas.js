//静态数据
export const stateToProps = (state) => { 
    return {
      inputValue: state.inputValue,
      list: state.list,
    };
  };
  