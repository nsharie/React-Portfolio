import './Home.css';

function Home(){

  return (
    <>
      <section className='home'>
        <div className="home-content">
          <h1>Hi, I'm Nawaz Sharief</h1>
          <h3 className='text'>Software Developer <span className='blinker'></span> </h3>
          <p>As a passionate Software Developer, I bridge established (.NET) and modern (MERN stack) technologies, crafting robust backend systems with clean RESTful APIs for seamless front-end integration. My expertise in Docker containers, Microservices architectures, and Qlik Sense analytics enables data-driven decision-making and maintainable applications. I champion efficient development practices, utilizing Git, GitHub, GitLab, and CI/CD pipelines like Jenkins for automated testing and deployment. Additionally, I manage MySQL servers, Azure Databases, and leverage AWS services to enhance performance and data management.</p>
          <div className="btn-box">
            <a href="/static/Nawaz Sharief.pdf" download="Nawaz Sharief.pdf" target='_blank' rel='noreferrer'>Download CV</a>
            <a href='mailto:nsharief330@gmail.com'>Connect</a>
          </div>
          <div className="image">
            <img src="/Images/new.jpg" alt='Portfolioimage' className='portImage'></img>
          </div>
        </div>
        <div className="footer">
          <a href='https://github.com/nsharie/' target='_blank' rel='noreferrer'><img src="/Images/github.png" alt='github'></img></a>
          <a href='https://www.linkedin.com/in/nawaz-sharief-07b880244/' target='_blank' rel='noreferrer'><img src='/Images/linkedin1.png' alt='linkedIn'></img></a>
        </div>
      </section>
    </>
  );
}

export default Home;
