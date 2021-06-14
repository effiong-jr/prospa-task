import { useHistory } from 'react-router-dom'

import CustomInputField from '../../components/input-field/customInputField'
import CustomButton from '../../components/custom-button/customButton'

import './create-account-form.scss'

const CreateAccountForm = (props) => {
  const history = useHistory()

  const handleGoToNextPage = (event) => {
    event.preventDefault()

    history.push('/open-business-account')
  }

  return (
    <section className="form row">
      <form onSubmit={handleGoToNextPage} className="col px-0">
        <div className="form__field col">
          <CustomInputField type="text" name="first_name" label="First Name" />
        </div>

        <div className="form__field col">
          <CustomInputField type="text" name="last_name" label="Last Name" />
        </div>

        <div className="row px-3">
          <div className="form__field col-sm-4">
            <CustomInputField type="select" name="country" label="Country">
              <option value="+233">+233</option>
              <option value="+234">+234</option>
              <option value="+237">+237</option>
            </CustomInputField>
          </div>
          <div className="form__field col pl-0">
            <CustomInputField
              type="tel"
              name="mobileNumber"
              label="Phone Number"
            />
          </div>
        </div>

        <div className="form__field col">
          <CustomInputField type="email" name="email" label="Email address" />
        </div>

        <div className="col">
          <CustomButton>Next</CustomButton>
        </div>
      </form>
    </section>
  )
}

export default CreateAccountForm
