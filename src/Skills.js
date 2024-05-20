import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section className='skills' id='skills'>
      <h2 className='heading'>My <span className='sk'>Skills</span></h2>

            <div className="skills-row">
				<div className="skills-column">
					<div className="skills-box">
						<div className="skills-content">
							<div className="progress">
								<h3>
									ReactJS <span>90%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									NodeJS <span>80%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									.NET <span>75%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									Qlik Sense <span>80%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="skills-column1">
					<div className="skills-box">
						<div className="skills-content">
							<div className="progress">
								<h3>
									SQL, MySQL Servers & Azure Databases <span>80%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									Redux <span>80%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									PostGress & MongoDB <span>75%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									Java <span>80%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </section>
  )
}
