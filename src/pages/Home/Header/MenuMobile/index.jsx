import { ContainerMenuMobile } from "./style"

export const MenuMobile = ({ isVisibleMenuMobile, setIsVisibleMenuMobile }) => {

    return (
      <>
        <ContainerMenuMobile 
          isVisibleMenuMobile={isVisibleMenuMobile}
          setIsVisibleMenuMobile={setIsVisibleMenuMobile}
        >
          <div className="close">
            <button
              onClick={() => setIsVisibleMenuMobile(false)}
            >
              X
            </button>
          </div>
          
          <div className="content">
            <div className="list">
              <ul>
                <li>
                  <a href="#">Comprar NFT</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        
        </ContainerMenuMobile>
      </>
    )
  }