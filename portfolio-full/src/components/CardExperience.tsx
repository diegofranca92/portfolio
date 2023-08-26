import { Card, Stack, Row, Col, Badge } from 'react-bootstrap'
import Image from 'next/image'

export default function CardExperience(props) {
  const experience = props.experience

  return (
    <Card bg='secondary'>
      <Stack>
        <Card.Header>
          <Row>
            <Col md={3} className='text-center'>
              <Image
                className='rounded-circle'
                width={50}
                height={50}
                src={experience?.company.image}
              />
              <p className='mb-0'>{experience?.company.name}</p>
            </Col>
            <Col>
              <Card.Title>{experience?.position}</Card.Title>
              {experience?.duration.begin.mes}/{experience?.duration.begin.ano} -{' '}
              {experience?.duration.finish.mes}/{experience?.duration.finish.ano}
            </Col>
          </Row>
        </Card.Header>
        <CardBody>{experience?.description}</CardBody>
        <CardFooter>
          <Stack direction='horizontal' className='flex-wrap' gap={2}>
            {experience?.skills.map((skill, index) => (
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
