import { useHistory } from 'react-router-dom'
import CustomButton from '../../components/custom-button/customButton'
import CustomInputField from '../../components/input-field/customInputField'
import Layout from '../../layout/signin-signup-layout/signInSignupLayout'

import './loginPage.scss'

const LoginPage = () => {
  const history = useHistory()

  const handleLogin = (event) => {
    event.preventDefault()

    history.push('/dashboard')
  }
  return (
    <div>
      <Layout
        title="Welcome back to Prospa"
        desc="An account, with powerful, personalised tools
        all in one place"
        url="/"
        action="Sign Up"
        className="login__sidebar"
      >
        <div className="login-form">
          <form className="form" onSubmit={handleLogin}>
            <div className="mb-3">
              <CustomInputField
                label="Email Address"
                type="email"
                name="email"
              />
            </div>

            <div className="mb-3">
              <CustomInputField
                label="Enter password"
                type="password"
                name="password"
              />
            </div>

            <div>
              <CustomButton type="submit">Next</CustomButton>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}

export default LoginPage
