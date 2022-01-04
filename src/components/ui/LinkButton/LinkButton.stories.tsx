import React from 'react'
import { Story, Meta } from '@storybook/react'

import LinkButton, { LinkButtonProps } from './LinkButton'

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  argTypes: {
    bgc: { control: 'color' },
  },
} as Meta

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {}

export const RedButton = Template.bind({})
RedButton.args = {
  bgc: '#f00'
}