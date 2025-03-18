import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#021526] text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Oops! Page not found.</h2>
        <p className="text-gray-300 mt-2">
          The page you are looking for was not found.
        </p>
        <p className="mt-2">
          You may return to{" "}
          <Link to="/dashboard" className="text-blue-400 hover:underline">
            home page
          </Link>{" "}
          or try using the search form.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-4 py-2 rounded-l-md text-black bg-white focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}
