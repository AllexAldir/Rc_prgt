import './input.css'

export function Input({ type, text, name, placeholder, handleOnChange, value }) {

    return (
        <div className="form_control">

            <label htmlFor={name} className="controle">{text}</label>
            <input type={type} className="controle_ip"
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={handleOnChange} 
            value={value}>
            </input>

        </div>
    )

}