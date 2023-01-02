import './campoFlutuante.css'

function CampoFlutuante (props) {
    return (

        <div className='campo-flutuante'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required}>
                {props.itens.map((item) => {
                    return <option key={item}> {item} </option>
                })}

            </select>
                
        </div>
        

    );
}

export default CampoFlutuante;