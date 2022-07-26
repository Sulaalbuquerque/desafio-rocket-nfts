import styled from 'styled-components'

export const ContainerMenu = styled.div`
    display: none;

    ul{
        display: flex;
        gap: 2rem;
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.textColor};
        font-size: 1rem;
    }

    a:hover{
        color: ${({ theme }) => theme.colorLogo};
    }

    @media (min-width: 769px) {
        display: flex;
    }
` 