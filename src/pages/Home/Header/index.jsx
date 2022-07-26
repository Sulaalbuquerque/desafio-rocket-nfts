import { Menu } from "./Menu"

import { ContainerHeader } from "./style"

import imgLogo from './../../../../public/assets/icons/logo.svg'
import iconButton from './../../../../public/assets/icons/logo_MetaMask.svg'

export const Header = () => {
  
    return (
      <>
        <ContainerHeader>
          <img className="logo" src={imgLogo} alt='Logomarca'/>
          <Menu/>
          <button>
            <img src={iconButton}/>
            <span className="content-button">Conectar carteira</span>
          </button>
        </ContainerHeader>
      </>
    )
  }