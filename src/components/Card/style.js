import styled from 'styled-components'

export const ContainerCard = styled.div`
    max-width: 18rem;
    padding: .5rem;

    :hover{
        transition: .7s;
        cursor: pointer;
        background-color: ${({ theme }) => theme.cardColor};
    }

    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title h3{
        font-weight: 500;
    }

    .title img{
        height: 1.2rem;
    }

    .data{
        display: flex;
        justify-content: space-between;
        padding: 1rem .3rem 1.5rem 0;
    }

    .data .name{
        font-weight: 600;
        font-size: .8rem;
        color: ${({ theme }) => theme.subtitleColor};
    }

    .data .rkt{
        color: ${({ theme }) => theme.colorLogo};
    }

    .image{
        width: 100%;
    }

    @media (min-width: 769px) {
        max-width: 17rem;
    }

    @media (min-width: 1056px) {
        max-width: 20rem;
    }

    @media (min-width: 1153px) {
        min-width: 25rem;
    }

    

` 