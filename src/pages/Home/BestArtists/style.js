import styled from 'styled-components'

export const ContainerBestArtists = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    h2 span{
        color: ${({ theme }) => theme.colorLogo};
    }

    .cards{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    button{
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background: none;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.textColor};
    }

    button:hover{
        transition: 1s;
        background-color: ${({ theme }) => theme.cardColor};
    }

    @media (min-width: 769px) {
        padding: 2rem 4rem;

        h2{
            font-size: 2rem;
        }

        .cards{
            gap: 3rem;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    @media (min-width: 1153px) {

        .main{
            width: 65rem;
        }

        .cards{
            gap: 5rem;
        }
    }
` 