import styled from 'styled-components'

export const ContainerGallery = styled.section`
    padding: 1rem 2rem;

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
    }

    li{
        list-style-type: none;
        margin: .8rem .2rem;

        :hover{
            transform: scale(1.15);
            transition: .7s;
        }
    }

    img{
        height: 5rem;
        cursor: pointer;
        border: solid 2px ${({ theme }) => theme.cardColor};
    }

    img:hover{
        transition: .7s;
        border: solid 2px ${({ theme }) => theme.colorLogo};
    }

    @media (max-width: 430px) {
        ul{
            justify-content: center;
        }

        img{
            height: 8rem;
        }

        li{
            margin: .5rem;
        }
    }

    @media (min-width: 730px) {
        li{
            width: 20%;
        }

        img{
            width: 100%;
            height: 100%;
        }
    }

    @media (min-width: 769px) {
        padding: 1rem 3rem;
    }
` 