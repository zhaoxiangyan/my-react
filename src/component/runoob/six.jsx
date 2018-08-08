import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';

// React条件渲染
export default class Six extends Component{
    constructor(){
        super();
        this.state = {
            loginStatus:false
        }
    }
    switch = ()=>{
        this.setState({loginStatus:!this.state.loginStatus});
    }
    render(){
        // const messages = ['React','RE:React','RE:RE:React']
        const messages = ['dfds']
        return(
            <div>
                <p className="title">Six.js<b>React 条件渲染</b></p>
                <Greeting isLoggedIn={this.state.loginStatus}/>
                <button onClick={this.switch}>切换登录状态{this.state.loginStatus?'on':'off'}</button>
                <Prompt when={!this.state.loginStatus} message="还未注册，确定离开当前页面？" />
                <hr/>
                <Mailbox unreadMessages={messages}/>
                <hr/>
                <Page/>
            </div>
        )
    }
}
class UserGreeting extends Component{
    render(){
        return(
            <h1>欢迎回来！</h1>
        )
    }
}
function GuestGreeting(props){
    return <h1>请先注册。</h1>
}
class Greeting extends Component{
    render(){
        const isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn){
            return <UserGreeting/>;
        }
        return <GuestGreeting/>;

        // 三目运算符
        // return(
        //     <div>
        //        {isLoggedIn?(<UserGreeting/>):(<GuestGreeting/>)}
        //     </div>
        // )
    }
}

// 元素变量


// 与运算符&&
// 在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。
class Mailbox extends Component{
    render(){
        const unreadMessages = this.props.unreadMessages;
        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length>0&&<h2>您有{unreadMessages.length}条未读消息。</h2>}
            </div>
        )
    }
}

// 三目运算符
// line:48

// 阻止组件渲染
class WarningBanner extends Component{
    render(){
        if(!this.props.warn){
            return null;
            // 组件render方法返回null并不会影响该组件生命周期方法的回调。
            // 例如，componentWillUpdate和componentDidUpdate依然可以被调用
        }
        return(
            <div className="warning">警告！</div>
        )
    }
}
class Page extends Component{
    constructor(){
        super();
        this.state = {showWarning:true};
    }
    handleToggleClick = () =>{
        this.setState({showWarning:!this.state.showWarning});
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>{this.state.showWarning?'隐藏':'显示'}</button>
            </div>
        )
    }
}
