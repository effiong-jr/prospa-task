import { Link } from 'react-router-dom'

import './signin-link.scss'

const SignInLink = ({ canGoBack, ...props }) => {
  return (
    <div className="actions">
      <div className="actions__go-back">
        {canGoBack && <button>Back</button>}
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
