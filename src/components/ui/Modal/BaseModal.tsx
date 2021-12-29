import styles from './BaseModal.module.scss'
import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import { BaseModal } from '@/src/types'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

export default function ChildModal(props: BaseModal) {
  return (
    <div>
      <React.Fragment>
        <Modal open={props.isOpen} aria-labelledby='child-modal-title' aria-describedby='child-modal-description'>
          <Box sx={{ ...style }}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.close} onClick={() => props.closeModal()}>
                  閉める
                </p>
              </div>
              {props.child}
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  )
}
