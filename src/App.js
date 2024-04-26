import React from "react";
import Todo from "./components/Todo";
import From from "./components/From";
import FilterButton from "./components/FilterButton";

function App(props) {
  
  // 映射组件实体
  const taskList=props.tasks.map((task)=>(
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} />
  ));
  console.log(props.tasks)

  // 返回组件内容
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <From/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="All"/>
        <FilterButton name="Active"/>
        <FilterButton name="Completed"/>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}


// 默认导出
export default App;
