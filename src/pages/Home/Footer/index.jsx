import { ContainerFooter } from "./style"

import imgLogo from './../../../../public/assets/icons/logo.svg'
import iconArrow from './../../../../public/assets/icons/arrow-black.svg'
import iconInstagram from './../../../../public/assets/icons/instagram.svg'
import iconYoutube from './../../../../public/assets/icons/youtube.svg'
import iconTwitter from './../../../../public/assets/icons/twitter.svg'
import iconEmail from './../../../../public/assets/icons/email.svg'


export const Footer = () => {
  
    return (
      <>
        <ContainerFooter>
          <div className="scroll-top">
            <img className="logo" src={imgLogo} alt="Logomarca" />
            <button>
              <img className="icon-arrow" src={iconArrow} />
            </button>
          </div>

          <div className="main">
            <div className="form">
              <h4>Fique por dentro de <span>todas as novidades</span></h4>
              <form action="">
                <input type="text" placeholder="nft@rocketseat.com.br"/>
                <button>Enviar</button>
              </form>
            </div>

            <div className="nav">
              <div className="list">
                <h6>Empresa</h6>
                <ul>
                  <li>
                    <a href="#">Sobre</a>
                  </li>
                  <li>
                    <a href="#">Serviços</a>
                  </li>
                  <li>
                    <a href="#">Time</a>
                  </li>
                  <li>
                    <a href="#">Carreira</a>
                  </li>
                </ul>
              </div>

              <div className="list">
                <h6>Empresa</h6>
                <ul>
                  <li>
                    <a href="#">Sobre</a>
                  </li>
                  <li>
                    <a href="#">Serviços</a>
                  </li>
                  <li>
                    <a href="#">Time</a>
                  </li>
                  <li>
                    <a href="#">Carreira</a>
                  </li>
                </ul>
              </div>

              <div className="list">
                <h6>Empresa</h6>
                <ul>
                  <li>
                    <a href="#">Sobre</a>
                  </li>
                  <li>
                    <a href="#">Serviços</a>
                  </li>
                  <li>
                    <a href="#">Time</a>
                  </li>
                  <li>
                    <a href="#">Carreira</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact">
            <span>www.rocketseat.com.br</span>
            <ul>
              <li>
                <a href="#">
                  <img src={iconInstagram}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconYoutube}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconTwitter}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconEmail}/>
                </a>
              </li>
            </ul>
          </div>
        </ContainerFooter>
      </>
    )
  }