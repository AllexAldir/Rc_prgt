import './input.css'
import './select.css'
export function Select({ text, name, handleOnChange, value, options }) {

    return (

        <div className="form_control">

            <label htmlFor={name} className="controle">{text}</label>
            <select id={name} name={name} className="controle_ip" onChange={handleOnChange} >
                <option >Selecione o projeto</option>   
                {
                    options.map((e) => (
                        <option name={e.id} key={e.id} selected>{e.name}</option>
                    ))
                }
            </select>

        </div>
    )

}