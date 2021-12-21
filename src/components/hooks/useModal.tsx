import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const [isOpenSecond, setIsOpenSecond] = useState(false)
  const openModalSecond = () => {
    setIsOpenSecond(true)
  }
  const closeModalSecond = () => {
    setIsOpenSecond(false)
  }
  return {
    isOpen: isOpen,
    openModal: openModal,
    closeModal: closeModal,
    isOpenSecond: isOpenSecond,
    openModalSecond: openModalSecond,
    closeModalSecond: closeModalSecond,
  }
}
