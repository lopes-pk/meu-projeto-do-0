import './campoTexto.css'

function CampoTexto(props) {

    return (
        <section>
            <div className="campo-texto">
                <label>{props.label}</label>
                <input onChange={event => props.aoAlterado(event.target.value)} placeholder={props.placeholder} value={props.value} required={props.required}/>
            </div>
        </section>
    );
}

export default CampoTexto;