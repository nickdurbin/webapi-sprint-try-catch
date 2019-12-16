import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ProjectPage from './components/Projects/ProjectPage';
import Project from './components/Projects/Project';
import styled from 'styled-components';
import BG from './images/bg.jpg'

function App() {

  return (
    <>
    <Switch>
      <Route path='/projects' render={props => <ProjectPage {...props} /> } />
      <Route path='/projects/:id' render={props => <Project {...props} /> } />
    </Switch>

     <MainContainer>
       <ProjectPage />
     </MainContainer>
    </>
  )
}

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

export default withRouter(App);