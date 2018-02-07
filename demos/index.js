import React, { Component} from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import Counter from './component/Counter'
import counter from './reducers'

const store = createStore(counter)

const rootE1 = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type:'DECREMENT'})}
  />,rootE1
)

render()
store.subscribe(render)
