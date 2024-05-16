export default function GerenciadorInput({ valoresInput, setValoresInput, carregando }) {

    const chavesInputs = Object.keys(valoresInput)

    return (
        chavesInputs.map((chave, index) => {
            let tipo = ''
            let min_valor=0

            if (chave==='email'){
                tipo = 'email'
                min_valor=7
            }else if(chave==='senha'){
                tipo = 'password'
                min_valor=6
            }else if(chave==='link foto'){
                tipo = 'link'
                min_valor = 10
            }
            else{
                tipo = 'text'
                min_valor = 5
            }

            return (
                tipo!=='link'?
                <input
                    key={index}
                    type={tipo}
                    value={valoresInput[chave]}
                    onChange={(event) => {
                        const valor = event.target.value
                        setValoresInput({ ...valoresInput, [chave]: valor })
                    }}
                    placeholder={chave}
                    required
                    minLength={min_valor}
                    disabled={carregando}
                />
                :
                <input
                    key={index}
                    type={tipo}
                    value={valoresInput[chave]}
                    onChange={(event) => {
                        const valor = event.target.value
                        setValoresInput({ ...valoresInput, [chave]: valor })
                    }}
                    placeholder={chave}
                    minLength={min_valor}
                    disabled={carregando}
                />
            )
        }))
}

