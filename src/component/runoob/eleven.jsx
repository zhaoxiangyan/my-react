import React,{Component} from 'react';

export default class Eleven extends Component{
    render(){
        return(
            <div>
                <p className="title">Eleven.js<b>React 表单与事件</b></p>
                <HelloMessage/>
                <hr/>
                <HelloMessage1/>
                <hr/>
                <FlavorForm/>
                <hr/>
                <Reservation/>
                <hr/>
                <HelloMessage2/>
            </div>
        )
    }
}
class HelloMessage extends Component{
    constructor(){
        super();
        this.state = {value:'Hello React!'};
    }
    handleChange = (e)=>{
        this.setState({value:e.target.value});
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <h4>{this.state.value}</h4>
            </div>
        )
    }
}

class Content extends Component{
    render(){
        return(
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
                <h4>{this.props.myDataProp}</h4>
            </div>
        )
    }
}
class HelloMessage1 extends Component{
    constructor(){
        super();
        this.state = {value:'Hello React'};
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value});
        // 可以获取到event.target
    }
    render(){
        return(
            <div>
                <Content myDataProp={this.state.value} updateStateProp={this.handleChange}/>
 {/* 当你需要从子组件中更新父组件的 state 时，你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上。                 */}
            </div>
        )
    }
}


// Select下拉菜单
// 在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。
class FlavorForm extends Component{
    constructor(){
        super();
        this.state = {value:'coconut'};
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value});
    }
    handleSubmit=(e)=>{
        alert('Your favorite flavor is:' + this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你最喜欢的JS框架
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="React">React</option>
                        <option value="Jquery">Jquery</option>
                    </select>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

// 多个表单
// 当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么。
class Reservation extends Component{
    constructor(){
        super();
        this.state={
            isGoing:true,
            numberOfGuests:2
        }
    }
    handleInputChange=(e)=>{
        const value = e.target.type === 'checkbox'?e.target.checked:e.target.value;
        this.setState({[e.target.name]:value});
    }
    render(){
        return(
            <form>
                <label>
                    是否离开:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    访客数：
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}

// React 事件
class HelloMessage2 extends Component{
    constructor(){
        super();
        this.state = {value:'Hello React'};
    }
    handleChange=(e)=>{
        this.setState({value:this.state.value+'React 事件'})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleChange}>点我</button>
                <h4>{this.state.value}</h4>
            </div>
        )
    }
}
