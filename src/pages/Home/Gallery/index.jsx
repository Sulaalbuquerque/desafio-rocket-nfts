import { ContainerGallery } from "./style"

import data from './../../../../public/data/data.json'

export const Gallery = () => {
  
  return (
    <>
      <ContainerGallery>
        <ul>
          <li>
            <img src={data.imgGallery[0].gallery1} />
          </li>
          <li>
            <img src={data.imgGallery[1].gallery2} />
          </li>
          <li>
            <img src={data.imgGallery[2].gallery3} />
          </li>
          <li>
            <img src={data.imgGallery[3].gallery4} />
          </li>
          <li>
            <img src={data.imgGallery[4].gallery5} />
          </li>
          <li>
            <img src={data.imgGallery[5].gallery6} />
          </li>
          <li>
            <img src={data.imgGallery[6].gallery7} />
          </li>
          <li>
            <img src={data.imgGallery[7].gallery8} />
          </li>
        </ul>
      </ContainerGallery>
    </>
  )
}