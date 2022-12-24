import './styles.css'
export const TextInput = ({ searchValue, handleChanged }) => (
  <input placeHolder="Type our search" type="search" className="text-input" value={searchValue} onChange={handleChanged} />
)  
