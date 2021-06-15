import CustomCard from '../../../components/custom-card/customCard'
import AccountChart from './accountChart'

import './accountStats.scss'

const AccountStats = () => {
  return (
    <div className="dashboard__account__stats">
      <CustomCard>
        <div className="dashboard__account__stats__summary">
          <div className="dashboard__account__stats__summary--title">
            June summary
          </div>
          <div className="dashboard__account__stats__summary__breakdown">
            <div>
              <div className="title">Money In</div>
              <div className="amount">N 5,650,000</div>
            </div>
            <div>
              <div className="title">Money Out</div>
              <div className="amount">N 5,650,000</div>
            </div>
            <div>
              <div className="title">Difference</div>
              <div className="amount">N 5,650,000</div>
            </div>
          </div>
        </div>

        <div className="dashboard__account__stats__graph">
          <AccountChart />
        </div>
      </CustomCard>
    </div>
  )
}

export default AccountStats
