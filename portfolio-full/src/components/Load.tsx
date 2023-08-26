import Spinner from 'react-bootstrap/Spinner'
export default function Load() {
  return (
    <div
      className='vh-100 w-100 d-flex align-items-center justify-content-center bg-dark'
      style={{ zIndex: 4 }}>
      <Spinner animation='border' variant='primary' />
    </div>
  )
}
