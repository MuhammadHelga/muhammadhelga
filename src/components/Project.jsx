import React from 'react'
import '../styles/Project.css'
import project1 from '../assets/lelibro.png'
import project2 from '../assets/restaurant.png'
import project3 from '../assets/kartanary.png'
import project4 from '../assets/ujm.png'

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
                <div className='item'>
                    <a href="https://github.com/MuhammadHelga/kartanary.git"><img src={project3}/></a>
                </div>
                <div className='item'>
                    <a href="https://github.com/MuhammadHelga/UJM.git"><img src={project4}/></a>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Project
