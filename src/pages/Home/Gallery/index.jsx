import { ContainerGallery } from "./style"

import imgGaleria1 from './../../../../public/assets/imgs/galeria-1.webp'
import imgGaleria2 from './../../../../public/assets/imgs/galeria-2.webp'
import imgGaleria3 from './../../../../public/assets/imgs/galeria-3.webp'
import imgGaleria4 from './../../../../public/assets/imgs/galeria-4.webp'
import imgGaleria5 from './../../../../public/assets/imgs/galeria-5.webp'
import imgGaleria6 from './../../../../public/assets/imgs/galeria-6.webp'
import imgGaleria7 from './../../../../public/assets/imgs/galeria-7.webp'
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