import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    background-color: ${({ theme }) => theme.cardColor};
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .scroll-top{
        display: flex;
        justify-content: space-between;
        padding: 2rem 2rem 0 2rem;
    }

    .logo{
        width: 10rem;
    }

    .scroll-top button{
        padding: .6rem .7rem;
        background-color: ${({ theme }) => theme.colorLogo};
        border: none;
        cursor: pointer;

        :hover{
            background-color: ${({ theme }) => theme.subtitleColor};
        }
    }

    .icon-arrow{
        height: .8rem;
    }

    .main{
        padding: 2rem;
        border-bottom: solid 1px ${({ theme }) => theme.subtitleColor};
        border-top: solid 1px ${({ theme }) => theme.subtitleColor};
    }

    .form{
        border-bottom: solid 1px ${({ theme }) => theme.subtitleColor};
        padding-bottom: 2rem;
    }

    .form h4{
        font-weight: 500;
    }

    .form h4 span{
        color: ${({ theme }) => theme.colorLogo};
    }

    form{
        display: flex;
        flex-direction: column;
        gap: .3rem;
    }

    .form input{
        padding: .7rem;
        background-color: ${({ theme }) => theme.colorInput};
        border: none;
    }

    .form button{
        padding: .6rem;
        font-weight: 700;
        border: none;


        :hover{
            background-color: ${({ theme }) => theme.colorLogo};
            color: ${({ theme }) => theme.textColor};
            transition: .8s;
            cursor: pointer;
        }
    }

    .list{
        background-color: green;
    }

    .list h6{
        font-weight: 700;
    }

    .list ul{
        background-color: blue;
        
    }

    .list li{
        background-color: gray;
        list-style-type: none;

    }

    .list a{
        text-decoration: none;
        color: ${({ theme }) => theme.subtitleColor};

    }



    @media (min-width: 769px) {

        .scroll-top{
            padding: 2rem 4rem 0 4rem;

        }

        .main{
            display: flex;
        }

        .form{
            border-right: solid 1px ${({ theme }) => theme.subtitleColor};
            border-bottom: none;

        }
    }
` 