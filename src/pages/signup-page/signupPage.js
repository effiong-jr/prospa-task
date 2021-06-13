import Layout from '../../layout/signin-signup/signin-signup'
import CreateAccountForm from '../../layout/create-account-form/createAccountForm'

const SignupPage = () => {
  return (
    <Layout
      title="Create your account"
      desc="A short description about account types"
    >
      <CreateAccountForm />
    </Layout>
  )
}

export default SignupPage
