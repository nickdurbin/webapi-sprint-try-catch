import React from 'react';
import axios from 'axios';

function Project({ project }) {

  return (
    <>
      <h2>Name: {project.name}</h2>
      <h3>Description: {project.description}</h3>
    </>
  )
}

export default Project;