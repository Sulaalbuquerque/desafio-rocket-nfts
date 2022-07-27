import { ContainerGallery } from "./style"

import imgGaleria1 from './../../../../public/assets/imgs/galeria-1.png'
import imgGaleria2 from './../../../../public/assets/imgs/galeria-2.png'
import imgGaleria3 from './../../../../public/assets/imgs/galeria-3.png'
import imgGaleria4 from './../../../../public/assets/imgs/galeria-4.png'
import imgGaleria5 from './../../../../public/assets/imgs/galeria-5.png'
import imgGaleria6 from './../../../../public/assets/imgs/galeria-6.png'
import imgGaleria7 from './../../../../public/assets/imgs/galeria-7.png'
import imgGaleria8 from './../../../../public/assets/imgs/galeria-8.png'

export const Gallery = () => {
  
    return (
      <>
        <ContainerGallery>
          <ul>
            <li>
              <img src={imgGaleria1} />
            </li>
            <li>
              <img src={imgGaleria2} />
            </li>
            <li>
              <img src={imgGaleria3} />
            </li>
            <li>
              <img src={imgGaleria4} />
            </li>
            <li>
              <img src={imgGaleria5} />
            </li>
            <li>
              <img src={imgGaleria6} />
            </li>
            <li>
              <img src={imgGaleria7} />
            </li>
            <li>
              <img src={imgGaleria8} />
            </li>
          </ul>
        </ContainerGallery>
      </>
    )
  }