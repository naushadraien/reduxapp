import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './State/index'

export const Shop = () => {
  //useDispatch() is used for dispatching the action
  const dispatch = useDispatch()
  //Here const action are actions which are withdraw and deposit money 
  // const actions  = bindActionCreators(actionCreators,dispatch);

  //Here const actions are replaced with const {withdrawMoney, depositMoney} because withdraw and deposit money are themselves are actions
  // {withdrawMoney, depositMoney} is a destructuring
  const {withdrawMoney, depositMoney}  = bindActionCreators(actionCreators,dispatch);
  const balance = useSelector(state => state.amount)
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        {/* Here wihdraw and deposit money functions are called from index.js of state folder in which wihdraw and deposit money functions are
        used from action-creators folder which has index.js*/}

        {/* Here onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} is used without using bindActionCreators */}
        {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}

        {/* With bindActionCreators */}
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update Balance ({balance})
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}
