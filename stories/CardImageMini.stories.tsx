import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardImageMini from "../components/Card/CardImageMini";

export default {
  title: "Components/Card/CardImageMini",
  component: CardImageMini,
} as ComponentMeta<typeof CardImageMini>;

const Template: ComponentStory<typeof CardImageMini> = (args) => (
  <CardImageMini {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  image: "/images/detail_4.png",
  onClick: () => undefined
};
