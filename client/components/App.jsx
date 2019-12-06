import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Perching from './Perching'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Perching}/>
        {/* <Route exact path='/instructions' component={Instructions}/> WIP */}
        {/* <Route exact path='/profile/:id' component={BirdProfile}/> WIP */}
        {/* <Route exact path='/profile/:id/info' component={BirdInfo}/> WIP */}
      </Switch>
    </Router>
  )
}

export default App
