import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiRegister } from '../../services/auth';
import Swal from 'sweetalert2';
import img from '../../assets/images/bg2.jpg'



const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(e.target);

      const firstName = formData.get("firstName");
      const middleName = formData.get("middleName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const password = formData.get("password");
      const phoneNumber = formData.get("phoneNumber");
      const role = "Project Owner";

      const payload = { firstName, middleName, lastName, email, password, phoneNumber, role };
      const response = await apiRegister(payload);


      console.log('Response Status:', response.status);
      const responseData = await response.json();
      console.log('Response Data:', responseData);


      if (response && response.status === 409) {
        Swal.fire({
          icon: "warning",
          title: "Registration failed",
          text: "User already exists!",
          confirmButtonText: " OK"
        }

        );
        return;
      }

      if (response && response.status === 201 || response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
          text: "You have successfully created an account",
          confirmButtonText: " OK"
        });
        navigate("/login");
      }

    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Registration failed.",
        text: "Please try again.",
        confirmationButtonText: " OK"
      });

    } finally {
      setLoading(false);
    }
  };




  return (
    <div>
      <div className="flex items-center  min-h-screen bg-cover bg-center justify-end"
        style={{ backgroundImage: `url(${img})` }}
      >
       <div className="w-1/2 p-10 text-white flex flex-col justify-center bg-gradient-to-r rounded-lg shadow-lg">
  <h1 className="text-5xl font-extrabold mb-6 text-center text-yellow-300">Welcome to the Government Contract Portal</h1>
  <p className="text-xl mb-6 text-center font-semibold text-white">
    Easily access and apply for government contracts. Register now to begin your path to success.
  </p>
  <ul className="space-y-2 mb-8">
    <li className="text-lg text-yellow-100">- Explore exclusive government opportunities.</li>
    <li className="text-lg text-yellow-100">- Simplify the tender submission process.</li>
    <li className="text-lg text-yellow-100">- Enjoy secure and transparent contract management.</li>
  </ul>
</div>


        <div className="w-full max-w-md  p-8 shadow-md bg-slate-50  ">



          <h2 className="text-2xl font-bold text-[#568bf5] text-center mb-6">Register With Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
                />
              </div>

              {/* Middle Name */}
              <div className="mb-4">
                <label htmlFor="middleName" className="block text-gray-700 font-semibold mb-2">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
                />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              />
            </div>

            {/* Confirm Password */}
            {/* <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
                />
              </div> */}

            {/* Role Selection */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={FormData.role}

                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#065986]"
              >
                <option value="projectOwner">Project Owner</option>
                <option value="projectRegulator">Project Regulator</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0ba5ec] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0086c9] transition duration-200"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-[#0086c9] hover:underline">
              Login here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default RegistrationForm;
