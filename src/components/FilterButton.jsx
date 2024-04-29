import React from "react";

// 定义FilterButton组件
function FilterButton(props) {
  console.log("FilterButton props is:{}", props);

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}   // 按钮绑定Click事件
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
