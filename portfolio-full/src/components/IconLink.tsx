import { Tooltip } from '@material-tailwind/react'
import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaCodepen, FaBehance } from 'react-icons/fa'

export default function IconsLink() {
  const [icons, setIcons] = useState<any[]>([])
  const listIcons:any[] = [
    {
      link: 'https://www.linkedin.com/in/diego-fran%C3%A7a-aa66ba78/',
      icon: <FaLinkedin size={30} />,
      title: 'Linkedin'
    },
    {
      link: 'https://github.com/diegofranca92/',
      icon: <FaGithub size={30} />,
      title: 'GitHub'
    },
    {
      link: 'https://codepen.io/diegofranca92/',
      icon: <FaCodepen size={30} />,
      title: 'Code Pen'
    },
    {
      link: 'https://www.behance.net/diegofranca92/',
      icon: <FaBehance size={30} />,
      title: 'Bechance'
    }
  ]

  useEffect(() => {
    setIcons(listIcons)
  }, [])

  return (
    <div className='flex col-md-5 mx-auto mt-3'>
      {icons.map((item, index) => (
        <Tooltip key={index} content={item.title}>
          <a className='px-3 text-light' href={item.link} target='_blank'>
            {item.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  )
}
