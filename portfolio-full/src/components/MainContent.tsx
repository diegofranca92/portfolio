import React, { useState, useEffect } from 'react'
import { FaLaptopCode, FaListAlt, FaPersonBooth } from 'react-icons/fa'
import BaseModal from './Modal'
import CardExperience from './CardExperience'
import { experiences, projects } from '../../db/db'
import CardProject from './CardProject'
import BaseTab from './Tabs'
import { Button } from '@material-tailwind/react'

export default function MainContent(props) {
  const [show, setShow] = useState(false)
  const [modalPersonal, setModalPersonal] = useState(false)
  const [modalCourious, setModalCourious] = useState(false)
  const [experienceList, setExperienceList] = useState([])
  const [projectList, setProjectList] = useState([])

  async function getExperiences() {
    //  try {
    //   const { data } = await axios.get(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/experience`,
    //     {
    //       headers: {
    //         apikey: process.env.NEXT_PUBLIC_API_KEY,
    //         Authorization: process.env.NEXT_PUBLIC_TOKEN
    //       }
    //     }
    //   )
    //  } catch (error) {
    //   console.log(error);
    //  }

    setExperienceList(experiences)
    setProjectList(projects)
  }

  useEffect(() => {
    getExperiences()
  }, [])

  return (
    <>
      <div className='flex-md-nowrap mb-5 p-4 gap-12'>
        <Button
          color='blue-gray'
          className='p-4 rounded-0'
          onClick={() => setShow(true)}>
          <FaListAlt className='d-block mx-auto mb-2' size={40} />
          Experiências
        </Button>
        <Button
          color='blue-gray'
          className='p-4 rounded-0'
          onClick={() => setModalPersonal(true)}>
          <FaLaptopCode className='d-block mx-auto mb-2' size={40} />
          Projetos
        </Button>
        {/* <Button
          variant='outline-secondary'
          className='p-4'
          onClick={() => setModalPersonal(true)}>
          <FaGrinWink className='d-block mx-auto mb-2' size={40} />
          Pessoal
        </Button> */}
        <Button
          disabled
          color='blue-gray'
          className='p-4 rounded-0'
          onClick={() => setModalCourious(true)}>
          <FaPersonBooth className='d-block mx-auto mb-2' size={40} />
          Destaques (em construção)
        </Button>
      </div>

      <BaseModal
        show={show}
        size='md'
        title='Experiências'
        toogleModal={e => {
          setShow(e.target.value)
        }}>
        <Stack gap={4}>
          {experienceList.map(experience => (
            <CardExperience key={experience.id} experience={experience} />
          ))}
        </Stack>
      </BaseModal>
      <BaseModal
        show={modalPersonal}
        title='Projetos'
        toogleModal={e => {
          setModalPersonal(e.target.value)
        }}>
        <Row>
          <BaseTab />
          {projectList.map(project => (
            <Col md={4} className='mb-4'>
              <CardProject key={project.id} project={project} />
            </Col>
          ))}
        </Row>
      </BaseModal>
      <BaseModal
        show={modalCourious}
        title='Curiosidades'
        toogleModal={e => {
          setModalCourious(e.target.value)
        }}>
        <h1>Curiosidades</h1>
      </BaseModal>
    </>
  )
}
