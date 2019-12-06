import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Perching from './Perching'
// import Instructions from './Instructions'
// import BirdProfile from './BirdProfile'
// import BirdInfo from './BirdInfo'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Perching}/>
        {/* <Route exact path='/instructions' component={Instructions}/>
          <Route exact path='/profile/:id' component={BirdProfile}/>
          <Route exact path='/profile/:id/info' component={BirdInfo}/> */}
      </Switch>
    </Router>
  )
}

export default App
