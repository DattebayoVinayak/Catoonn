import React from "react";
import image from "../assets/notFound.webp";

function NotFound() {
  return (
    <div className="w-full h-[90vh] text-5xl font-extrabold flex flex-col items-center justify-center"> <img className='h-[50%] ' src={image} alt=""/> Page Not Found!!!</div>
  );
}

export default NotFound;
