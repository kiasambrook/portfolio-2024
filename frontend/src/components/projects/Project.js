import Badge from "./Badge";

const Project = ({ title, img, badges }) => {
  return (
    <div className="project w-5/12 m-2">
      <div className={"object-cover  rounded-md bg-[url('" + img + "')] my-2  h-48 relative"}>
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md "></div>
        <div className="absolute inset-0 flex items-center justify-center mix-blend-soft-light hover:mix-blend-normal">
          <h2 className=" text-3xl font-bold">{title}</h2>
        </div>
        <div className="tags flex gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} colour={badge.colour} text={badge.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
