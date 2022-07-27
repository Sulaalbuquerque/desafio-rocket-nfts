import styled from 'styled-components'

export const ContainerHeader = styled.header`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .logo{
        height: 1.2rem;
    }

    button{
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: .3rem .5rem;
        font-weight: 700;
        cursor: pointer;
        font-size: .68rem;
    }

    button:hover{
        background-color: ${({ theme }) => theme.colorLogo};
        color: ${({ theme }) => theme.textColor};
    }

    button img{
        height: 1.4rem;
    }

    .content-button{
        display: none;
    }

    @media (min-width: 769px) {
        padding: 2rem 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .logo{
            height: 1.4rem;
        }

        .content-button{
            display: block;
        }
    }
` 