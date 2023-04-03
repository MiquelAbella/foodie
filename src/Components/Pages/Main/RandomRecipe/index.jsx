import bg from "../../../../assets/RandomRecipeBg.jpg";
import searchText from "../../../../assets/searchText.png";

export const RandomRecipe = () => {
  return (
    <div
      className="min-h-[60vh] p-12 flex flex-col items-center justify-center bg-cover my-24 relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center">
        <img src={searchText} />
      </div>

      <button className="py-4 px-24 mr-4 text-xl text-white mb-4 rounded-full absolute bottom-6 bg-[#008F49]">
        GIVE ME A RANDOM RECIPE !
      </button>
    </div>
  );
};
