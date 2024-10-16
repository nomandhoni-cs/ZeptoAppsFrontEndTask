const SkeletonLoader = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse">
        <div className="h-60 w-60 rounded-sm bg-slate-700 p-4"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        {/* Image Div  */}
        <div className="flex-1 space-y-6 py-1">
          <div className="h-7 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
