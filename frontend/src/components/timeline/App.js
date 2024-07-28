import Timeline from "./Timeline";

const TimelineApp = () => {
  return (
    <div className="container h-min-screen h-auto pt-32 pb-32 md:pb-0 lg:pb-32 experience flex flex-col xl:items-center w-full text-left xl:text-center" id="timeline-trigger">
      <div className="lg:text-center w-full xl:w-1/2">
        <h3 className="text-4xl font-semibold mb-3">Experiences</h3>
        <p className="">
          I have been working as a web developer in the industry since 2022, however, my experience goes back further than that having studied web & software development at university.
        </p>
      </div>
      <Timeline />
    </div>
  );
};

export default TimelineApp;
