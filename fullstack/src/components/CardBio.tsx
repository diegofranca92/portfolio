import { Card, Stack } from 'react-bootstrap'
import IconsLink from './IconLink'
import { useEffect, useState } from 'react'

export default function CardBio(props) {
  // const [bio, setBio] = useState('')
  const perfil = props.perfil
  // let halfBio = perfil.bio.slice(0, 432)
  // useEffect(() => {
  //   setBio(halfBio)
  // }, [])
  return (
    <Card bg='secondary'>
      <Stack gap={2}>
        <Card.Body className='text-light'>
          <Card.Title>Um pouco sobre mim</Card.Title>
          {perfil?.bio}
          {/* <button onClick={() => setBio(perfil?.bio)}>Ver mais</button> */}
          <IconsLink />
        </Card.Body>
      </Stack>
    </Card>
  )
}
