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
									ReactJS & NodeJS <span>90%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									Python <span>80%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									.NET, .NET Core, ASP.NET <span>95%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									CI/CD, Docker, Kubernetes, Cloud Technologies <span>80%</span>
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
									SQL, MySQL Servers & Azure Databases <span>90%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									Git, GitHub, GitLab & Version Control <span>90%</span>
								</h3>
								<div className="bar">
									<span></span>
								</div>
							</div>

							<div className="progress">
								<h3>
									PostGress & MongoDB <span>80%</span>
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
