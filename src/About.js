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
					Throughout my professional journey, I've had the privilege of contributing to impactful projects at 8ASE and V Align. At 8ASE, I played a pivotal role in the development of IUXD Studio, leveraging React.js, Node.js, and Express.js to create a seamless user experience. Additionally, I contributed to Worko, utilizing React.js, Redux, Tailwind CSS, and Express.js to deliver robust solutions while collaborating closely with US developers and clients. Transitioning to V Align, I further honed my skills, guiding a team in successfully overcoming challenges in a project for a US client, where we utilized React.js, Redux, and Node.js to achieve exceptional results.
					</p>
					<p className="experience">
						Experience:
						<p>
							Software Developer <span>@ </span> Propel Technologies - Feb 2023 to Present
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
