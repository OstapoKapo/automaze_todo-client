"use client";

const LoadingSpinner = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-900">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
