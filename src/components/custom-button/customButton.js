import './customButton.scss'

const CustomButton = (props) => {
  return <button className="custom-button">{props.children}</button>
}

export default CustomButton
