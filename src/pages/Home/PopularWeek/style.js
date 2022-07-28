import styled from 'styled-components'

export const ContainerPopularWeek = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h1{
        padding: 3rem 0;
    }
    
    h1 span{
        color: ${({ theme }) => theme.colorLogo};
    }

    .main{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .cards{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        max-width: 75rem;
    }

    .cards hr{
        display: none;
        width: 60%;
        transform: rotate(90deg);
        position: absolute;
        left: 20%;
        border-color: ${({ theme }) => theme.subtitleColor};
    }

    @media (min-width: 769px) {
        padding: 2rem 4rem;

        .cards{
            position: relative;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .cards hr{
            display: block;
        }
    }

    @media (min-width: 1153px) {
        h1{
            font-size: 2rem;
        }

        .cards hr{
            width: 48rem;
            left: 18%;
        }
    }
` 