import styled from 'styled-components'

export const ContainerDescription = styled.section`
    padding-top: 2rem;
    border-bottom: solid 2px ${({ theme }) => theme.subtitleColor};

    .data{
        display: flex;
        justify-content: space-around;
    }

    .content-data{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content-data strong{
        font-weight: 600;
        font-size: 1.8rem;
    }

    .content-data span{
        color: ${({ theme }) => theme.subtitleColor};
    }

    .content-text{
        padding: .5rem 1rem;
        margin-bottom: 1rem;
    }

    .content-text p{
        line-height: 1.35rem;
    }

    .content-text a{
        color: ${({ theme }) => theme.textColor};
    }

    .content-text .emphasis{
        color: ${({ theme }) => theme.colorLogo};
    }

    .content-description img{
        width: 100%;
    }

    @media (min-width: 769px) {
        display: flex;

        .data{
            flex-direction: column;
            padding: 2rem;
        }

        .content-text{
            padding: 0;
            display: flex;
        }

        .first,
        .second{
            padding: 2rem;
        }
    }
` 