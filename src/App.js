import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupPage from './pages/signup-page/signupPage'

import './App.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignupPage} />
      </Switch>
    </Router>
  )
}

export default App
