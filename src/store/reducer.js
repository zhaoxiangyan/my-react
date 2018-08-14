const counter = (state={count:0,child:{},width:null},action)=>{
    const count = state.count;
    switch(action.type){
        case 'increase':
            return {...state,count:count+1}
        case 'bodywidth':
            return {...state,width:action.data}
        case 'total':
            return {...state,[action.name]:action.data}
        default:
            return state
    }
}

export default counter;