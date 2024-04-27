import Timeline from "./Timeline";

const TimelineApp = () => {
  return (
    <div className="bg-gray-900 container h-min-screen h-auto py-32 experience flex flex-col xl:items-center w-full text-left xl:text-center" id="timeline-trigger">
      <div className="lg:text-center w-full xl:w-1/2">
        <h3 className="text-4xl font-semibold mb-3">Experiences</h3>
        <p className="">
          Laborum laborum esse mollit fugiat sint ut aute non nulla sunt aute
          ad. Exercitation occaecat occaecat voluptate Lorem. Aliqua
          reprehenderit officia irure incididunt. Aute eu voluptate ex magna
          cupidatat exercitation. Officia ad non cillum proident nulla nostrud
          quis ullamco. Dolore ut irure incididunt eiusmod ullamco elit.
        </p>
      </div>
      <Timeline />
    </div>
  );
};

export default TimelineApp;
