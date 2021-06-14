import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupPage from './pages/signup-page/signupPage'
import OpenBusinessAccount from './pages/open-business-account/openBusinessAccountPage'

import './App.scss'

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignupPage} />
        <Route
          exact
          path="/open-business-account"
          component={OpenBusinessAccount}
        />
      </Switch>
    </Router>
  )
}

export default App
