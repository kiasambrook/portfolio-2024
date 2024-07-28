import Badge from "./Badge";
import { useState } from "react";
import { Modal } from "flowbite-react";

const Project = ({ title, img, badges, description, link, repo }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="project lg:w-5/12 w-full">
        <div
          onClick={() => setOpenModal(true)}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            cursor: "pointer",
            borderRadius: "0.5rem",
            marginTop: "0.5rem",
            height: "12rem",
            position: "relative",
          }}
          className="my-2 h-48 relative"
        >
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md "></div>
          <div className="absolute inset-0 text-wite flex items-center justify-center mix-blend-overlay hover:mix-blend-normal">
            <h2 className="text-3xl font-bold  text-white">{title}</h2>
          </div>
        </div>
        <div className="tags flex gap-2 flex-wrap">
          {badges.map((badge, index) => (
            <Badge key={index} colour={badge.colour} text={badge.text} />
          ))}
        </div>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        dismissible
        className="dark:text-white"
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">{description}</div>
        </Modal.Body>
        <Modal.Footer className="flex flex-row gap-4 ">
          {link && (
            <a
              href={link}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              target="_blank"
              aria-label={`Link to ${title}`}
            >
              Site
            </a>
          )}

          {repo && (
            <a
              href={repo}
              class="bg-cyan-50 hover:bg-cyan-100 text-gray-900 font-bold py-2 px-4 rounded"
              target="_blank"
              aria-label={`Link to Git Repo`}
            >
              Git Repo
            </a>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Project;
