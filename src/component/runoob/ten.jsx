import React,{Component} from 'react';
import axios from 'axios';

// React AJAX
export default class Ten extends Component{
    constructor(){
        super();
        this.state = {en:'',cn:''}
    }
    componentWillMount(){
        
    }
    componentDidMount(){
        axios.get(this.props.api).then((res)=>{
            console.log("res:",res);
            let ind = Math.round(Math.random()*205);
            this.setState({en:res.data[ind].en,cn:res.data[ind].cn});
        }).catch((err)=>{
            console.log("err:",err);
        })
    }
    componentWillUnmount(){
        // 未测试
        axios.CancelToken.source().cancel('请求取消');
    }
    render(){
        return(
            <div>
                <p className="title">Ten.js<b>React AJAX</b></p>
                <p>English:{this.state.en}</p>
                <p>中文：{this.state.cn}</p>
            </div>
        )
    }
}