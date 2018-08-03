import React,{Component} from 'react';
import Clock from './clock';


// React State(状态)
class FormattedDate extends Component {
    render(){
        return (
            <h2>现在是 {this.props.date.toLocaleTimeString()}</h2>
        )
    }
}
export default class Three extends Component {
    constructor (){
        super();
        // 继承
        // 在class方法中，继承是使用extends关键字来实现的。子类必须在constructor()调用super()方法，否则新建实例会报错。
        this.state = {
            date:new Date(),
            dsdfd:233
        };
    };
    // 生命周期钩子  componentDidMount() componentWillUnmount()
    // 挂载
    componentDidMount(){
        // ES6
        // function(){}   ()=>
        // 当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
        // 并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
        this.timerID = setInterval(()=> this.tick(),1000);
        // setInterval(()=> this.tick(),1000);
        // ES5
        // this.timerID = setInterval(function(){this.tick()}.bind(this),1000);
        //  var self = this;
        //  this.timerID = setInterval(function(){self.tick()},1000);
    };
    // 卸载
    componentWillUnmount(){
       clearInterval(this.timerID);
    };
    tick(){
        // this.setState()方法不可变
        this.setState({
           date: new Date()
        });
    };
    render(){
        return (
            <div>
                <p className="title">Three.js<b>React State(状态)</b></p>
                <h1>Hello,world!</h1>
                <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
                <h3>{this.state.dsdfd}</h3>
                {/* 数据自顶向下流动（单向数据流） */}
                <FormattedDate date={this.state.date}></FormattedDate>
                {/* 渲染三个clock */}
                <Clock />
                <Clock speed="2"/>
                <Clock speed="3"/>
            </div>
        );
    }
}