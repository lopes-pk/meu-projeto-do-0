import { useState } from 'react';
import Button from '../Button';
import CampoFlutuante from '../CampoFlutuante';
import CampoTexto from '../CampoTexto';
import './formulario.css'

const Formulario = () => {

    const timesCampoFlutuante = [
        'DevOps',
        'Front-End',
        'UX & Desing',
        'Programação',
        'Data Science',
        'Mobile'
    ]

    const submit = event => event.preventDefault();

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={nome}
                    aoAlterado={valor => setNome(valor)}
                    required={true}/>
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    required={true} />
                <CampoTexto
                    label="Imagem"
                    placeholder="Coloque sua imagem"
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    required={true} />
                <CampoFlutuante
                    label="Time"
                    itens={timesCampoFlutuante}
                    value={time}
                    aoAlterado={valor => setTime(valor)}
                    required={true}
                     />
                <Button name="Criar Card" />
                

            </form>
        </section>
    );
}

export default Formulario;