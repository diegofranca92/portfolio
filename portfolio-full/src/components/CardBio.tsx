import { Avatar, Card, CardBody, Typography } from '@material-tailwind/react'
import IconsLink from './IconLink'
import { Profile } from '~/schemas/profile';
import imgPerfil from '~/assets/images/perfil.jpeg'
interface CardProps {
  profile: Profile
}

export default function CardBio({ profile }: CardProps) {
  return (
    <div className="flex gap-8 mx-8">
      <div className='w-4/12 text-center'>
        <Avatar className='w-[250px] h-[250px]' src={imgPerfil.src} />
        <Typography variant="h2" color='white'>{profile.name}</Typography>
        <Typography variant="h6" color="gray" className="font-normal">
          {profile.role}
        </Typography>
      </div>
      <Card color='blue-gray'>
        <CardBody className='text-light'>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Um pouco sobre mim
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            {profile?.bio}
          </Typography>

          <IconsLink />
        </CardBody>
      </Card>
    </div>
  )
}
