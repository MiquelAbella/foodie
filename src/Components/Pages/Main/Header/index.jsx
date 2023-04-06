import { AiOutlineArrowDown } from "react-icons/ai";

const headerImage = import.meta.env.BASE_URL + "headerImg2.jpg";

export const Header = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1
        className="text-[23vw] font-extrabold text-transparent bg-clip-text bg-cover"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        FOODIE
      </h1>
      <h2 className="text-xl text-gray-600">MAKE SOMETHING DELICIOUS</h2>
      <div className="absolute bottom-5">
        <AiOutlineArrowDown className="text-gray-600 text-4xl animate-bounce" />
      </div>
    </div>
  );
};
