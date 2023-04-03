import { CuisineCard } from "../../../Cards/CuisineCard";

const cuisines = [
  {
    type: "Italian",
    img: "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    type: "American",
    img: "https://images.pexels.com/photos/4392634/pexels-photo-4392634.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    type: "Spanish",
    img: "https://images.pexels.com/photos/4765652/pexels-photo-4765652.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    type: "Indian",
    img: "https://images.pexels.com/photos/12737801/pexels-photo-12737801.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    type: "Mexican",
    img: "https://images.pexels.com/photos/6400026/pexels-photo-6400026.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    type: "French",
    img: "https://media.istockphoto.com/id/495695006/photo/squeegee.jpg?b=1&s=612x612&w=0&k=20&c=zNG99ydSOnyGPgn6_QDXe_V5KcFBO0WDuKdzMAoyucQ=",
  },
];

export const CuisineSelector = () => {
  return (
    <div className="p-6 md:p-12 mt-12">
      <p className="px-20 mb-6 text-gray-500 text-4xl">Tastes of the world</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:px-16 xl:gap-12 gap-6 ">
        {cuisines.map((category, idx) => {
          return <CuisineCard key={idx} id={idx} category={category} />;
        })}
      </div>
    </div>
  );
};
