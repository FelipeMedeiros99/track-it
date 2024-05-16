import styled from "styled-components"

const TelaInicial = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 68px 36px  0 36px;

form{
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

input{
    margin-bottom:6px;
}


input::placeholder{
    font-size:20px;
    font-weight: 400;
}


button{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    color: white;
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 25px;
}

input, button{
    width: 100%;
    max-width: 500px;
    height: 45px;
}

.nao-encontrado{
    color: #f33939b7;
    
    font-style: italic;
}

`

export default TelaInicial