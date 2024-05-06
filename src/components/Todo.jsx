import React from "react";
import { useEffect, useRef, useState } from "react";

function Todo(props) {
  console.log("Todo props is:{}", props);

  // 控制是否要编辑的状态：true进入编辑状态，false取消编辑状态
  const [isEditing, setEditing] = useState(false);

  // 控制名字的状态
  const [newName, setNewName] = useState("");
  /**
   * 更新事件处理器
   * @param {事件} event
   */
  function handleChange(event) {
    // 设置名字
    setNewName(event.target.value);
  }
  /**
   * 提交事件处理器
   * @param {事件} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    // 更新任务
    props.editTask(props.id, newName);
    // 清除提交
    setNewName("");
    // 退出编辑
    setEditing(false);
  }

  // 指定引用初始值为null
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  /**
   * 函数式焦点管理
   * @param {焦点状态} value
   * @returns
   */
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const wasEditing = usePrevious(isEditing);
  // 焦点管理
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    } else if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  // 编辑模版
  const editingTemplate = (
    // form表单
    <form
      className="stack-small"
      onSubmit={handleSubmit} // 事件绑定
    >
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        {/* 需要需要更新的代办列表项名 */}
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName} // 属性绑定（单向）
          onChange={handleChange} // 值改变后需要触发的事件
          ref={editFieldRef} // 编辑模版指定默认值
        />
      </div>

      <div className="btn-group">
        {/* 取消 */}
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)} // 修改状态为：取消编辑状态
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>

        {/* 保存并提交触发submit事件 */}
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  // 视图模版
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)} // 触发更新事件
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        {/* 编辑 */}
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)} // 更新状态：进入编辑状态
          ref={editButtonRef} // 编辑按钮引用初始化
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>

        {/* 删除 */}
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)} // 删除事件
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  //组件必须返回一些需要渲染的东西，不返回东西浏览器将会报错
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
