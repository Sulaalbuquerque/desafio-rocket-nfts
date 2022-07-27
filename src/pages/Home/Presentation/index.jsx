import { ContainerPresentation } from "./style"

import imgArtists from './../../../../public/assets/imgs/group-avarts.png'
import imgStampRocketseat from './../../../../public/assets/icons/badge.svg'

export const Presentation = () => {
  
    return (
      <>
        <ContainerPresentation>
          <div className="content-presentation">
            <p className="title">Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
            <div className="artists">
              <img src={imgArtists} alt='Imagem de artistas selecionados'/>
              <div className="details-artists">
                <span className="amount">+10</span>
                <span className="details">Artistas selecionados</span>
              </div>
            </div>
          </div>
          <div className="content-title">
            <h1>Descubra a verdadeira arte digital e colecione diversas <span className="detail-h1">NFTs</span></h1>
            <img className="stamp" src={imgStampRocketseat} alt="Selo rocketseat" />
          </div>
        </ContainerPresentation>
      </>
    )
  }