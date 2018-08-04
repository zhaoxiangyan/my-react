import React,{Component} from 'react';

class FormattedDate extends Component{
    render(){
        return (
           <h3>Clock{this.props.qspeed}:{this.props.date.toLocaleTimeString()}.</h3>
        );
    }
}
export default class Clock extends Component {
    // 设置默认Props
    // static defaultProps = {
    //     speed: 1
    //     // 通过speed传值，时间重新渲染间隔，默认为1
    // };
    constructor(){
        super();
        this.state = {date:new Date()};
    };
    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),this.props.speed*1000);
    };
    componentWillUnmount(){
        clearInterval(this.timerID);
    };
    tick(){
        this.setState({
            date:new Date()
        })
    };
    render(){
        return (
            <FormattedDate qspeed={this.props.speed} date={this.state.date}></FormattedDate>
        )
    }
}
// 默认Props
Clock.defaultProps = {
    speed: 5
}