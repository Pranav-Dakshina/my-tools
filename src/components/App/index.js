import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import LoginPage from "../LoginPage"
import MainPage from "../MainPage"

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/main" component={MainPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
