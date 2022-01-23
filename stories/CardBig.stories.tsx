import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardBig from '../components/Card/CardBig';

export default {
  title: 'Components/Card/CardBig',
  component: CardBig,
} as ComponentMeta<typeof CardBig>;

const Template: ComponentStory<typeof CardBig> = (args) => <CardBig {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  image: "/images/ultra_light_1.png",
  title: { label: "Ultra Light", color: "text-black" },
  description: "Drone move faster with weighing component",
  hightlight: { label: "under 200 g", color: "text-black" }
}