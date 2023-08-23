import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

function Carrousel(props) {
  return (
    <Carousel>
      {props.items.map(carrousel => (
        <Carousel.Item>
          <Image
            height={200}
            style={{ maxWidth: '100%' }}
            src={carrousel.thumbnail}
          />
          {carrousel.titleCaption && (
            <Carousel.Caption>
              <h3>{carrousel.titleCaption}</h3>
              <p>{carrousel.descricaoCaption}</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carrousel
