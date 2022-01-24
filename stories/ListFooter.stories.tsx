import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListFooter from "../components/Footer/ListFooter";

export default {
  title: "Components/Footer/ListFooter",
  component: ListFooter,
} as ComponentMeta<typeof ListFooter>;

const Template: ComponentStory<typeof ListFooter> = (args) => (
  <div className="bg-black">
    <ListFooter {...args} />
  </div>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  title: "Explore",
  list: ["Our Services", "Specification", "Refund", "Playlist"],
};
