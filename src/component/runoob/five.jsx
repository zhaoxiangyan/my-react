import React,{Component} from 'react';

// React事件处理

// 在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为， 你必须明确的使用 preventDefault。
export default class Five extends Component{
    handleClick(e){
      e.preventDefault();
      console.log('链接被点击');
    }
    render(){
        return(
            <div>
               <p className="title">Five.js<b>React 事件处理</b></p>
               <a href="www.baidu.com" onClick={this.handleClick}>点击</a>
               <br/>
               <Toggle/>
               <br/> 
               <LoggingButton1/>
               <br/>
               <LoggingButton2/>
               <br/>
               <Popper1/>
               <hr/>
               <Popper2/>
            </div>
        )
    }
}

class Toggle extends Component{
    constructor(){
        super();
        this.state = {isToggleOn:true};

        // 这边绑定是必要的，这样‘this’才能在回调函数中使用
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick=()=>{
    //     this.setState(prevState => ({isToggleOn:!prevState.isToggleOn}));
    //     // 箭头函数展开
    //     // this.setState(function(prevStte){
    //     //     return({
    //     //         isToggleOn:!prevStte.isToggleOn
    //     //     })
    //     // })
    // }
    // prevState 代表 this.state
    handleClick = () =>{
        this.setState({isToggleOn:!this.state.isToggleOn})
    }
    render(){
        return(
            <button onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
        )
    }
}

class LoggingButton1 extends Component{ 
    // 这个语法确保了‘this’ 绑定在handleClick中
    // 这里只是一个测试
    // 属性初始化器语法
    handleClick = () =>{
        console.log('this is:', this);
    }
    render(){
        return (
            <button onClick={this.handleClick}>Click me1</button>
        )
    }
}

class LoggingButton2 extends Component{
    // 没有使用属性初始化器语法，在回调函数中使用箭头函数
    handleClick(){
        console.log('this is:',this);
    }
    render(){
        return(
            <button onClick={(e)=>this.handleClick(e)}>Click Me2</button>
            // 使用这个语法有个问题就是每次LoggingButton2渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。然而
            // 如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。我们通常建议在构造函数中绑定或使用
            // 属性初始化器语法来避免这类性能问题。
        )
    }
}


// 向事件处理程序传递参数
class Popper1 extends Component{
    constructor(){
        super();
        this.state = {name:'Hello World!'};
    }
    preventPop(name,e){
        e.preventDefault();
        alert(name);
    }
    render(){
        return(
            <div>
                <p>hello</p>
                {/* 通过bind()方法传递参数 */}
                <a href="https://www.baidu.com" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        )
    }
}
class Popper2 extends Component{
    constructor(){
        super();
        this.state = {name:'HELLO WORLD'};
    }
    preventPop(name,e){
        e.preventDefault();
        alert(name);
    }
    render(){
        return(
            <div>
                <p>HELLO</p>
                {/* 箭头函数 传递参数 */}
                <a href="www.baidu.com" onClick={(e)=>this.preventPop(this.state.name,e)}>CLICK</a>
            </div>
        )
    }
}