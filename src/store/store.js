import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createStore,compose,bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import {increaseAction,getWidth} from './action';
import reducer from './reducer';
import Whh from './child';

class Counter extends Component{
    componentDidMount(){
        console.log('111');
        window.onresize = () => {
            console.log('屏幕变化了');
            const clientWidth = document.body.clientWidth;
            getWidth(clientWidth);
            // console.log(document.body.clientWidth);
        }
    }
    render(){
        const {value,widthvalue,increaseAction} = this.props;
        return(
            <div>
                <span>{value}</span>
                <p>{widthvalue}</p>
                <br/>
                <button onClick={increaseAction}>Increase</button>
                <Whh/>
            </div>
        )
    }
}


Counter.propTypes = {
    value:PropTypes.number.isRequired,
    increaseAction:PropTypes.func.isRequired
}

// const store = createStore(reducer);
const store = createStore(reducer,compose(window.devToolsExtension?window.devToolsExtension():f=>f))

const mapStateToProps = state =>{
    return {value:state.count,widthvalue:state.width}
}

const mapDispatchToProps = dispatch =>({
    // return {increaseAction:()=>dispatch(increaseAction)}
    increaseAction: bindActionCreators(increaseAction, dispatch),
    getWidth:bindActionCreators(getWidth, dispatch)
});
// const mapDispatchToProps =(dispatch,ownProps)=>{
//     return bindActionCreators({
//         increaseAction:increaseAction,
//         totalAction:totalAction
//     })
// }



const Abb = connect(mapStateToProps,mapDispatchToProps)(Counter);

class Store extends Component{
    render(){
        return(
            <Provider store={store}>
                <Abb></Abb>
            </Provider>
        )
    }
}

export default Store