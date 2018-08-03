import React, { Component } from 'react';
import classes from './mycss.css';
/*fdsf*/

// React JSX
export default class One extends Component {
  static defaultProps = {
      name: 'Hello Props',
  };
  render() {
      /*dfsf*/
    const i =1;
    const myStyle = {
        fontSize:20,
        color:'#ff0000'
    };
    const arr = [
        <h5 key="1">数组1</h5>,
        <h5 key="2">数组2</h5>,
    ];
    console.log(this.props.name);
    return (
        <div>
            <p className="title">One.js<b>React JSX</b></p>
            <p className={classes.one_title}>One</p>
            {/* 需要配置webpack css-loader */}
            <h1>React JSX</h1>
            <h3>JavaScript表达式：1+4={1+4}</h3>
            <h4>三元运算：{i===1?'True':'False'}</h4>
            <p data-myattribute = "somevalue">添加自定义属性</p>
            <p style={myStyle}>设置内联样式，React会在指定元素数字后自动添加px</p>
            {/* 注释 */}
            <div><p>JSX允许在模板中插入数组，数组会自动展开所有成员：</p>{arr}</div>
            {/* 注意：由于JSX就是JavaScript，一些标识符像class和for不建议作为XML属性名。作为替代，React DOM使用className和htmlFor来做对应的属性。 */}
            <p style={{fontSize:25}}>通过添加内联样式的时候，容易犯的错误:</p>
        </div>
    );
  }
}