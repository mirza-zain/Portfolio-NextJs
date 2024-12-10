import React from 'react'
import Project from '../projects/page'

const projects = [
  {
    image: '/Images/Demo.png',
    title: 'Project 1',
    description: 'Description for project 1',
  },
  {
    image: '/Images/Demo.png',
    title: 'Project 2',
    description: 'Description for project 2',
  },
  // Add more projects as needed
]

const App = () => {
  return <Project projects={projects} />
}

export default App