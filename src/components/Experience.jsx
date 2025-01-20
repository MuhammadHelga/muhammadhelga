import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css'
import icondsi from '../assets/dsi.png'

import React from 'react'

function Experience() {
  return (
    <section id='exp'>
        <div className='wrapper'>
        <h3>Experience</h3>
        <VerticalTimeline animate={false}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2023 - Nov 2023"
                iconStyle={{ background: 'rgb(70, 78, 85)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={<img src={icondsi} alt='dsi icon' style={{ width: '90%', height: '90%', borderRadius: '50%', objectFit: 'cover' }}/>}
            >
                <h3 className="vertical-timeline-element-title">Staff Event Division</h3>
                <h4 className="vertical-timeline-element-subtitle">LKMM Information Systems Department</h4>
                <p>
                Become staff in the events division to run the LKMM series of the Information Systems Department
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </section>
  )
}

export default Experience
