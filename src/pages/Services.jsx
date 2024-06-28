import React from 'react';
import Card from '../components/Card';

const Services = () => {
  const services = [
    { title: 'Service 1', description: 'Description 1', image: 'https://via.placeholder.com/150' },
    { title: 'Service 2', description: 'Description 2', image: 'https://via.placeholder.com/150' },
    { title: 'Service 3', description: 'Description 3', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold my-5">Services Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Card key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </div>
  );
};

export default Services;
