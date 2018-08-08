import React, { Component } from 'react';
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


import Runoob from '../component/runoob/runoob.jsx';
import Reactjs from '../component/react/reactjs.jsx';
import Routerjs from '../component/router/routerjs.jsx';


export default class App extends Component {
  render() {
    return (
      // 没必要每次用到react-router-dom就包一层Router，只要保证最外层有一个Router就行了。
      <BrowserRouter>
      <div className="App">
      {/* exact用于精准匹配路径，不用exact也会匹配到匹配的路径的子路径，这样两个路由组件都会显示。我们需要的是每次切换只会显示一个Route中指定的组件 */}
        <Route path="/" component={Zero}/>
        <ul>
          <li><NavLink to="/">首页</NavLink></li>
          <li><NavLink to="/runoob">菜鸟教程</NavLink></li>
          <li><NavLink to="/router">React-router:</NavLink></li>
          {/* https://reacttraining.com/react-router/web/example/url-params */}
          <li><NavLink to="/react">官方教程</NavLink></li>
        </ul>
        <Switch>
          <Route path="/runoob" component={Runoob} />
          <Route path="/runoob" component={Zero}/>
        </Switch>
        <Route path="/router" component={Routerjs}/>
        <Route path="/react" component={Reactjs}/>
      </div>
      </BrowserRouter>
    );
  }
}
class Zero extends Component{
  constructor(){
    super();
    this.state = {
      time:new Date()
    }
  }
  componentDidMount(){
     this.timer = setInterval(()=>this.setState({time:new Date()}),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到菜鸟教程</h1>
          <h3>Date Time: {this.state.time.toLocaleTimeString()}</h3>
        </header>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
      </div>
    )
  }
}




