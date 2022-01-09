import { connect } from 'react-redux'
import React from 'react';
const TodoList = (props) => {
  let { inputValue,list,inputChange,clickBtn,deletItem} = props;
  return (
    <div className='content'>
      <div className='todoListDiv'>
        <div className='inputDiv'>
           <input value={inputValue} onChange={inputChange} />
           <button onClick={clickBtn}></button> 
        </div>
        <div className='listDiv'>
          <ul>
            {list.map((item, index) => {
              return <li key={index} onClick={()=>{deletItem(index)}}>
                {item}
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

//静态数据
const stateToProps = (state) => { 
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

//方法
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: "change_input",
        value: e.target.value,
      };
      dispatch(action);
    },
    clickBtn() {
      let action = {
        type: "add_item",
      };
      dispatch(action);
    },
    deletItem(idx) {
      let action = {
        type: "delete_item",
        index: idx
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
