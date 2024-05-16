import styled from "styled-components";

const Main = styled.main`
    height: 100%;
    padding: 98px 17px 70px 17px;
    background-color: #f2f2f2;

    .texto-temporario{
        margin-top: 29px
    }

    .texto{

        margin-top: -25px;
        margin-bottom: 28px;
    }
    .tarefas-concluidas{
        color: #8FC549;
    }




`

const Titulo = styled.div`
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        color: white;
        font-size: 23px;
        width: 40px;
        height: 35px;
        border-radius: 5px;
    }



`

const ContainerElementos = styled.form`
    background-color: white;
    padding: 18px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;

    input{
        height: 45px;
        margin-bottom: 8px;
    }

    input::placeholder{
        font-size: 20px;
    }

    .botao-dia{
        width: 30px;
        height: 30px;
        border: 1px solid #D4D4D4;
        background-color: white;
        margin-right: 5px;
        color:#DBDBDB;
    }

    .selecionado{
        background-color: #CFCFCF;
        color: white;
    }

    .botoes-submissao{
        display: flex;
        width: 100%;
        margin-top: 29px;
        justify-content: end;

    }

    .botoes-submissao button{
        width: 84px;
        height: 35px;
    }

    .botao-salvar{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        color: white;
    }

    .botao-cancelar{
        background-color: white;
        color: #52B6FF;
        margin-right: 5px;
    }

    h2{
        margin-bottom: 8px;
    }

    .container-icone-lixo{
        position: absolute;
        right: 11px;
        top: 11px;
    }

`


const TarefasDoDia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container-marcar-concluido{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.tarefaconcluida === 'true' ? '#8FC549' : '#EBEBEB'};
        width: 69px;
        height: 69px;
        font-size: 60px;
        border-radius: 5px;
        color: white;
        font-weight: 700;

    }

    .container-marcar-concluido:hover{
        cursor: pointer;
    }

`



export {Main, Titulo, ContainerElementos, TarefasDoDia}