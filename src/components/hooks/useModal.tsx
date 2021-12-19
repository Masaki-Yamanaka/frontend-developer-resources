import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openFunc = () => {
    setIsOpen(true)
  }
  const closeFunc = () => {
    setIsOpen(false)
  }
  const [isOpen2, setIsOpen2] = useState(false)
  const openFunc2 = () => {
    setIsOpen2(true)
  }
  const closeFunc2 = () => {
    setIsOpen2(false)
  }
  return {
    isOpen: isOpen,
    openFunc: openFunc,
    closeFunc: closeFunc,
    isOpen2: isOpen2,
    openFunc2: openFunc2,
    closeFunc2: closeFunc2,
  }
}
