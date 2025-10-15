import './Home.css';

function Home(){

  return (
    <>
      <section className='home'>
        <div className="home-content">
          <h1>Hi, I'm Nawaz Sharief</h1>
          <h3 className='text'>Lead Software Developer <span className='blinker'></span> </h3>
          <p>As a passionate Software Developer, I bridge established (.NET) and modern (MERN stack) technologies to deliver scalable and efficient software solutions. From leading backend development projects with .NET to building dynamic frontends using React.js, Redux, and Tailwind CSS, I focus on creating seamless, high-performing applications. My experience extends to designing RESTful APIs, managing microservices architectures, and containerizing deployments using Docker. I emphasize clean code practices, CI/CD automation through Git, GitHub, GitLab, and Jenkins, and data-driven development using Qlik Sense analytics. Additionally, I manage MySQL and Azure databases while leveraging AWS services to ensure optimized performance and reliability.</p>
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
