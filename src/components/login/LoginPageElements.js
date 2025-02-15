import styled from "styled-components";

export const DivRow = styled.div`
    display: flex;
`

export const DivColumn = styled.div`
    flex: 100%;
`

export const Image = styled.img`
    display: flex;
    width: 191px;
    height: 56px;
    margin: 41px;
`

export const Div = styled.section`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: #343A40;
    margin: 167px 56px 64px;
`

export const Text = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    margin: 28px 56px 3.5px;
`

export const Input = styled.input`
    width: 477px;
    height: 24px;
    color: #9BADBF;
    border-left: none;
    border-top: none;
    border-right: none;    
    border-bottom-width: 1px;
    border-bottom-color: #000000;
    margin: 2px 56px 2px;
    ::placeholder,
    ::-webkit-input-placeholder{
        color: #9BADBF
    }

`

export const Button = styled.button`    
    width: 477px;
    height: 42px;
    background: #009FC7;
    color: #FFFFFF;
    border: none;
    margin: 46px 56px 24px;
`

export const Forget = styled.p`
    color: #009FC7;
    margin: 24px 56px;
`
export const CenterCarousel = styled.div`
    display:flex;
    align-items: center;
    width: 100%;  
    height: 100vh; 
    img {
        width: 100%;  
        height: 100vh; 
    }
`