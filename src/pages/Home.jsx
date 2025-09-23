import React from "react";
import CoverImage from "../assets/cover.png";
import Cooking from "../assets/cooking.jpg";

const Home = () => {

  const services = [
    {
      name: "Tasty Recipes",
      desc: "Discover a wide range of delicious recipes to tantalize your taste buds. From savory mains to delectable desserts, explore culinary delights that cater to every palate.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Community Blogs",
      desc: "Engage with a vibrant community of food enthusiasts and bloggers. Share your culinary experiences, tips, and tricks, and connect with like-minded individuals passionate about cooking and exploring new flavors.",
      image: "https://images.pexels.com/photos/4240507/pexels-photo-4240507.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Categories",
      desc: "Browse through diverse categories to find recipes tailored to your preferences. Whether you're craving comfort food, looking for healthy options, or eager to try exotic cuisines, our categorized collection has something for everyone.",
      image: "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <main>
      <section className="relative">
        <img src={CoverImage} alt="Cover" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-6xl max-[750px]:text-4xl max-[380px]:text-2xl font-satisfy text-white">
            Tasty recipes at your fingertips
          </p>
        </div>
      </section>

      <section className="my-32 mx-8 flex justify-between items-center gap-8 max-[1200px]:flex-col">
        <div className="min-[1200px]:max-w-[50%]">
          <p className="text-6xl max-[750px]:text-4xl max-[380px]:text-2xl min-[1200px]:text-6xl font-satisfy leading-tight">
            Culinary Techniques with Detailed Cooking Guides
          </p>
          <p className="text-lg my-8 text-justify">
            Unlock the secrets of the kitchen with our comprehensive cooking
            guides designed to accompany you on every step of your culinary
            adventures. From ingredient preparation to plating techniques, our
            guides leave no stone unturned, empowering you to create delicious
            meals with confidence and precision. Whether you're a beginner or a
            seasoned cook, our detailed cooking guides are your trusted
            companions in the kitchen, helping you to elevate your cooking
            skills and impress your guests with every dish you create.
          </p>
        </div>
        <div className="min-[1200px]:max-w-[50%]">
          <img src={Cooking} alt="cooking" className="w-full" />
        </div>
      </section>
      <section className="m-16">
        <p className="font-satisfy text-6xl text-center mb-12 max-[750px]:text-4xl max-[380px]:text-2xl">
          Our Top Services
        </p>
        <div className="max-w-screen-lg mx-auto grid gap-8 max-[650px]:grid-cols-1 max-[900px]:grid-cols-2 grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="text-center border border-cyellow rounded-md">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 mx-auto object-cover"
              />
              <p className="text-2xl py-4 font-satisfy">{service.name}</p>
              <p className="p-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
