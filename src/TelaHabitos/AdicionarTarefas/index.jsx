import styled from "styled-components"

export default function AdicionarTarefas({inputs, setInputs}){

    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

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
                        onClick={()=>{
                            let copiaDadosInputs = {...inputs}
                            delete copiaDadosInputs[chaveInput]
                            setInputs({...copiaDadosInputs})
                    }}>Cancelar</button>


                    <button>Salvar</button>
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