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
        border-bottom: solid 1px ${({ theme }) => theme.subtitleColor};
        border-top: solid 1px ${({ theme }) => theme.subtitleColor};
    }

    .form{
        border-bottom: solid 1px ${({ theme }) => theme.subtitleColor};
        padding-bottom: 2rem;
        padding: 2rem;
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
            transition: .7s;
            cursor: pointer;
        }
    }

    .nav{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .list{
        padding: 2rem;
    }

    .list h6{
        font-weight: 700;
        font-size: .8rem;
    }

    .list ul{
        padding-left: 0;
    }

    .list li{
        padding: .5rem 0;
        list-style-type: none;
    }

    .list a{
        text-decoration: none;
        color: ${({ theme }) => theme.subtitleColor};

        :hover{
            color: ${({ theme }) => theme.colorLogo};
            transition: .7s;
        }
    }

    .contact{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        color: ${({ theme }) => theme.subtitleColor};
    }

    .contact ul{
        display: flex;
        gap: 1.5rem;
        padding-left: 0;
    }

    .contact li{
        list-style-type: none;
    }

    .contact img{
        height: 1.5rem;

        :hover{
            height: 2rem;
        }
    }

    @media (min-width: 769px) {

        .scroll-top{
            padding: 2rem 4rem 0 4rem;
        }

        .nav{
            width: 65%;
            display: flex;
            justify-content: space-around;
        }

        .main{
            display: flex;
        }

        .form{
            border-right: solid 1px ${({ theme }) => theme.subtitleColor};
            border-bottom: none;
            width: 35%;
        }

        .list{
            padding: 1.7rem;
        }

        .contact{
            padding: 0 4rem 1rem 4rem;
            flex-direction: row;
            justify-content: space-between;
        }
    }
` 