const SinglePageSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-6">
      <div className="max-w-4xl w-full bg-card shadow-md rounded-lg animate-pulse">
        {/* Skeleton for Book Cover and Title */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="w-full sm:w-96 h-64 bg-gray-300 rounded-md"></div>
            <div className="w-full text-left sm:w-96 h-30 bg-gray-300 rounded-md"></div>
            <div className="w-full sm:w-96 h-10 bg-gray-300 rounded-md"></div>
            <div className="w-full sm:w-96 h-6 bg-gray-300 rounded-md"></div>
            <div className="flex flex-col space-y-2">
              <div className="h-8 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>

        {/* Skeleton for Book Details */}
        <div className="p-6">
          {/* Skeleton for Subjects */}
          <div className="mb-4">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Skeleton for Bookshelves */}
          <div className="mb-4">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-28 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Skeleton for Download Formats */}
          <div className="mb-4">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageSkeleton;
