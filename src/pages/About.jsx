import React from "react";
import vig from "../assets/vig.png";
import sriram from "../assets/sriram.jpg";
import ruthvik from "../assets/ruthvik.jpg";
import ReactImg from "../assets/react.svg";
import tailwindcss from "../assets/tailwind.svg";
import jwt from "../assets/jwt.png";
import spring from "../assets/spring.svg";
import mysql from "../assets/mysql.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-black">
              About Recipeee
            </h1>
            <p className="text-center my-[30px] text-lg font-normal lg:text-xl sm:px-16 xl:px-38 text-primary">
              Welcome to Recipeee, the ultimate personalized recipe app where you can explore, create, and share culinary masterpieces tailored just for you! Discover a vast collection of recipes from around the world. Plus, with CRUD functionality, managing your recipes has never been easier - add, edit, or delete recipes with just a few clicks. Whether you're a seasoned chef or a beginner in the kitchen, Recipeee is your go-to app for cooking inspiration and organization. Start your culinary journey today and bring the joy of cooking to life!
            </p>
            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-black">
              Developed by
            </h1>

            <div className="container mx-auto p-4">
              <div className="flex flex-wrap justify-center gap-6">
                {/* Card 1 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4 hover:scale-105">
                  <div className="bg-black rounded-lg shadow-lg border-primary border-2 p-6">
                    <img
                      src={vig}
                      alt="Vignesh Pulipati"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-cyellow border-2"
                    />
                    <h2 className="text-cyellow font-semibold text-xl">
                      Vignesh Pulipati
                    </h2>
                    <h2 className="text-white font-semibold mt-2">
                      Full-stack Developer
                    </h2>
                    <div className="mt-2 flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/vigneshpulipati666"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={32} color="white" />
                      </a>
                      <a
                        href="https://github.com/VigneshPulipati"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={32} color="white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4 hover:scale-105">
                  <div className="bg-black rounded-lg shadow-lg border-primary border-2 p-6">
                    <img
                      src={sriram}
                      alt="Sriram kotha"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-cyellow border-2"
                    />
                    <h2 className="text-cyellow font-semibold text-xl">Sriram Kotha</h2>
                    <h2 className="text-white font-semibold mt-2">Frontend Developer</h2>
                    <div className="mt-2 flex items-center justify-center gap-3">
                      <FaLinkedin size={32} color="white" />
                      <FaGithub size={32} color="white" />
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4 hover:scale-105">
                  <div className="bg-black rounded-lg shadow-lg border-primary border-2 p-6">
                    <img
                      src={ruthvik}
                      alt="Surya ruthvik"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-cyellow border-2"
                    />
                    <h2 className="text-cyellow font-semibold text-xl">Surya Ruthvik</h2>
                    <h2 className="text-white font-semibold mt-2">Backend Developer</h2>
                    <div className="mt-2 flex items-center justify-center gap-3">
                      <FaLinkedin size={32} color="white" />
                      <FaGithub size={32} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none  md:text-3xl lg:text-4xl text-black">
              Integrated Technologies
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center m-3">
                <img src={ReactImg} alt="reactImg" className="w-32 h-32" />
                <p className="mt-2  text-primary font-medium">React</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={tailwindcss}
                  alt="tailwindcss"
                  className="w-32 h-32"
                />
                <p className="mt-2  text-primary font-medium">Tailwind</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={spring}
                  alt="spring-boot"
                  className="w-32 h-32"
                />
                <p className="mt-2  text-primary font-medium">Spring Boot</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={mysql}
                  alt="mysql"
                  className="w-32 h-32"
                />
                <p className="mt-2  text-primary font-medium">MySQL</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={jwt}
                  alt="jwt"
                  className="w-32 h-32"
                />
                <p className="mt-2  text-primary font-medium">JWT</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
