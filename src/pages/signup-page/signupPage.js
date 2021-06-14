import Layout from '../../layout/signin-signup-layout/signInSignupLayout'
import CreateAccountForm from '../../layout/create-account-form/createAccountForm'

const SignupPage = (props) => {
  return (
    <Layout
      title="Create your account"
      desc="A short description about account types"
      registeredUser={true}
    >
      <CreateAccountForm />
    </Layout>
  )
}

export default SignupPage
