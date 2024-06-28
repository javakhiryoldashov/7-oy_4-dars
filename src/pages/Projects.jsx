import React from 'react';
import Card from '../components/Card';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description 1', image: 'https://via.placeholder.com/150' },
    { title: 'Project 2', description: 'Description 2', image: 'https://via.placeholder.com/150' },
    { title: 'Project 3', description: 'Description 3', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold my-5">Projects Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} image={project.image} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
