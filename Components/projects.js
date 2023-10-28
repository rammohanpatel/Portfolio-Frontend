import React from 'react';
import { urlFor } from '../lib/client';
import ProjectCard from './projectCard';

const Projects = ({ project }) => {
  return (
    <>

    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
    <h2 className=" text-center font-bold text-5xl mb-4 p-9" id='projects'>Projects</h2>
    <hr className="mx-auto w-1/6 border-t-4 border-green-500 my-4 rounded" />
        <ProjectCard project={project} />
    </div>
    </>
  );
};

export default Projects;


