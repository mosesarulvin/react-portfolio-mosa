// import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { client } from "../client";
import { useEffect, useState } from "react";
// import profilePic from "../assets/mosesArulvin.png"

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=='hero']{
        name,
        designation,
        description,
        image{asset->{url}}
      }[0]`
      )
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      {data && (
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                {data.name}
              </h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                {data.designation}
              </span>
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {data.description}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <div className="flex justify-center">
              <img src={data.image.asset.url} alt="profilePic" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
