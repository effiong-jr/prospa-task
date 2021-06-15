import Header from '../../components/dashboardComponents/header/header'
import DashboardSidebar from '../../components/dashboardComponents/sidebar/sidebar'

import './user-dashboard.scss'

const DashboardLayout = ({ children, ...props }) => {
  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <DashboardSidebar />
      </div>
      <div>
        <Header />
        <div className="dashboard__content">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
