import React from "react";
import { useState } from "react"; // 修改属性状态值的函数
import { nanoid } from "nanoid"; //创建随机id的库
import Todo from "./components/Todo";
import From from "./components/From";
import FilterButton from "./components/FilterButton";

function App(props) {
  console.log("App of props is:{}", props);

  // 定义修改props属性的状态（组件自身无法创建或修改props的属性）
  const [tasks, setTasks] = useState(props.tasks);

  // 过滤器
  const [filter, setFilter] = useState("All");
  // 过滤器映射集
  const FILTER_MAP = {
    // All操作
    All: () => true,
    // Active操作
    Active: (task) => !task.completed,
    // Completed操作
    Completed: (task) => task.completed,
  };
  // 过滤器名称集
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  // filter组件集
  const fliterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  // 映射组件实体
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted} // 组件绑定触发动作
      deleteTask={deleteTask} // 组件绑定删除动作
      editTask={editTask} // 组件绑定编辑动作
    />
  ));

  // 任务title
  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  // 列表任务数
  const headingText = `${taskList.length} ${taskNoun} tasks remaining`;

  /**
   * 添加任务函数
   * @param {任务名称} name
   */
  function addTask(name) {
    console.log("Should add task is:{}", name);
    // 需要新添加的任务对象
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    // 设置新状态
    setTasks([...tasks, newTask]);
  }

  /**
   * 触发器
   * @param {任务id} id
   */
  function toggleTaskCompleted(id) {
    console.log("toggleTaskCompleted task[0]:{}", tasks[0]);
    const updateTasks = tasks.map((task) => {
      if (id === task.id) {
        // id匹配则返回以对象扩展语法创建的改变属性值的新对象
        return { ...task, completed: !task.completed };
      }
      // id不匹配返回原始对象
      return task;
    });
    // 更新状态
    setTasks(updateTasks);
  }

  /**
   * 删除任务函数
   * @param {需要删除的任务id} id
   */
  function deleteTask(id) {
    console.log("should delete task is:{}", id);
    // 过滤排除id相同的任务,以实现任务删除操作
    const remainingTask = tasks.filter((task) => task.id !== id);
    // 更新状态
    setTasks(remainingTask);
  }

  /**
   * 编辑任务
   * @param {任务id} id
   * @param {新任务名称} newTaskName
   */
  function editTask(id, newTaskName) {
    console.log("Should edit task id:{}", id);
    console.log("New task name is:{}", newTaskName);
    const newTaskList = tasks.map((task) => {
      if (id === task.id) {
        // ...表示省略前面元素,替换指定元素值
        return { ...task, name: newTaskName };
      }
      return task;
    });
    // 更新任务状态状态
    setTasks(newTaskList);
  }

  // 返回组件内容
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      {/* from表单的作用范围 */}
      <From
        addTask={addTask} // 组件的添加事件
      />

      <div className="filters btn-group stack-exception">{fliterList}</div>
      <h2 id="list-heading">{headingText}</h2>

      {/* 代办任务无序列表 */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

// 默认导出
export default App;
