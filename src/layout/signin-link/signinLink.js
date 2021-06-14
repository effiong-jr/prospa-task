import { Link, useHistory } from 'react-router-dom'
import { IoChevronBackOutline } from 'react-icons/io5'

import './signin-link.scss'

const SignInLink = ({ canGoBack, ...props }) => {
  const history = useHistory()

  return (
    <div className="actions">
      <div className="actions__go-back">
        {canGoBack && (
          <button onClick={() => history.goBack()}>
            <IoChevronBackOutline />
          </button>
        )}
      </div>
      <div className="actions__signin">
        <span>Already a member? </span>
        <span className="actions__signin--link">
          <Link to="/signin">Sign In</Link>
        </span>
      </div>
    </div>
  )
}

export default SignInLink
