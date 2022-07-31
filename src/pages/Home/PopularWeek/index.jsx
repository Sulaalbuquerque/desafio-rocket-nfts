import { Card } from "../../../components/Card"
import { ContainerPopularWeek } from "./style"

import dataCards from './../../../../public/data/data.json'

export const PopularWeek = () => {
  
  return (
    <>
      <ContainerPopularWeek>
        <div className="main">
          <h1><span>Populares</span> da semana</h1>
            
          <div className="cards">
            <hr />
            <Card
              astronaut={dataCards.cards[0].astronaut}
              name={dataCards.cards[0].name}
              rkt={dataCards.cards[0].rkt}
              img={dataCards.cards[0].image}
            />
            <Card
              astronaut={dataCards.cards[1].astronaut}
              name={dataCards.cards[1].name}
              rkt={dataCards.cards[1].rkt}
              img={dataCards.cards[1].image}
            />
            <Card
              astronaut={dataCards.cards[2].astronaut}
              name={dataCards.cards[2].name}
              rkt={dataCards.cards[2].rkt}
              img={dataCards.cards[2].image}
            />
            <Card
              astronaut={dataCards.cards[3].astronaut}
              name={dataCards.cards[3].name}
              rkt={dataCards.cards[3].rkt}
              img={dataCards.cards[3].image}
            />
          </div>
        </div>
              
      </ContainerPopularWeek>
    </>
  )
}