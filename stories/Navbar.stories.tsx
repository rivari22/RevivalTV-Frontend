import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from '../components/Navbar/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

//👇 Each story then reuses that template
export const Default = Template.bind({});