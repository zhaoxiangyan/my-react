import React,{Component} from 'react';
import {Link,Route,withRouter,Redirect} from 'react-router-dom';


// 重定向(验证)
export default class Three extends Component{
    render(){
        return(
            <div>
                <p className="title">Three.js<b>重定向(Auth)</b></p>
                <AuthButton/>
                <ul>
                    <li><Link to={this.props.match.url+'/public'}>公共页面</Link></li>
                    <li><Link to={this.props.match.url+'/protected'}>受保护页面</Link></li>
                </ul>
                <Route path={this.props.match.url+'/public'} render={()=><h3>公共内容</h3>}/>
                <Route path={this.props.match.url+'/login'} component={Login}/>
                <PrivateRoute path={this.props.match.url+'/protected'} component={Protected}/>
            </div>
        )
    }
}

const fakeAuth = {
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb,100);  //fake async
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb,100);
    }
}

const AuthButton = withRouter(({history})=>{fakeAuth.isAuthenticated ? ( 
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>未登录</p>
  )})


const Protected = () => <h3>受保护内容</h3>
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? ( <Component {...props} />) : (<Redirect to={{pathname: "/router/three/login", state: { from: props.location}}}/>)
        }
    />
);


class Login extends Component {
    state = {
        redirectToReferrer: false
    };
    login = () => {
        fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
        });
    };
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        return (
            <div>
                <p>你必须登录才能查看 {from.pathname}页面</p>
                <button onClick={this.login}>登录</button>
            </div>
        );
    }
}