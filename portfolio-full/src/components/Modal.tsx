import { Dialog, DialogBody, DialogHeader, IconButton } from "@material-tailwind/react";
import { FaTimes } from 'react-icons/fa'
interface ModalProps {
  size?: "md" | "lg" | "xl" | "xxl"
  show: boolean
  title: string
  children: React.ReactNode
  toogleModal: (e: any) => void
}

export default function BaseModal({ size, show, title, children, toogleModal }: ModalProps) {
  return (
    <Dialog
      size={size ?? "xl"}
      open={show}
      handler={toogleModal}>
      <DialogHeader className='bg-dark text-light justify-between'>
        {title}
        <IconButton variant="text" onClick={toogleModal}>
          <FaTimes className="h-6 w-6 text-blue-gray-500" />
        </IconButton>
      </DialogHeader>
      <DialogBody className='bg-dark text-light'>{children}</DialogBody>
    </Dialog>
  )
}
