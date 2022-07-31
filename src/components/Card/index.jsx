import { ContainerCard } from "./style"

import imgArrow from './../../../public/assets/icons/arrow-white.svg'

export const Card = ({ astronaut,
                       name,
                       rkt,
                       img }) => {
  
  return (
    <>
      <ContainerCard>
      <div className="title">
        <h3>{astronaut}</h3>
        <img src={imgArrow} />
      </div>

      <div className="data">
        <span className="name">{name}</span>
        <span className="rkt">{rkt} RKT</span>
      </div>

      <img className="image" src={img} alt="Imagem de astronauta" />
      </ContainerCard>
    </>
  )
}