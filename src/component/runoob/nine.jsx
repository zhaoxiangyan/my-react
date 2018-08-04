import React,{Component} from 'react';

// React 组件生命周期
export default class Nine extends Component{
    render(){
        return(
            <div>
                <p className="title">Nine.js<b>React 组件生命周期</b></p>
                <p>路由地址：{this.props.match.url}</p>
                <Hello name="world"/>
                <hr/>
                <Button/>
            </div>
        )
    }
}

// 不推荐componentWillMount  在渲染前调用，在客户端也在服务器。 
// componentDidMount  在第一次渲染后调用，只在客户端。
// 不推荐 componentWillReceiveProps
// shouldComponentUpdate
// 不推荐 componentWillUpdate   
// componentDidUpdate    在组件完成更新后立即调用。在初始化时不会被调用
// componentWillUnmount  在组件从DOM中移除的时候立刻被调用

// componentDidCatch   错误处理  在渲染期间，生命周期方法或任何子组件的构造函数中发生错误时，将调用此方法。

class Hello extends Component{
    constructor(){
        super();
        this.state = {opacity:1.0}
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            var opacity = this.state.opacity;
            opacity -= .05;
            if(opacity<0.1){
                opacity = 1.0;
            }
            this.setState({opacity:opacity})
        },100)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return(
            <div style={{opacity:this.state.opacity}}>Hello{this.props.name}</div>
        )
    }
}



class Button extends Component{
    constructor(){
        super();
        this.state = {data:0};
    }
    setNewNumber = () =>{
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data} />
            </div>
        )
    }
}
class Content extends Component{
    componentWillMount(){
        console.log('1.Component Will Mount');
    }
    componentDidMount(){
        console.log('2.Component Did Mount');
    }
    componentWillReceiveProps(newProps){
        console.log('3.Component Will Receive Props');
        console.log(this.props.myNumber);
        console.log(newProps.myNumber);
    }
    shouldComponentUpdate(newProps,newState){
        // return false;   不会往后运行
        if(newProps.myNumber === this.props.myNumber){
            return false;
        }else{
            return true;
        }
    }
    componentWillUpdate(nextProps,nextState){
        console.log('5.Component Will Update');
        console.log(nextProps);
        console.log(nextState);
    }
    componentDidUpdate(prevProps,prevState){
        console.log('6.Component Did Update');
        console.log(prevProps);
        console.log(prevState);
    }
    componentWillUnmount(){
        console.log('7.Component Will Unmount');
    }
    render(){
        return(
            <h3>{this.props.myNumber}</h3>
        )
    }
}