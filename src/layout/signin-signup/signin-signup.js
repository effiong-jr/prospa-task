import SideBar from '../sidebar/sidebar'
import SignInLink from '../signin-link/signinLink'

import './signin-signup-layout.scss'

const Layout = ({ children, ...props }) => {
  return (
    <div className="signin-signup">
      <section className="signin-signup__sidebar-container">
        <SideBar />
      </section>

      <section className="signin-signup__content-area">
        <div className="signin-signup__content-area--header">
          <SignInLink canGoBack={props.canGoBack} />
        </div>
        <div className="signin-signup__content-area__content">
          <div className="forms">
            <h2 className="">{props.title}</h2>
            <p>{props.desc}</p>

            {children}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Layout
