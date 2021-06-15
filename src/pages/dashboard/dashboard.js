import DashboardLayout from '../../layout/user-dashboard/userDashboard'
import CustomButton from '../../components/custom-button/customButton'
import AccountInfo from './accountInfo/accountInfo'
import AccountStats from './accountStats/accountStats'
import Cashflow from './cashfow/cashflow'

import './dashboard.scss'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard__content-area">
        <section className="dashboard__content-area__header">
          <div className="dashboard__content-area__header__desc">
            <h3 className="dashboard__content-area__header__desc--title">
              Welcome back, Kathy
            </h3>
            <p className="dashboard__content-area__header__desc--text">
              Here’s what has been happening in the last <span>7 days</span>
            </p>
          </div>
          <div className="dashboard__content-area__header__cta">
            <CustomButton>Add a sub account</CustomButton>
          </div>
        </section>

        <section className="dashboard__content-area__content">
          <div className=" dashboard__content-area__content--account-info content">
            <AccountInfo />
          </div>

          <div className="dashboard__content-area__content--account-summary content">
            <div className="account-stats">
              <AccountStats />
            </div>

            <div className="cash-flow">
              <Cashflow />
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
