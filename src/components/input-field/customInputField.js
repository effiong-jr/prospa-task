import './customInputField.scss'

const CustomInputField = (props) => {
  if (props.type === 'select') {
    return (
      <div className="custom-input">
        {/* <p>Testing Testing</p> */}
        <select
          className="custom-input--input"
          {...props}
          placeholder=" "
          autoComplete="off"
        />
        <label className="custom-input--label">{props.label}</label>
      </div>
    )
  }
  return (
    <div className="custom-input">
      {/* <p>Testing Testing</p> */}
      <input
        className="custom-input--input"
        {...props}
        placeholder=" "
        autoComplete="off"
      />
      <label className="custom-input--label">{props.label}</label>
    </div>
  )
}

export default CustomInputField
