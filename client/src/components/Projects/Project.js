import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Project(props) {
  console.log(props)
  const id = props.match.params.id;
  const [project, setProject] = useState()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then(res => {
        setProject(res.data)
      })
      .catch(err => {
        console.log(err.response)
      });
  }, [id]);

  return (
    <>
      <h2>Name: {project.name}</h2>
    </>
  )
}

export default Project;