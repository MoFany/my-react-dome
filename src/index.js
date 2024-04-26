import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Data=[
  {id:"todo-0",name:"Eat",completed:true},
  {id:"todo-1",name:"Sleep",completed:false},
  {id:"todo-2",name:"Repeat",completed:false}
];

// 类似于组件挂载 
const root = ReactDOM.createRoot(document.getElementById('root'));
// render目标组件渲染
root.render(
  // 组件传值
  <React.StrictMode>
    <App tasks={Data} />
  </React.StrictMode>
);

reportWebVitals();
