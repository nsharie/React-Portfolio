import React from 'react';
import './About.css';

export default function About() {
  return (
  <>
    <div className='container'>
      <div className='center'> 
        <div className="centerimage">
          <img src="/Images/new.jpg" alt="centerImage" />
        </div>
      </div>
<div className="information">
					<p>
					Throughout my professional journey, I've had the privilege of contributing to impactful projects across Chervic Advisory Services, Propel Technologies, V Align, and 8ASE. At 8ASE, I played a pivotal role in developing IUXD Studio using React.js, Node.js, and Express.js to deliver a seamless user experience. I also contributed to Worko, implementing React.js, Redux, Tailwind CSS, and Express.js while collaborating with US-based developers and clients. At V Align, I refined my expertise by leading a team to overcome technical challenges for a US client project using React.js, Redux, and Node.js. At Propel Technologies, I independently handled the entire backend development using .NET technologies to build and deliver a medical application for Qatar clients. Currently, at Chervic Advisory Services, I continue to drive scalable, high-performing full-stack solutions and lead innovative software initiatives
					</p>
					<p className="experience">
						Experience:
						<p>
							Lead Software Developer <span>@ </span> Chervic Advisory Services - May 2025 to Present
						</p>
						<p>
							Software Developer <span>@ </span> Propel Technologies - Feb 2024 to May 2025
						</p>
						<p>
							Full Stack Engineer <span>@ </span> V-Align Technolgies Pvt Ltd - Jan 2024 to Feb 2024
						</p>
						<p>
							Software Developer <span>@ </span> 8ASE - Nov 2023 to Dec 2023
						</p>
						<p>
							{' '}
							Full Stack Intern <span>@ </span>KodNest - Jan 2023 to Nov 2023
						</p>
					</p>
	  </div>
    </div>
  </>
  )
}
