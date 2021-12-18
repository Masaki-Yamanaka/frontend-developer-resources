import { useState } from 'react'


export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openFunc = () => {
    setIsOpen(true)
  }
  const closeFunc = () => {
    setIsOpen(false)
  }
  return { isOpen: isOpen, openFunc: openFunc, closeFunc: closeFunc }
}
