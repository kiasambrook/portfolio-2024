import GitHub from "./../svgs/github";
import Linkedin from "./../svgs/linkedin";

const Sidebar = ({ className }) => {
  return (
    <div className="connect-sidebar absolute flex lg:flex-row flex-col py-40 mx-auto lg:mx-40 text-left content-between justify-between">
      <div className="right lg:w-0.5">
        <div className="lg:fixed right-10 mix-blend-difference z-40">
          <div className="relative flex lg:flex-col flex-row items-center lg:justify-center mt-4 lg:mt-0">
            <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden lg:block"></div>
            <span className="text-gray-400 flex lg:flex-col">
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
          <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
