import { Link } from "react-router-dom";
import HomeImage from "../../assets/Home.png";

function Home() {
  return (
    <div className="bg-gray-600 h-screen flex flex-col items-center">
      <div className="border-2 pt-10 pb-6 border-orange-500 w-full">
        <div className="flex justify-center gap-96">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden mt-12 flex justify-center">
        <img
          alt="content"
          className="object-cover max-h-[70vh] max-w-full pt-4" // Use a specific height based on viewport
          src={HomeImage}
        />
      </div>
      <div className="mt-4 text-white">HI</div> {/* Added a new div */}
    </div>
  );
}

export default Home;
