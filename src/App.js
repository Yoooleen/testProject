import { connect } from 'react-redux'
import React from 'react';
import { dispatchToProps } from './ActionAndHttp/action';
import { stateToProps } from './ActionAndHttp/GetDatas';
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

export default connect(stateToProps, dispatchToProps)(TodoList);
