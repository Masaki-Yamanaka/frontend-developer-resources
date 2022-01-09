import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progressRate: { control: 'number' },
  },
} as Meta

const Template: Story<{progressRate: number}> = (args) => <ProgressBar {...args} />

export const DefaultProgressBar = Template.bind({})
DefaultProgressBar.args = {
  progressRate: 60
}