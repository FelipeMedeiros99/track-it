export default function AdicionarTarefas({inputs, setInputs}){
    
    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return(
        <>
        {Object.keys(inputs).map((contador, index)=>(
            <form key={index} className="container-adicionar-tarefa">
                <input type="text" 
                    value={inputs[contador]}
                    onChange={(event)=>{
                        let copiaDadosInputs = {...inputs}
                        copiaDadosInputs[contador] = event.target.value
                        setInputs({...copiaDadosInputs})
                    }}
                    required
                />
                
                <div className="botoes-semana">
                    {semana.map((dia, index2)=>(
                        <button type='button' key={index2}>{dia}</button>
                    ))}
                </div>

                <div className="botoes-submissao">
                    <button 
                        type="button"
                        onClick={()=>{
                            let copiaDadosInputs = {...inputs}
                            delete copiaDadosInputs[contador]
                            setInputs({...copiaDadosInputs})
                    }}>Cancelar</button>


                    <button>Salvar</button>
                </div>

            </form>
        ))}
    </>
    )
}
