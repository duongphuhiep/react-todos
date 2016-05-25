import React from 'react'
import {connect} from 'react-redux'
import {addThunkItem} from "../actions"

const InvokeThunk = ({dispatch}) =>
  (<button onClick={()=>dispatch(addThunkItem())}>Invoke thunk</button>)


export default connect()(InvokeThunk)