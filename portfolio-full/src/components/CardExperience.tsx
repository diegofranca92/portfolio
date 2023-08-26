import { Card, CardBody, CardHeader, CardFooter, Typography } from '@material-tailwind/react'
import { Experience } from '~/schemas/experience'

type CardExperienceProps = {
  experience: Experience
}

export default function CardExperience({experience}:CardExperienceProps) {

  return (
    <Card color='blue-gray'>
      <div>
        <CardHeader>
          <div className='flex'>
            <div className='text-center'>
              {/* <img
                className='rounded-full'
                width={50}
                height={50}
                src={experience?.company.image}
              /> */}
              {/* <p className='mb-0'>{experience?.company.name}</p> */}
              <p className='mb-0'>{experience?.company}</p>
            </div>
            <div>
              <Typography>{experience?.position}</Typography>
              {/* {experience?.duration.begin.mes}/{experience?.duration.begin.ano} -{' '}
              {experience?.duration.finish.mes}/{experience?.duration.finish.ano} */}
            </div>
          </div>
        </CardHeader>
        <CardBody>{experience?.description}</CardBody>
        <CardFooter>
          <div className='flex flex-wrap gap-4'>
            {experience?.skills.map((skill, index) => (
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
