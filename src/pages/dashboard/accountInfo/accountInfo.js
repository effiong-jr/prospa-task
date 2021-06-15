import CustomCard from '../../../components/custom-card/customCard'
import cardIcon from '../../../assets/images/userDashboard/cardIcon.svg'
import cardIcon2 from '../../../assets/images/userDashboard/cardIcon2.svg'

import './accountInfo.scss'

const AccountInfo = () => {
  return (
    <div className="account-info">
      <div className="account-info__card__container">
        <CustomCard>
          <div className="account-info__card__container__account-details">
            <div>
              <div className="account-type">CURRENT ACCOUNT</div>
              <div className="account-number">PROVIDUS BANK - 9906533917</div>
            </div>
            <div className="account-balance">N814,800.45</div>
          </div>

          <div>
            <img src={cardIcon} alt="" />
          </div>
        </CustomCard>
      </div>

      <div className="account-info__card__container">
        <CustomCard>
          <div className="account-info__card__container__account-details">
            <div>
              <div className="account-type">SAVINGS ACCOUNT</div>
              <div className="account-number">SUB ACCOUNT - 12346789</div>
            </div>
            <div className="account-balance">N39,342.45</div>
          </div>

          <div>
            <img src={cardIcon2} alt="" />
          </div>
        </CustomCard>
      </div>
    </div>
  )
}

export default AccountInfo
