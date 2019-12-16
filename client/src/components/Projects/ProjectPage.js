import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Project from './Project';

function ProjectPage(props) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => {
        console.log(err, 'Users could not be found.')
      })
  })

  return (
    <>
      {projects.map(project => {
         return (
           <Link to={`/projects/${project.id}`}>
            <ProjectContainer key={project.id}>
              <Project id={project.id} project={project} />
            </ProjectContainer>
          </Link>
         )
       })}
    </>
  )
}

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  max-height: 200px;
  height: 100%;
  margin: 1%;
  padding: 1%;
  background: white;
  border: none;
  border-radius: 1em;
  box-shadow: 1px 3px 5px;
  cursor: pointer;
  text-decoration: none;
`

export default ProjectPage;