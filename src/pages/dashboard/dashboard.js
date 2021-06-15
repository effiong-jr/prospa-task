import DashboardLayout from '../../layout/user-dashboard/userDashboard'
import CustomCard from '../../components/custom-card/customCard'
import CustomButton from '../../components/custom-button/customButton'
import AccountInfo from './accountInfo/accountInfo'

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
          <AccountInfo />
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
