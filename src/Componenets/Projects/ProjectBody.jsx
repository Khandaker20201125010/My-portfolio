import React from "react";
import "animate.css";
const ProjectBody = ({ image, title, description, links }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl animate__animated animate__zoomIn ">
      <figure>
        <img
          className="w-full h-64 p-6 rounded-2xl skeleton"
          src={image}
          alt={`${title} logo`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2">
          {links.map((link, index) => (
            <div className="card-actions justify-end" key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <div className="badge badge-outline text-blue-500 hover:bg-green-500 hover:text-black">
                  {link.label}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
