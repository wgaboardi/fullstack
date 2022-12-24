import './styles.css'

export const Button = ({ text, onClick, disabled }) => (
  <div className="button-container">
    <button disabled={disabled} className="button" onClick={onClick}>{text}</button>
  </div>
)