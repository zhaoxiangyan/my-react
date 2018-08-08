import React,{Component} from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import RouterOne from './one.jsx';
import RouterTwo from './two.jsx';
import RouterThree from './three.jsx';


export default class Routerjs extends Component{
    render(){
      return(
            <div>
              <Route path={this.props.match.url} render={()=>(<h3>请选择一个react-router-dom内容</h3>)} />
              <ul>
                <li><Link to={this.props.match.url+'/one'}>One</Link></li>
                <li><Link to={this.props.match.url+'/two'}>Two</Link></li>
                <li><Link to={this.props.match.url+'/three'}>Three</Link></li>
              </ul>
              <Switch>
                <Route path={this.props.match.url+'/one'} component={RouterOne} />
                <Route path={this.props.match.url+'/two'} component={RouterTwo} />
                <Route path={this.props.match.url+'/three'} component={RouterThree}/>
              </Switch>
           </div>  
      )
    }
}