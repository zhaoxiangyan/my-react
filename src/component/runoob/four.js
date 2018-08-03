import React,{Component} from 'react';
import PropTypes from 'prop-types';
// var PropTypes = require('prop-types');

// 使用Props  默认Props
// State 和 Props
// 父组件设置state通过子组件props传值到子组件
export default class Four extends Component{
    constructor(){
        super();
        this.state = {
            name:'菜鸟教程',
            site:'http://www.runoob.com/react/react-props.html'
        }
    }
    componentDidMount(){
          
    }
    componentWillUnmount(){

    }
    render(){
        return (
            <div>
                <p className="title">Four.js<b>React Props</b></p>
                <Name name={this.state.name}></Name>
                <Link site={this.state.site} />
                <MyTitle title={title}/>
            </div>
        )
    }
}

class Name extends Component{
    render(){
        return(
            <h1>{this.props.name}</h1>
        )
    }
}

class Link extends Component{
    render(){
        return(
            <a href={this.props.site} target="_blank">{this.props.site}</a>
        )
    }
}


// Props验证  React.PropTypes在reactv15.5版本后已经移到了prop-types库   需要单独npm install --save prop-types
const title = 'Props验证PropTypes';
// const title = 23423;
class MyTitle extends Component{
    // propTypes : {
    //     title: PropTypes.number
    // }
    // constructor(){
    //     super();
    //     this.title = 'propsssss';
    // }
    // propTypes = {
    //     title: PropTypes.number
    // }
    render(){
        return(
            <h1>Hello,{this.props.title}</h1>
        )
    }
}
MyTitle.propTypes = {
    title: PropTypes.string,
   // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
//    optionalArray: PropTypes.array,
//    optionalBool: PropTypes.bool,
//    optionalFunc: PropTypes.func,
//    optionalNumber: PropTypes.number,
//    optionalObject: PropTypes.object,
//    optionalString: PropTypes.string,

   // 可以被渲染的对象 numbers, strings, elements 或 array
//    optionalNode: PropTypes.node,

   //  React 元素
//    optionalElement: PropTypes.element,

   // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
//    optionalMessage: PropTypes.instanceOf(Message),

   // 用 enum 来限制 prop 只接受指定的值。
//    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

   // 可以是多个对象类型中的一个
//    optionalUnion: PropTypes.oneOfType([
//      PropTypes.string,
//      PropTypes.number,
//      PropTypes.instanceOf(Message)
//    ]),

   // 指定类型组成的数组
//    optionalArrayOf:PropTypes.arrayOf(PropTypes.number),

   // 指定类型的属性构成的对象
//    optionalObjectOf:PropTypes.objectOf(PropTypes.number),

   // 特定 shape 参数的对象
//    optionalObjectWithShape:PropTypes.shape({
//      color:PropTypes.string,
//      fontSize:PropTypes.number
//    }),

   // 任意类型加上 `isRequired` 来使 prop 不可空。
//    requiredFunc:PropTypes.func.isRequired,

   // 不可空的任意类型
//    requiredAny:PropTypes.any.isRequired,

   // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
//    customProp: function(props, propName, componentName) {
//      if (!/matchme/.test(props[propName])) {
//        return new Error('Validation failed!');
//      }
//    }
}
