import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupPage from './pages/signup-page'

import './App.css'

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
