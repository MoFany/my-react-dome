import React from "react";

// 定义FilterButton组件
function FilterButton(props){

    return(
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    );
}

export default FilterButton;