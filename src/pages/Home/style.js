import styled from 'styled-components'

export const ContainerHome = styled.div`
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};

    .background-img{
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
    }
` 