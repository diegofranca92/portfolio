import { CarouselDefault } from './Carrousel'
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'
import { Project } from '~/schemas/experience'

type CardProjectProps = {
  project: Project
}

export default function CardProject({project}: CardProjectProps) {

  return (
    <Card>
      <div>
        {/* <Image
          height={200}
          style={{ maxWidth: '100%' }}
          src={project?.thumbnail}
        /> */}
        <CarouselDefault />
        {/* <Carrousel /> */}
        <CardBody>
          <Typography>{project?.name}</Typography>
          <Typography variant="small">{project?.description}</Typography>
          <a target='_blank' href={project?.link}>
            Visitar
          </a>
        </CardBody>
        <CardFooter>
          <div className='flex flex-wrap gap-4'>
            {project?.skills.map((skill, index) => (
              <span key={index} className='bg-blue-gray-500 p-4'>
                {skill.name}
              </span>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
