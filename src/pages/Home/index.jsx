import { BestArtists } from "./BestArtists"
import { Description } from "./Description"
import { Gallery } from "./Gallery"
import { Header } from "./Header"
import { PopularWeek } from "./PopularWeek"
import { Presentation } from "./Presentation"
import { ContainerHome } from "./style"

export const Home = () => {
  
    return (
      <>
        <ContainerHome>
            <div className="background-img">
              <Header/>
              <Presentation/>
              <Gallery/>
            </div>
            <Description/>
            <PopularWeek/>
            <BestArtists/>
        </ContainerHome>
      </>
    )
  }