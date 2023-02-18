//amount reducer works with amount to draw or deposit the amount
export default reducer = (state=0, action)=>{
    if(action.type === 'deposit'){
        return state + action.payload
    }
    else if(action.type === 'withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }
}