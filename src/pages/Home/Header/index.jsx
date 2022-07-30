import { useEffect, useState } from "react"

import { Menu } from "./Menu"
import { MenuMobile } from "./MenuMobile"

import { ContainerHeader } from "./style"

import imgLogo from './../../../../public/assets/icons/logo.svg'
import iconButton from './../../../../public/assets/icons/logo_MetaMask.svg'

export const Header = () => {

  const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false)
  
  useEffect(() => {

    if (menuMobileIsVisible){
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }

  },[menuMobileIsVisible])

  return (
    <>
      <ContainerHeader>
        <img className="logo" src={imgLogo} alt='Logomarca'/>
        <Menu/>

        <div className="buttons">
          <button className="connect">
            <div className="icon">
              <img src={iconButton}/>
            </div>
            <span className="content-button">Conectar carteira</span>
          </button>

          <button 
            onClick={() => setMenuMobileIsVisible(true)}
            className="menu-mobile"
          >Menu</button>
        </div>

        <MenuMobile
          isVisibleMenuMobile={menuMobileIsVisible}
          setIsVisibleMenuMobile={setMenuMobileIsVisible}
        />

      </ContainerHeader>
    </>
  )
}