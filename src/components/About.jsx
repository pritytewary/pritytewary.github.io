import React from "react";

export const About = () => {
  return (
    <div
      name="About"
      className="w-full  h-screen bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-8 mx-auto  flex flex-col h-full w-full justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          voluptatem architecto explicabo similique aspernatur vero soluta,
          asperiores minus maiores reiciendis pariatur quos natus voluptatum
          earum alias incidunt quis distinctio.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          inventore beatae quaerat officiis commodi ipsam veritatis eaque omnis
          explicabo optio dolor praesentium atque in similique maxime
          consequuntur, alias deleniti sequi eius accusantium labore? Iusto,
          nihil expedita, earum adipisci maiores consequatur vitae harum
          corrupti, incidunt mollitia voluptatibus beatae pariatur illum
          voluptatem.
        </p>
      </div>
    </div>
  );
};

export default About;
