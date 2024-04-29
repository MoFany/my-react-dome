import React from "react";
import { useState } from "react";

function From(props) {

  console.log("From of props is:{}", props);

  // 使用状态钩子
  const [name, setName] = useState("");

  /**
   * 提交事件处理函数
   * */
  function handleSubmit(event) {
    event.preventDefault();
    // 将输入加入任务列表进行展示
    props.addTask(name);
    // 提交表单后清除输入
    setName("");
    // 对于空提交进行处理
  }

  /**
   * 输入事件处理函数
   */
  function handleChange(event) {
    console.log("handleChange event value is:{}", event.target.value);
    // 输入回显
    setName(event.target.value);
  }

  return (
    <form 
    onSubmit={handleSubmit} // form表单的submit事件
    >
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      {/* 上面的输入框输入的名字 */}
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}              // 值
        onChange={handleChange}   // onchange值改变时触发
      />

      {/* 按钮触发submit事件 */}
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default From;
