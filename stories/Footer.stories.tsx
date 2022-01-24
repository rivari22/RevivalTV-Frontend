import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../components/Footer/Footer';

export default {
  title: 'Components/Footer/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

//👇 Each story then reuses that template
export const Default = Template.bind({});