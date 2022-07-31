import styled from 'styled-components'

export const ContainerCardArtist = styled.div`
    background-color: green;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.cardColor};
    min-width: 15rem;

    :hover{
        transition: .7s;
        background-color: ${({ theme }) => theme.colorLogo};
        cursor: pointer;

        .photographs{
            transition: .7s;
            color: ${({ theme }) => theme.textColor};
        }
    }

    .name{
        font-weight: 500;
        line-height: 1.6rem;
    }

    .photographs{
        color: ${({ theme }) => theme.colorLogo};
        font-weight: 500;
    }
` 