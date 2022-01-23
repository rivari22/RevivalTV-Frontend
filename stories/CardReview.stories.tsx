import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardReview from "../components/Card/CardReview";

export default {
  title: "Components/Card/CardReview",
  component: CardReview,
} as ComponentMeta<typeof CardReview>;

const Template: ComponentStory<typeof CardReview> = (args) => (
  <CardReview {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  review:
    "Making video content for my trip vlog so powerful and wonderful. Love the video quality.",
  name: "Lisa Millz",
  title: "Content WQCreator",
  image: "/images/Lisa-millz.png",
};
