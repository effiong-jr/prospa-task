import { IoIosNotifications } from 'react-icons/io'

import dashImg from '../../../assets/images/dashImg.svg'

import './header.scss'

const Header = () => {
  return (
    <div className="dashboard__header">
      <div className="dashboard__header--title">Dashboard</div>
      <div className="dashboard__header__items">
        <div className="dashboard__header__items--notification">
          <IoIosNotifications />
        </div>
        <div className="dashboard__header__items--avatar">
          <img src={dashImg} alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Header
