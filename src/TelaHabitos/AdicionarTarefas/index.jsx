import axios from "axios"
import styled from "styled-components"
import { useContext } from "react"

import { Contexto } from "../../Contexto"

export default function AdicionarTarefas({inputs, setInputs, salvarListaDeHabitos}){

    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const {dados, setDados} = useContext(Contexto)

    function apagarTarefa(chaveInput){
        let copiaDadosInputs = {...inputs}
        delete copiaDadosInputs[chaveInput]
        setInputs({...copiaDadosInputs})
    }

    function selecionarDia(chaveInput, index2){
        let copiaDias = inputs[chaveInput].dias
        let endereco = copiaDias.indexOf(index2)
        if(endereco===-1){
            copiaDias.push(index2)
        }else{
            copiaDias.splice(endereco, 1)
        }
        copiaDias.sort()
        
        let copiaInputs = {...inputs}
        copiaInputs[chaveInput].dias = copiaDias
        setInputs(copiaInputs)
    }

    function salvarDados(event, chaveInput){
        event.preventDefault()
        const tarefaSelecionada = inputs[chaveInput]
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const nome = tarefaSelecionada.texto
        const dias = tarefaSelecionada.dias
        const modeloParaEnviar = {name: nome, days:dias}
        
        axios.post(URL, modeloParaEnviar, {
            headers:{
                Authorization:`Bearer ${dados.token}`
            }
        })

        .then((data)=>{
            console.log('tarefa adicionada')
            apagarTarefa(chaveInput)
            salvarListaDeHabitos()
        })
        
        .catch((data)=>console.log('erro ao salvar tarefa: ', data.response))
    }


    return(
        <>
        {Object.keys(inputs).map((chaveInput, index)=>(
            <form key={index} className="container-adicionar-tarefa">
                <input type="text" 
                    value={inputs[chaveInput].texto}
                    onChange={(event)=>{
                        let copiaDadosInputs = {...inputs}
                        copiaDadosInputs[chaveInput].texto = event.target.value
                        setInputs({...copiaDadosInputs})
                    }}
                    required
                />
                
                <BotoesSemana>
                    {semana.map((dia, index2)=>{
                        
                        let botaoSelecionado = inputs[chaveInput].dias.indexOf(index2)!==-1
                        
                        return(
                        <button 
                            className={botaoSelecionado?'selecionado':''}
                            type='button' 
                            key={index2}
                            onClick={()=>selecionarDia(chaveInput, index2)}    
                            
                            >{dia}</button>
                        )
                    })}
                </BotoesSemana>

                <div className="botoes-submissao">
                    <button 
                        type="button"
                        onClick={()=>apagarTarefa(chaveInput)}>Cancelar</button>

                    <button onClick={(event)=>salvarDados(event, chaveInput)}>Salvar</button>
                </div>

            </form>
        ))}
    </>
    )
}


const BotoesSemana = styled.div`
    .selecionado{
        background-color: #3180c5;
    }

`