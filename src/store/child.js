import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {totalAction} from './action';
import axios from 'axios';

class Whh extends Component{
    state = {
        Total:[]
    };
    componentDidMount(){
        console.log('child');
        const {totalAction} = this.props;
        axios.get('/static/api/country_code.json').then((res)=>{
            console.log("res:",res.data);
            this.setState({ Total:res.data});
            totalAction(res,'child');
        }).catch((err)=>{
            console.log("err:",err);
        })
        // console.log(child);
    }
    // componentWillUnmount = () => {
    //     this.setState = (state,callback)=>{
    //        return;
    //     };
    // }
    render(){
        const {child} = this.props;
        // return(<p>{child.data}</p>)
        return(<p>{child.status}</p>)
    }
}

const mapStateToProps = state =>{
    return {child:state.child}
    // const { child = {data: {}} } = state.counter;
    // return {child};
}

const mapDispatchToProps = dispatch =>({
    // return {totalAction:()=>dispatch(totalAction)}
    // increaseAction: bindActionCreators(increaseAction, dispatch);
    totalAction:bindActionCreators(totalAction, dispatch)
});
// const mapDispatchToProps =(dispatch,ownProps)=>{
//     return bindActionCreators({
//         increaseAction:increaseAction,
//         totalAction:totalAction
//     })
// }

export default connect(mapStateToProps,mapDispatchToProps)(Whh);