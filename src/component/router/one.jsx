import React,{Component} from 'react';
import {Link,Switch,Route} from 'react-router-dom';


// 基本
export default class RouterOne extends Component{
    render(){
        return(
            <div>
                <p className="title">One.js<b>不同url参数，动态参数路径</b></p>
                <Route path={this.props.match.url+'/:id'} component={RouterId}/>
                <ul>
                {/* 动态路由 */}
                <li><Link to={this.props.match.url+'/1'}>Router1</Link></li>
                <li><Link to={this.props.match.url+'/2'}>Router2</Link></li>
                <li><Link to={this.props.match.url+'/3'}>Router3</Link></li>
                </ul>
                <Switch>
                {/* 动态路由 */} 
                <Route path={this.props.match.url} render={()=>(<h3>点击不同url参数router</h3>)} />
                </Switch>
            </div>          
        )
    }
}
class RouterId extends Component{
    render(){
        return(
            <div>
               <p>Url路径：{this.props.match.url}<br/>UrlId:{this.props.match.params.id}</p>
            </div>
        )
    }
}