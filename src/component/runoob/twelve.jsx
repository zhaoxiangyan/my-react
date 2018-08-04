import React,{Component} from 'react';

// React Refs
// React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
export default class Twelve extends Component{
    handleClick=()=>{
        this.refs.myInput.focus();
    }
    render(){
        return(
            <div>
                <p className="title">Twelve.js<b>React Refs</b></p>
                <input type="text" ref="myInput"/>
                <input type="button" value="点我输入框获取焦点" onClick={this.handleClick}/>
            </div>
        )
    }
}

// getDOMNode()