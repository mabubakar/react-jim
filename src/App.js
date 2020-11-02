import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Landing from './views/Lading'

const App = () => {
  return (
    <Switch>
      <Route path='/' component={Landing} exact />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
