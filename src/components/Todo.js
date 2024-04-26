import React from "react";

function Todo(props){

    console.log(props)

    //组件必须返回一些需要渲染的东西，不返回东西浏览器将会报错
    return(
        <li className="todo stack-small">
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.completed} />
            <label className="todo-label" htmlFor="todo-0">
                {props.name}
            </label>
          </div>

          <div className="btn-group">
            <button type="button" className="btn">
              Edit 
              <span className="visually-hidden">
                {props.name}
            </span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete 
              <span className="visually-hidden">
                {props.name}
            </span>
            </button>
          </div>
        </li>
    );
}

export default Todo;