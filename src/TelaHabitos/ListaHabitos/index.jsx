export default function ListaHabitos({ listaHabitos }) {
    return (
        <>
            {listaHabitos.length === 0 ? (
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>) :
                (listaHabitos.map((habito, index) => {
                    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
                    return (
                        <div key={index} className="container-tarefas">
                            <h2>{habito.name}</h2>
                            {semana.map((siglaDoDia, index2) => {
                                const diaEstaSelecionado = habito.days.indexOf(index2) !== -1
                                return (
                                    <button key={index2} disabled className={diaEstaSelecionado ? 'selecionado' : ''}>{siglaDoDia}</button>
                                )
                            })}
                        </div>
                    )})
                )
            }
        </>
    )
}