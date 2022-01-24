import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import CardReview from "../../components/Card/CardReview";

const reviewLists = [
  {
    review:
      "With high resolution camera, picture become clear and beautiful. It’s so easy to operate drone.",
    name: "Hugo Adams",
    title: "Content Creator",
    image: "/images/Hugo-adams.png",
  },
  {
    review:
      "Taking high view video become easy and faster. Battery performance really helping for making film.",
    name: "Jennie Obrien",
    title: "Director Film",
    image: "/images/Jennie-obrien.png",
  },
  {
    review:
      "Making video content for my trip vlog so powerful and wonderful. Love the video quality.",
    name: "Lisa Millz",
    title: "Content WQCreator",
    image: "/images/Lisa-millz.png",
  },
];

const Review = () => {
  return (
    <section
      className="xl:m-[100px_150px_0_150px] mobile:m-[52px_32px_0_32px] xl:h-[538px] pb-[1038px]"
      id="review"
    >
      <Fade>
      <h1 className="xl:text-[64px] mobile:text-[36px] lead-[104px] font-bold max-w-[531px] xl:mb-[80px] mobile:mb-[37px]">
        What Our “Pilots Are Saying
      </h1>
      </Fade>
      <div className="flex xl:gap-[50px] mobile:gap-4 mobile:flex-col xl:flex-row">
        {reviewLists.map((item, index) => (
          <Zoom key={index}>
          <CardReview {...item} key={index} />
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default Review;
