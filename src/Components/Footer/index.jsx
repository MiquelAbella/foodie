import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="w-full h-20 bg-neutral-600 flex items-center justify-end p-12 gap-6">
      <a
        className="flex flex-col items-center justify-center hover:text-white duration-300"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/MiquelAbella"
      >
        <AiFillGithub className="text-4xl cursor-pointer" />
        Github
      </a>
      <a
        className="flex flex-col items-center justify-center hover:text-white duration-300"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/miquel-abella-garcia-b64268217/"
      >
        <AiFillLinkedin className="text-4xl cursor-pointer" />
        Linkedin
      </a>
    </div>
  );
};
