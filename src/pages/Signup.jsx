import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Signup = () => {
  const host = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (
      formData.email.length <= 0 ||
      formData.password.length <= 0 ||
      formData.name.length <= 0 ||
      formData.imageUrl.length <= 0
    ) {
      toast.info("Please fill in all fields");
      return false;
    } else if (!isValidEmail(formData.email)) {
      toast.warning("Please enter a valid email address");
      return false;
    } else if (formData.password.length < 8) {
      toast.warning("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(`${host}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          imageUrl: formData.imageUrl,
        }),
      });

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem("token", json.jwt);
        navigate("/");
        navigate(0);
        toast.success("Account created successfully", "success");
      } else {
        toast.error(
          `An error occurred: ${json.message || response.statusText}`,
          "error"
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {loading && <Spinner />}
      <div
        className={`sm:mx-auto sm:w-full sm:max-w-md ${
          loading ? "hidden" : ""
        }`}
      >
        <h2 className="text-center text-6xl font-extrabold text-black font-satisfy">
          Sign Up
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <div className={`mt-8 w-96 ${loading ? "hidden" : ""}`}>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSignup}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-black"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyellow focus:border-cyellow sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-black"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyellow focus:border-cyellow sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-black"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="**********"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyellow focus:border-cyellow sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="imageUrl"
                  className="block text-lg font-medium text-black"
                >
                  Image URL
                </label>
                <div className="mt-1">
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example/userimage.jpg"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyellow focus:border-cyellow sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <p className="my-2 text-center text-md font-semibold text-black">
                  Already have an account?{" "}
                  <Link to="/login" className="text-cyellow hover:underline">
                    Log in
                  </Link>
                </p>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-cyellow rounded-md shadow-sm text-lg font-medium text-cyellow bg-white hover:bg-cyellow hover:text-white focus:outline-none"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
