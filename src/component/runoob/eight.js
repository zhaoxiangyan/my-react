import React,{Component} from 'react';
import {findDOMNode} from 'react-dom';

// React 组件API
export default class Eight extends Component{
    render(){
        return(
            <div>
                <p className="title">Eight.js<b>React 组件API</b></p>
                <Counter/>
                <hr/>
                <Counter1 count="1"/>
                <hr/>
                <SubBox/>
                <hr/>
                <DomNode/>
            </div>
        )
    }
}


// 设置状态：setState
// 不能在组件内部通过this.state修改状态，因为该状态会在调用setState()后被替换。
class Counter extends Component{
    constructor(){
        super();
        this.state = {clickCount:10};
    }
    handleClick = ()=>{
        this.setState({clickCount:this.state.clickCount+1})
    }
    render(){
        return <h2 onClick={this.handleClick}>点我！点击次数为：{this.state.clickCount}</h2>
    }
}

// 替换状态：replaceState
// replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除

// 设置属性：setProps
class Counter1 extends Component{
    render(){
        return <h3>点击！点击次数为：{this.props.count}</h3>
    }
}
// Counter1.setProps({count:21})
// setProps(object nextProps[, function callback])可以设置组件的属性。
// 这个方法已经过时了（与replaceProps等一样），不久将被删除。这个方法不支持ES6类组件React.Component扩展。

// 替换属性：replaceProps

// 强制更新：forceUpdate 
class Sub extends Component{
    constructor(){
        super();
        this.name = "yema";
    }
    refChangeName(name){
        this.name = name;
        this.forceUpdate();
        // 不强制更新不会渲染除了state props外的值(name)得改变
    }
    render(){
        return (<div>{this.name}</div>);
    }
}
class SubBox extends Component{
    handleClick = () =>{
        this.subRef.refChangeName("yemafuren");
        // this.refs.subRef.refChangeName("yemafuren");
    }
    render(){
        return (<div>
            <Sub ref={sub=>this.subRef = sub} />
                {/* 推荐使用ref callback而不是ref string */}
            {/* <Sub ref="subRef"/> */}
            <button onClick={this.handleClick}>click</button>
        </div>);
    }
}
// 一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。




// 获取DOM节点：findDOMNode
class NavBox extends Component{
    render(){
        return(
            <h3>获取dom节点，子组件</h3>
        )
    }
}
class DomNode extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         name:'dfds'
    //     }
    // }
    // componentDidMount(){
    //     this.setState({name:findDOMNode(this.refs.navBox).toString()})
    // }
    render(){
        return(
            <div>
                <NavBox ref="navBox"/>
                {/* <p>{this.state.name}</p> */}
                <p onClick={()=>{console.log(findDOMNode(this.refs.navBox))}}>console.log</p>
                {/* ref refs两种不同写法 */}
                <h3 ref={nav=>this.navbox = nav}>获取dom节点，ref,refs</h3>
                <p onClick={()=>{console.log(findDOMNode(this.navbox))}}>console.log</p>
            </div>
        )
    }
}


// 判断组件挂载状态：isMounted
// isMounted此方法已经弃用很久了，主要的原因是它经过实际使用与测试可能不足以检测组件是否挂载，
// 尤其是对于有一些异步的程序情况，以及逻辑上造成混乱。setState本身可以提供一些错误的检查，不需要这个isMounted先作检查