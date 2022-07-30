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

    .buttons{
        display: flex;
    }

    .connect{
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: .3rem .5rem;
        font-weight: 700;
        cursor: pointer;
        font-size: .68rem;
        border: none;
    }

    .connect:hover{
        transition: 1s;
        background-color: ${({ theme }) => theme.colorLogo};
        color: ${({ theme }) => theme.textColor};
    }

    .connect img{
        height: 1.7rem;
    }

    .content-button{
        display: none;
    }

    .menu-mobile{
        margin-left: 1rem;
        border: none;
        padding: .8rem;
        background-color: ${({ theme }) => theme.subtitleColor};
        color: ${({ theme }) => theme.textColor};

        :hover{
            transition: .8s;
            background-color: ${({ theme }) => theme.colorLogo};
        }
    }

    @media (max-width: 375px) {
        .buttons{
            flex-direction: column;
            gap: 1rem;
        }

        .connect{
            max-width: 3rem;
        }

        .buttons{
            justify-content: center;
            align-items: center;
        }

        .menu-mobile{
            margin-left: 0;
        }
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

        .menu-mobile{
            display: none;
        }
    }
` 