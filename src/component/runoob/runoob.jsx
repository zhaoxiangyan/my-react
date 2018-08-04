import React,{Component} from 'react';
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import './title.css';
import One from './one.jsx';
import Two from './two.jsx';
import Three from './three.jsx';
import Four from './four.jsx';
import Five from './five.jsx';
import Six from './six.jsx';
import Seven from './seven.jsx';
import Eight from './eight.jsx';
import Nine from './nine.jsx';
import Ten from './ten.jsx';
import Eleven from './eleven.jsx';
import Twelve from './twelve.jsx';

export default class Runoob extends Component{
    render(){
      return(
           <div>
              <Route path={this.props.match.url} render={()=>(<h3>请选择一个菜鸟教程内容</h3>)} />
              <ul>
                <li><Link to={this.props.match.url+'/one'}>One</Link></li>
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
              <Switch>
                <Route path='/runoob/one' component={()=>(<One name="Hello this name" ds={this.props.match.url} />)} />
                <Route path='/runoob/two' render={()=>(<Two name="父级组件name" ur="父级组件Url" nick="父级组件nickname" />)} />
                <Route path='/runoob/three' component={Three} />
                <Route path='/runoob/four' component={Four} />
                <Redirect to='/runoob/five' from='/runoob/four' />
                <Route path='/runoob/five' component={Five} />
                <Route path='/runoob/six' component={Six} />
                <Route path='/runoob/seven' component={Seven} />
                <Route path='/runoob/eight' component={Eight} />
                <Route path='/runoob/nine' component={Nine} />
                <Route path='/runoob/ten' render={()=>(<Ten api='/static/api/country_code.json'/>)} />
                <Route path='/runoob/eleven' component={Eleven} /  >
                <Route path='/runoob/twelve' component={Twelve} />
              </Switch>
           </div>   
      )
    }
  }