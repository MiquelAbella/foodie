export const CategoryRecipeCardSkeleton = () => {
  return (
    <div className="relative cursor-pointer flex flex-col justify-between gap-6 border-b pb-4 border-gray-400 duration-300 hover:bg-gray-200 h-full w-full">
      <div className="h-5/6 w-full bg-gray-400 animate-pulse" />
      <p className="truncate w-full text-gray-500 text-center">. . .</p>
    </div>
  );
};
