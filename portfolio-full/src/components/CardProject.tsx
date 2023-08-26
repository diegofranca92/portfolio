import { Card, Stack, Badge, Button } from 'react-bootstrap'
import Image from 'next/image'
import { CarouselDefault } from './Carrousel'
import { CardBody, CardFooter } from '@material-tailwind/react'

export default function CardProject(props) {
  const project = props.project

  return (
    <Card bg='secondary'>
      <Stack>
        {/* <Image
          height={200}
          style={{ maxWidth: '100%' }}
          src={project?.thumbnail}
        /> */}
        <CarouselDefault />
        {/* <Carrousel /> */}
        <CardBody>
          <Card.Title>{project?.name}</Card.Title>
          <Card.Text>{project?.description}</Card.Text>
          <Button target='_blank' href={project?.link} size="sm" variant='dark'>
            Visitar
          </Button>
        </CardBody>
        <CardFooter>
          <Stack direction='horizontal' className='flex-wrap' gap={2}>
            {project?.skills.map((skill, index) => (
              <Badge key={index} bg='light' text='dark'>
                {skill}
              </Badge>
            ))}
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
