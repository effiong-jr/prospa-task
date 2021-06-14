import './custom-card.scss'

const CustomCard = ({ children, ...props }) => {
  return <div className={`custom-card ${props.className}`}>{children}</div>
}

export default CustomCard
