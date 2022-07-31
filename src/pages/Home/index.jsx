import { Header } from "./Header"
import { Presentation } from "./Presentation"
import { Gallery } from "./Gallery"
import { Description } from "./Description"
import { PopularWeek } from "./PopularWeek"
import { BestArtists } from "./BestArtists"
import { Footer } from "./Footer"

import { ContainerHome } from "./style"

import imgBackground from './../../../public/assets/imgs/background.webp'

export const Home = () => {
  
  return (
    <>
      <ContainerHome>
        <div 
          className="background-img" 
          style={{backgroundImage: `url(${imgBackground})`}}
        >
          <Header/>
          <Presentation/>
          <Gallery/>
        </div>
        <Description/>
        <PopularWeek/>
        <BestArtists/>
        <Footer/>
      </ContainerHome>
    </>
  )
}