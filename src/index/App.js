import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch,Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import View from './tradingview.js'
import '../component/runoob/title.css';
import One from '../component/runoob/one';
import Two from '../component/runoob/two';
import Three from '../component/runoob/three';
import Four from '../component/runoob/four';
import Five from '../component/runoob/five';
import Six from '../component/runoob/six';
import Seven from '../component/runoob/seven';
import Eight from '../component/runoob/eight';
import Nine from '../component/runoob/nine';
import Ten from '../component/runoob/ten';
import Eleven from '../component/runoob/eleven';
import Twelve from '../component/runoob/twelve';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Zero}/>
        <ul>
          <li><NavLink to="/">首页</NavLink></li>
          <li><NavLink to="/runoob">菜鸟教程</NavLink></li>
          <li><NavLink to="/react">官方教程</NavLink></li>
        </ul>
        <Switch>
          <Route path="/runoob" component={Runoob} />
          <Route path="/runoob" component={One}/>
          <Route path="/react" component={Reactjs}/>
        </Switch>
        {/* <One name="Hello this name" />
        <Two name="父级组件name" ur="父级组件Url" nick="父级组件nickname" />
        <Three></Three>
        <Four></Four>
        <Five/>
        <Six/>
        <Seven/>
        <Eight/>
        <Nine/>
        <Ten api="/static/api/country_code.json"/>
        <Eleven/>
        <Twelve/> */}
      </div>
      </Router>
    );
  }
}
class Zero extends Component{
  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到菜鸟教程</h1>
          <h3>Date Time: {new Date().toLocaleTimeString()}</h3>
        </header>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
      </div>
    )
  }
}
class Runoob extends Component{
  render(){
    return(
         <div>
            <ul>
              <li><Link to='/runoob/one'>One</Link></li>
              <li><Link to='/runoob/two'>Two</Link></li>
              <li><Link to='/runoob/three'>Three</Link></li>
              <li><Link to='/runoob/four'>Four</Link></li>
              <li><Link to='/runoob/five'>Five</Link></li>
              <li><Link to='/runoob/six'>Six</Link></li>
              <li><Link to='/runoob/seven'>Seven</Link></li>
              <li><Link to='/runoob/eight'>Eight</Link></li>
              <li><Link to='/runoob/nine'>Nine</Link></li>
              <li><Link to='/runoob/ten'>Ten</Link></li>
              <li><Link to='/runoob/eleven'>Eleven</Link></li>
              <li><Link to='/runoob/twelve'>Twelve</Link></li>
            </ul>
            <Route path='/runoob/one' component={One} />
            <Route path='/runoob/two' component={Two} />
            <Route path='/runoob/three' component={Three} />
            <Route path='/runoob/four' component={Four} />
            <Route path='/runoob/five' component={Five} />
            <Route path='/runoob/six' component={Six} />
            <Route path='/runoob/seven' component={Seven} />
            <Route path='/runoob/eight' component={Eight} />
            <Route path='/runoob/nine' component={Nine} />
            <Route path='/runoob/ten' render={()=>(<Ten api='/static/api/country_code.json'/>)} />
            <Route path='/runoob/eleven' component={Eleven} /  >
            <Route path='/runoob/twelve' component={Twelve} />
            <Switch>
             <Route exact path='/runoob' render={()=>(<h3>请选择一个教程内容</h3>)} />
             <Redirect to='/new/login' from='/runoob/two' />
            </Switch>
         </div>    
    )
  }
}
class Reactjs extends Component{
  render(){
    return(
      <div>df</div>
    )
  }
}


export default App;
