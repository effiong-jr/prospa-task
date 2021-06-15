import { Dropdown } from 'react-bootstrap'

import accountsIcon from '../../../assets/images/sidebarIcons/accountIcon.svg'
import invoiceIcon from '../../../assets/images/sidebarIcons/invoiceIcon.svg'
import transferIcon from '../../../assets/images/sidebarIcons/transferIcon.svg'
import managementIcon from '../../../assets/images/sidebarIcons/managementIcon.svg'

import './sidebar.scss'

const DashboardSidebar = () => {
  return (
    <div className="dashboard__sidebar">
      <div className="dashboard__sidebar__header">
        <Dropdown>
          <div className="dashboard__sidebar__header__content">
            <div className="dashboard__sidebar__header__content__text">
              <div className="logo">BN</div>
              <div className="desc">
                <div className="desc__comp-name">Clayvant Inc</div>
                <div className="desc__account-action">Manage account</div>
              </div>
            </div>
            <Dropdown.Toggle id="dropdown-basic" />
          </div>

          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Clayvant Inc</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">Business name 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Business name 3</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Add a business</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="dashboard__sidebar__container">
        <div className="dashboard__sidebar__container__links">
          <ul>
            <li>
              <img src={accountsIcon} alt="" />
              Accounts
            </li>
            <li>
              <img src={transferIcon} alt="" /> Transfer
            </li>
            <li>
              <img src={invoiceIcon} alt="" />
              Invoice
            </li>
            <li>
              <img src={managementIcon} alt="" /> Management
            </li>
            <li>
              <img src={managementIcon} alt="" /> Security
            </li>
            <li>
              {' '}
              <img src={managementIcon} alt="" /> Support
            </li>
          </ul>
        </div>
        <div className="dashboard__sidebar__container__footer">Prospa</div>
      </div>
    </div>
  )
}

export default DashboardSidebar
