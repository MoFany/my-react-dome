# 			React学习笔记
## 项目创建
>#### 原生方式创建应用
>
>1. 使用原生方式创建react应用
>
>```shell
># 使用npm包运行器创建react应用
>npx create-react-app my-react-dome
>```
>
>2. 电脑上同时安装了npm与yarn两种包管理器
>
>```shell
># 指定使用npm构建项目
>npx create-react-app my-react-dome --use-npm
>
># 指定使用yarn构建项目
>npx create-react-app my-react-dome --use-yarn
>```
>
>```shell
># create-react-app创建的应用初始目录结构
>moz-todo-react
>├── README.md
>├── node_modules
>├── package.json
>├── package-lock.json
>├── .gitignore
>├── public
>│   ├── favicon.ico
>│   ├── index.html
>│   └── manifest.json
>└── src
>   ├── App.css
>   ├── App.js
>   ├── App.test.js
>   ├── index.css
>   ├── index.js
>   ├── logo.svg
>   └── serviceWorker.js
>```
>
>#### 其它方式创建应用
>
>1. 使用原生方式构建react项目模版
>
>``` shell
># 创建项目根目录
>mkdir react-demo
># 执行命令构建基础项目
>npm install react react-dom
>```
>
>2. 使用Next.js框架自动构建react项目模版 `这种方式类似于Vue-CLI脚手架工具`
>
>```shell
># 使用Next.js框架创建react应用
>npx create-next-app@latest
>```
>
>3. 使用npm安装
>
>```shell
># 安装CLI
>npm install create-next-app
>
># 初始化项
>npx create-next-app my-react-next-app
>```
>

# 第一个前端项目

>#### 删除不需要的文件
>
>```shell
># Move into the src directory of your project
>cd src
># Delete a few files
>rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
># Move back up to the root of the project
>cd ..
>```
>
>#### props组件传值
>
>1. index.js
>
>```react
>import React from 'react';
>import ReactDOM from 'react-dom/client';
>import './index.css';
>import App from './App';
>import reportWebVitals from './reportWebVitals';
>
>// 类似于组件挂载 
>const root = ReactDOM.createRoot(document.getElementById('root'));
>
>// render目标组件渲染
>root.render(
>  // 组件传值
>  <React.StrictMode>
>    <App subject='Clarce' other='test' />
>  </React.StrictMode>
>);
>
>reportWebVitals();
>```
>
>2. App.js
>
>```react
>import logo from './logo.svg';
>import './App.css';
>
>// 从index.js中将App组件的属性subject、other传递给props
>function App(props) { // 定义App根组件，react组件名遵循全大写规定，即：帕斯卡命名法
>  
>  const subject=props.subject;
>  const other=props.other;
>
>  /**
>  * {
>  *   "subject": "Clarce",
>  *   "other": "test"
>	* }
>  */
>  console.log(props);
>  console.log('subject='+subject); // subject=Clarce
>  console.log('other='+other);     // other=test
>  
>  return (
>    <div className="App">
>      <header className="App-header">
>        <img src={logo} className="App-logo" alt="logo" />
>        <p>Hello,{subject}!</p>
>      </header>
>    </div>
>  );
>}
>
>// 默认导出
>export default App;
>```
>
>3.创建一个components目录
>
>```shell
>mkdir src/components
>```
>
>
>
>

