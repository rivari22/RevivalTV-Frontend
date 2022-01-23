import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardProduct from "../components/Card/CardProduct";

export default {
  title: "Components/Card/CardProduct",
  component: CardProduct,
} as ComponentMeta<typeof CardProduct>;

const Template: ComponentStory<typeof CardProduct> = (args) => (
  <CardProduct {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  name: "Mini Drone",
  desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
  image: "/images/mini_drone_1.png",
  onClick: () => undefined,
};
