import React from 'react';
import { urlFor } from '../lib/client';

const ProjectCard = ({ project }) => {
  const order = ['Online Book Store', 'Youtube Clone', 'Moments-A Social Media Platform', 'Amazon-Scraper API'];

  return (
    <div className="project-list flex flex-wrap ">
      {order.map((title, index) => {
        const projectItem = project.find((p) => p.title === title);

        if (projectItem) {
          return (
            <div className="project-card m-4 max-w-sm rounded-md shadow-md" key={index}>
              <div className="relative">
                <img
                  src={urlFor(projectItem.image).url()}
                  alt={projectItem.title}
                  className="w-full h-40 object-cover rounded-t-md"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl text-gray-600 font-semibold mb-2 text-center tracking-wide">{projectItem.title}</h3>
                <hr className="mx-auto w-1/6 border-t-4 border-green-500 my-4 rounded" />
                <p className="text-gray-600 mb-4">{projectItem.description}</p>
                <div className="flex flex-wrap">
                  {projectItem.tags.map((tag, tagIndex) => (
                    <span className="px-2 py-1 mr-2 mb-2 rounded-lg text-white bg-blue-500" key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex  justify-around">
                  <div>
                    {projectItem.url && (
                      <a
                        href={projectItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block  p-2 
                        text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                  <div>
                    {projectItem.github_url && (
                      <a
                        href={projectItem.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block  p-2 
                        text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        View Code
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          );
        }

        return null; // Handle the case where a project with the specified title is not found
      })}
    </div>
  );
};

export default ProjectCard;
