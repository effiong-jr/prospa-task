import Header from '../../components/dashboardComponents/header/header'
import DashboardSidebar from '../../components/dashboardComponents/sidebar/sidebar'

import './user-dashboard.scss'

const DashboardLayout = ({ children, ...props }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-layout__sidebar">
        <DashboardSidebar />
      </div>
      <div className="dashboard-layout__body">
        <Header />
        <div className="dashboard-layout__body__content">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
