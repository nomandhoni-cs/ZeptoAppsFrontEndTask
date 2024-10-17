const SkeletonLoader = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="animate-pulse">
        <div className="h-60 w-full rounded-sm bg-gray-400 p-4"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        {/* Image Div  */}
        <div className="flex-1 space-y-6 py-3">
          <div className="h-7 bg-gray-400 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-400 rounded col-span-2"></div>
              <div className="h-2 bg-graye-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
