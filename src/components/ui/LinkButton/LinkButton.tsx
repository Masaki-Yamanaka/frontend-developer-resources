import React from 'react'

export type LinkButtonProps = {
  bgc?: string
}

const LinkButton = ({ bgc = '#4752ff' }: LinkButtonProps) => (
  <a style={{backgroundColor: bgc, padding: '10px 30px', color: 'white'}}>ボタン</a>
)

export default LinkButton