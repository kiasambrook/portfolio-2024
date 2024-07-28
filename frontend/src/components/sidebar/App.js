import GitHub from "./../svgs/github";
import Linkedin from "./../svgs/linkedin";

const Sidebar = ({ className }) => {
  return (
    <div className="connect-sidebar absolute flex md:flex-row flex-col py-40 mx-auto md:mx-40 text-left content-between justify-between p-4">
      <div className="right md:w-0.5">
        <div className="md:fixed right-10 mix-blend-difference z-40">
          <div className="relative flex md:flex-col flex-row items-center md:justify-center mt-4 md:mt-0">
            <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden md:block"></div>
            <span className="text-gray-400 flex md:flex-col">
              <a
                href="https://github.com/kiasambrook"
                aria-label="Visit my GitHub page"
                target="_blank"
                className="hover:text-black dark:hover:text-white"
              >
                <GitHub className="w-10 h-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/kiasambrook"
                target="_blank"
                aria-label="Visit my personal Linkedin page"
                className="hover:text-blue-500"
              >
                <Linkedin className="w-10 h-10" />
              </a>
            </span>
          </div>
          <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
