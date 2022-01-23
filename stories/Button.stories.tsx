import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Normal = Template.bind({});
Normal.args = {
  label: 'Normal',
  onClick: () => alert('ini button normal'),
  size: 'normal'
}

export const Large = Template.bind({});
Large.args = {
  label: 'Large',
  onClick: () => alert('ini button large'),
  size: 'large'
}