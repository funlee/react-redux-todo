import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
