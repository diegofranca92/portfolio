import React, { useState, useEffect } from 'react'
import { FaLaptopCode, FaListAlt, FaPersonBooth } from 'react-icons/fa'
import BaseModal from './Modal'
import CardExperience from './CardExperience'
import CardProject from './CardProject'
import BaseTab from './Tabs'
import { Button } from '@material-tailwind/react'
import { api } from '~/utils/api'

export default function MainContent() {
  const [show, setShow] = useState(false)
  const [modalPersonal, setModalPersonal] = useState(false)
  const [modalCourious, setModalCourious] = useState(false)

  const getAllExperiences = api.example.getAllExperiences.useQuery();
  const getAllProjects = api.example.getAllProjects.useQuery();

  return (
    <>
      <div className='flex-md-nowrap mb-5 p-4 gap-12 flex justify-around'>
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
        toogleModal={(e:any) => {
          setShow(e.target.value)
        }}>
        <div className='flex gap-4'>
          {getAllExperiences.data?.map(experience => (
            <CardExperience key={experience.id} experience={experience} />
          ))}
        </div>
      </BaseModal>
      <BaseModal
        show={modalPersonal}
        title='Projetos'
        toogleModal={(e:any) => {
          setModalPersonal(e.target.value)
        }}>
        <div className='flex'>
          <BaseTab />
          {getAllProjects.data?.map(project => (
            <div className='mb-4' key={project.id}>
              <CardProject project={project} />
            </div>
          ))}
        </div>
      </BaseModal>
      <BaseModal
        show={modalCourious}
        title='Curiosidades'
        toogleModal={(e:any) => {
          setModalCourious(e.target.value)
        }}>
        <h1>Curiosidades</h1>
      </BaseModal>
    </>
  )
}
