import { ContainerCardArtist } from "./style"

export const CardArtist = ({ img,
                             name,
                             photographs }) => {
  
    return (
      <>
        <ContainerCardArtist>
          <img src={img} alt="Imagem do artista" />
          <div className="informations">
            <span className="name">{name}</span>
            <br />
            <span className="photographs">{photographs} Fotografias</span>
          </div>
        </ContainerCardArtist>
      </>
    )
  }