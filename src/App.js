import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupPage from './pages/signup-page/signupPage'
import OpenBusinessAccount from './pages/open-business-account/openBusinessAccountPage'
import LoginPage from './pages/login-page/loginPage'
import Dashboard from './pages/dashboard/dashboard'

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
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
