import imgPerfil from '../../assets/images/perfil.jpeg'
import Image from 'next/image'

export default function Avatar(props) {
  const perfil = props.perfil
  return (
    <>
      <Image
        className='rounded-circle mb-2'
        src={imgPerfil}
        alt='Imagem de Diego com barba e dreads'
        width={250}
        height={250}
      />
      <h2 className='mb-0'>{perfil?.name}</h2>
      <p>
        <small>
          {perfil?.atual_position?.name}
        </small>
      </p>
    </>
  )
}
