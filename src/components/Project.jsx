import React from 'react'
import '../styles/Project.css'
import project1 from '../assets/lelibro.png'
import project2 from '../assets/restaurant.png'

function Project() {
  return (
    <section id='project'>
        <div className='wrapper'>
            <h3>My Project</h3>
            <div className='grid'>
                <div className='item'>
                    <a href="https://github.com/MuhammadHelga/LeLibro.git"><img src={project1}/></a>
                </div>
                <div className='item'>
                    <a href="https://github.com/MuhammadHelga/Restaurant.git"><img src={project2}/></a>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Project
