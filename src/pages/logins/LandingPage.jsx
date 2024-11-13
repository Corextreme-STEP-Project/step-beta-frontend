import { Link } from 'react-router-dom';
import backgroundImage from "../../assets/images/bg2.jpg";

const LandingPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" p-10 md:p-16 rounded-lg max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Welcome to STEP
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed italic">
        Connect with government agencies and discover contract opportunities. Whether you’re a project owner seeking qualified contractors or a regulator overseeing tender submissions, start your journey with us by registering or logging in.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/register"
            className="bg-[#79b426] hover:bg-[#338a08] text-white font-semibold py-3 px-6 rounded-md transition duration-200 text-lg"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 text-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
