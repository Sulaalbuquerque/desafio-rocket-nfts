import styled from 'styled-components'

export const ContainerPresentation = styled.section`
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .content-presentation{
        display: flex;
        gap: 1rem;
    }

    .title{
        font-size: 1rem;
        line-height: 1.38rem;
    }

    .artists{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .artists img{
        height: 3rem;
    }

    .amount{
        font-weight: 700;
        font-size: 1rem;
    }

    .details{
        font-size: .8rem;
    }

    h1{
        font-weight: 700;
        font-size: 1.5rem;
    }

    .detail-h1{
        color: ${({ theme }) => theme.colorLogo};

    }

    .content-title{
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .content-title h1{
        line-height: 2.3rem;
    }

    .stamp{
        height: 5rem;
    }

    @media (min-width: 769px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 4rem;
        padding: 2rem 4rem;

        .content-presentation{
            flex-direction: column;
            width: 40%;
        }

        .artists{
            flex-direction: row;
            align-items: flex-end;
        }

        .details-artists{
            display: flex;
            flex-direction: column;
        }

        .content-title{
            width: 60%;
            gap: 2rem;
        }

        .stamp{
            height: 7rem;
        }
    }
` 