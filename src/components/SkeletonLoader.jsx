const SkeletonLoader = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="animate-pulse">
        <div className="h-72 rounded-t-2xl w-full rounded-sm bg-slate-400 p-4"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        {/* Image Div  */}
        <div className="flex-1 space-y-6 pt-3">
          <div className="h-8 bg-slate-400 rounded"></div>
          <div className="space-y-2">
            <div className="space-y-2">
              <div className="h-5 bg-slate-400 rounded"></div>
              <div className="h-3 bg-slate-400 rounded"></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="h-4 bg-slate-400 rounded-full w-16"></div>
              <div className="h-4 bg-slate-400 rounded-full w-16"></div>
              <div className="h-4 bg-slate-400 rounded-full w-16"></div>
              <div className="h-4 bg-slate-400 rounded-full w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
