import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-[#04244bd5] via-[#04244b93] to-[#04244b51] text-white">
      <h2 className="text-6xl font-bold text-center leading-tight mb-6">
        Oops! Page Not Found
      </h2>
      <Link
        href="/"
        className="mt-4 px-6 py-3 bg-gradient-to-r from-[#04244bd5] via-[#04244b93] to-[#04244b51] hover:bg-[#6237e4] text-white text-lg font-semibold rounded-md shadow-md transition-all duration-300 ease-in-out"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
