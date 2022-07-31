import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerMenuMobile = styled.div`
    background-color: ${({ theme }) => theme.colorInput};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .97;
    display: none;
    padding: 2rem;
    font-size: 1.5rem;

    .close{
        display: flex;
        justify-content: flex-end;
    }

    .content{
        display: flex;
        justify-content: center;
    }

    button{
        border: none;
        margin-bottom: 6rem;
        color: ${({ theme }) => theme.colorLogo};
        font-weight: 900;
        cursor: pointer;
        padding: .5rem .8rem;

        :hover{
            transition: .7s;
            background-color: ${({ theme }) => theme.colorLogo};
            color: ${({ theme }) => theme.subtitleColor};
        }
    }

    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding-left: 0;
        width: 100%;
    }

    li{
        list-style-type: none;
    }

    a{
       text-decoration: none;
        color: ${({ theme }) => theme.textColor};
        padding: 1rem;

        :hover{
            transition: .7s;
            color: ${({ theme }) => theme.colorLogo};
        }
    }

    ${({ isVisibleMenuMobile }) => isVisibleMenuMobile && css`
        display: block;
        overflow-Y: hidden;
    `}
` 