import { CardArtist } from "../../../components/CardArtist"

import { ContainerBestArtists } from "./style"

import iconArrow from './../../../../public/assets/icons/arrow-orange.svg'
import dataCardsArtist from './../../../../public/data/data.json'

export const BestArtists = () => {
  
    return (
      <>
        <ContainerBestArtists>
          <div className="main">
            <h2>Melhores <span>artistas</span></h2>

            <div className="cards">
              <CardArtist
                img={dataCardsArtist.cardsArtist[0].image}
                name={dataCardsArtist.cardsArtist[0].name}
                photographs={dataCardsArtist.cardsArtist[0].photographs}
              />
              <CardArtist
                img={dataCardsArtist.cardsArtist[1].image}
                name={dataCardsArtist.cardsArtist[1].name}
                photographs={dataCardsArtist.cardsArtist[1].photographs}
              />
              <CardArtist
                img={dataCardsArtist.cardsArtist[2].image}
                name={dataCardsArtist.cardsArtist[2].name}
                photographs={dataCardsArtist.cardsArtist[2].photographs}
              />
              <CardArtist
                img={dataCardsArtist.cardsArtist[3].image}
                name={dataCardsArtist.cardsArtist[3].name}
                photographs={dataCardsArtist.cardsArtist[3].photographs}
              />
              <CardArtist
                img={dataCardsArtist.cardsArtist[4].image}
                name={dataCardsArtist.cardsArtist[4].name}
                photographs={dataCardsArtist.cardsArtist[4].photographs}
              />
              <CardArtist
                img={dataCardsArtist.cardsArtist[5].image}
                name={dataCardsArtist.cardsArtist[5].name}
                photographs={dataCardsArtist.cardsArtist[5].photographs}
              />
            </div>

            <button>
              Ver todos os artistas
              <img src={iconArrow}/>
            </button>
          </div>
        </ContainerBestArtists>
      </>
    )
  }