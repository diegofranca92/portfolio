import { Spinner } from "@material-tailwind/react";

export default function Load() {
  return (
    <div
      className='vh-100 w-100 d-flex align-items-center justify-content-center bg-dark'
      style={{ zIndex: 4 }}>
      <Spinner className="h-12 w-12" />
    </div>
  )
}
