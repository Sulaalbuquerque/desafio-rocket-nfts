import { ContainerDescription } from "./style"

import imgDescription from './../../../../public/assets/imgs/banner2.png'

export const Description = () => {
  
    return (
      <>
        <ContainerDescription>
          <div className="data">
            <div className="content-data">
              <strong>10K+</strong>
              <span>Artes</span>
            </div>
            <div className="content-data">
              <strong>200+</strong>
              <span>Vendas</span>
            </div>
            <div className="content-data">
              <strong>20</strong>
              <span>Artistas</span>
            </div>
          </div>

          <div className="content-description">
            <div className="content-text">
              <div className="first">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="#" className="emphasis">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                <a href="#">Lorem ipsum</a>
              </div>
              <div className="second">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="#" className="emphasis">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                <a href="#">Lorem ipsum</a>
              </div>
            </div>
            <img src={imgDescription}/>
          </div>
        </ContainerDescription>
      </>
    )
  }