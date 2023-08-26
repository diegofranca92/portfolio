import { Modal, Button, CloseButton } from 'react-bootstrap'

export default function BaseModal(props) {
  return (
    <Modal
      size={props.size ?? 'xl'}
      show={props.show}
      onHide={props.show}
      backdrop='static'
      keyboard={false}>
      <Modal.Header className='bg-dark text-light'>
        <Modal.Title>{props.title}</Modal.Title>
        <CloseButton variant='white' onClick={props.toogleModal} />
      </Modal.Header>
      <Modal.Body className='bg-dark text-light'>{props.children}</Modal.Body>
      {/* <Modal.Footer>
        <Button variant='secondary' onClick={props.toogleModal}>
          Close
        </Button>
        <Button variant='primary' onClick={props.toogleModal}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  )
}
