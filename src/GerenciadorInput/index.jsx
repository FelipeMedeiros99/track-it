export default function GerenciadorInput({ valoresInput, setValoresInput }) {

    const chavesInputs = Object.keys(valoresInput)

    return (
        chavesInputs.map((chave, index) => (
            <input
                key={index}
                type="text"
                value={valoresInput[chave]}
                onChange={(event) => {
                    const valor = event.target.value
                    setValoresInput({ ...valoresInput, [chave]: valor })
                }}
                placeholder={chave}
            />
        ))

    )
}

