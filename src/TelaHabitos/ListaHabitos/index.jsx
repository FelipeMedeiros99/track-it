import axios from "axios"

import { Contexto } from "../../Contexto"
import { useContext } from "react"

export default function ListaHabitos({ setListaHabitos, listaHabitos }) {

    function deletarHabitoDaTela(id) {
        const copiaHabitos = [...listaHabitos]
        for (let i = 0; i < copiaHabitos.length; i++) {
            if (copiaHabitos[i].id === id) {
                copiaHabitos.splice(i, 1)
            }
        }
        setListaHabitos([...copiaHabitos])
    }


    function deletarHabito(habito) {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}`
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }

        deletarHabitoDaTela(habito.id)
        axios.delete(URL, config)
            .then((data) => atualizarDados())
            .catch((data) => console.log('deu erro: ', data.response))
    }


    const { dados, atualizarDados } = useContext(Contexto)


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
                            <ion-icon name="trash-outline" onClick={() => deletarHabito(habito)}></ion-icon>
                        </div>
                    )
                })
                )
            }
        </>
    )
}