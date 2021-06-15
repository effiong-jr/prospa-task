import sidebarImg from '../../assets/images/savingsImg.svg'
import './sidebar.scss'

const SideBar = (props) => {
  return (
    <section className={`sidebar ${props.className}`}>
      <div className="sidebar__header">
        <h1 className="sidebar__header--text">Prospa</h1>
      </div>
      <div className="sidebar__progress">
        <div className="sidebar__progress--bar bar1"></div>
        <div className="sidebar__progress--bar bar2"></div>
        <div className="sidebar__progress--bar bar3"></div>
        <div className="sidebar__progress--bar bar4"></div>
        <div className="sidebar__progress--bar bar5"></div>
      </div>

      <div className="sidebar__info">
        <h2 className="sidebar__info--header">Create multiple sub-account</h2>
        <p className="sidebar__info--text">
          Organise your business finances easily with multiple accounts. No
          limits!
        </p>
      </div>

      <div className="sidebar__image">
        <img src={sidebarImg} alt="sidebar-img" />
      </div>

      <div className="sidebar__date">
        <p className="m-0">&copy; 2020 Prospa Inc</p>
      </div>
    </section>
  )
}

export default SideBar
