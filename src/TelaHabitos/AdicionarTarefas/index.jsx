import axios from "axios"
import styled from "styled-components"
import { useContext } from "react"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"

import { Contexto } from "../../Contexto"
import { ContainerElementos } from "../../assets/estiloDemaisPaginas"

export default function AdicionarTarefas({inputs, setInputs, salvarListaDeHabitos}){

    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const {dados, setDados} = useContext(Contexto)
    const [carregando, setCarregando] = useState(false)

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
            setCarregando(false)
            apagarTarefa(chaveInput)
            salvarListaDeHabitos()
        })
        
        .catch((data)=>{
            console.log('erro ao salvar tarefa: ', data.response)
            setCarregando(false)

        })
    }


    return(
        <>
        {Object.keys(inputs).map((chaveInput, index)=>(
            <ContainerElementos key={index}>
                <input type="text" 
                    value={inputs[chaveInput].texto}
                    onChange={(event)=>{
                        let copiaDadosInputs = {...inputs}
                        copiaDadosInputs[chaveInput].texto = event.target.value
                        setInputs({...copiaDadosInputs})
                    }}
                    required
                    disabled={carregando}
                    placeholder="nome do hábito"
                />
                
                <div className="container-botoes-semana">
                    {semana.map((dia, index2)=>{
                        
                        let botaoSelecionado = inputs[chaveInput].dias.indexOf(index2)!==-1
                        
                        return(
                        <button 
                            className={botaoSelecionado?'selecionado botao-dia':'botao-dia'}
                            type='button' 
                            key={index2}
                            onClick={()=>selecionarDia(chaveInput, index2)}    
                            disabled={carregando}

                            >{dia}</button>
                        )
                    })}
                </div>

                <div className="botoes-submissao">
                    <button 
                        className="botao-cancelar"
                        disabled={carregando}
                        type="button"
                        onClick={()=>apagarTarefa(chaveInput)}>Cancelar</button>
                    <button 
                        className="botao-salvar"
                        disabled={carregando}
                        onClick={(event)=>{
                            salvarDados(event, chaveInput)
                            setCarregando(true)
                            }}>
                                {carregando?
                                (<ThreeDots 
                                    color="white"
                                    width={51}
                                />):
                                (<>Salvar</>)}
                        </button>
                </div>

            </ContainerElementos>
        ))}
    </>
    )
}


