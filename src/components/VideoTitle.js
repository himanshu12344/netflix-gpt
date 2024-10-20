import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div className="flex w-1/4 justify-between">
        <button className="py-2 px-4 my-4 mr-2 text-black bg-white w-full rounded-md hover:opacity-80">
          Play
        </button>
        <button className="py-2 px-4 my-4 ml-2 text-white bg-gray-500 bg-opacity-50 w-full rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
