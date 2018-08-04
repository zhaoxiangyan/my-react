import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';


// URL参数
export default class RouterTwo extends Component{
    render(){
        return(
            <div>
                <p className="title">Two.js<b>URL参数</b></p>
                <ul>
                    <li><Link to={this.props.match.url+'/netflix'}>Netflix</Link></li>
                    <li><Link to={this.props.match.url+'/zillow-group'}>Zillow Group</Link></li>
                    <li><Link to={this.props.match.url+'/yahoo'}>Yahoo</Link></li>
                    <li><Link to={this.props.match.url+'/modus-create'}>Modus Create</Link></li>
                </ul>
                <Route path={this.props.match.url+'/:id'} component={Child}/>
                <Route path={this.props.match.url+'/:direction?'} component={ComponentWithRegex}/>
                {/* 通配符 */}
                {/* <Route path="/hello/:name">
                // 匹配 /hello/michael
                // 匹配 /hello/ryan

                <Route path="/hello(/:name)">
                             /hello/:name?
                // 匹配 /hello
                // 匹配 /hello/michael
                // 匹配 /hello/ryan

                <Route path="/files/*.*">
                // 匹配 /files/hello.jpg
                // 匹配 /files/hello.html

                <Route path="/files/*">
                // 匹配 /files/ 
                // 匹配 /files/a
                // 匹配 /files/a/b*/}

                {/* It's possible to use regular expressions to control what param values should be matched.
                * "/order/asc"  - matched
                * "/order/desc" - matched
                * "/order/foo"  - not matched */}
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
                <h3>ID: {this.props.match.params.id}</h3>
            </div>
        )
    }
}
class ComponentWithRegex extends Component{
    render(){
        return(
            <div>
                <h3>Only asc/desc are allowed: {this.props.match.params.direction}</h3>
            </div>
        )
    }
}