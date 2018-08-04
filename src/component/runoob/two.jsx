import React, { Component } from 'react';

// 复合组件
class Name extends Component {
   render(){
       return (
         <h1>网站名称：{this.props.name}</h1>
       );
   }
}
class Url extends Component {
    render(){
        return (
            <h1>网站地址：{this.props.url}</h1>
        );
    }
}
// class Nickname extends Component {
//     render(){
//         return (
//             <h1>网站小名：{this.props.nickname}</h1>
//         );
//     }
// }
// 组件两种写法
function Nickname(props){
    return <h1>网站小名：{props.nickname}</h1>
}
export default class Two extends Component {
    render(){
        return (
            <div>
               <p className="title">Two.js<b>React 组件，复合组件</b></p>
               {/* <p>路由地址：{this.props.match.url}</p> */}
               <Name name="菜鸟教程" />
               <Url url="http://www.runoob.com" />
               <Nickname nickname="Runoob" />
               {/* 通过父级组件传值 */}
               <Name name={this.props.name} />
               <Url url={this.props.ur} />
               <Nickname nickname={this.props.nick} />
            </div>  
        );
    }
}