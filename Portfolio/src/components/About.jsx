import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = ({id}) => {
  return (
    <div className="container py-5" id={id}>
      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-8">
          <div>
            <h1 className="fw-bold">ABOUT ME</h1>
            <div className="bg-success" style={{height: ".5rem", width: "20%"}}></div>
          </div>
          
          
          <h3 className="mt-3">
            <a href="mailto:leofazzy98@gmail.com">leofazzy98@gmail.com</a>
          </h3>
          <p className="mt-4 text-justify">
            My name is <strong>Chiaghanam Amobichukwu</strong>, and I am a passionate software engineer specializing in <strong>full‑stack web development</strong>. 
            I thrive on building scalable, user‑friendly applications that bridge the gap between ideas and impactful solutions. 
            With a strong focus on solving real‑world problems through technology, I enjoy transforming complex challenges into elegant digital experiences. 
            Whether it’s designing intuitive front‑end interfaces or architecting robust back‑end systems, my goal is always to deliver meaningful solutions that make a difference.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="/assets/image/about profile.JPG"
            alt="Profile"
            className="img-fluid shadow opacity-50 rounded"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <div>
             <h1 className="fw-bold">SKILLS</h1>
              <div className="bg-success mb-2" style={{height: ".5rem", width: "10%", margin: "0 auto"}}></div>
          </div>
         
        </div>
        <div className="col-md-6 text-center">
          <h3 className="mt-3">Software Skills</h3>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
            <img src="/assets/image/HTML5-Logo.webp" alt="HTML" className="img-fluid skill_image rounded" />
            <img src="/assets/image/css logo.jpg" alt="CSS" className="img-fluid skill_image rounded" />
            <img src="/assets/image/react logo.jpg" alt="React" className="img-fluid skill_image rounded" />
            <img src="/assets/image/django logo.png" alt="Django" className="img-fluid skill_image rounded" />
            <img src="/assets/image/download (6).jpg" alt="Postgres" className="img-fluid skill_image rounded" />
            <img src="/assets/image/github logo.png" alt="Git" className="img-fluid skill_image rounded" />
          </div>
        </div>
        <div className="col-md-6 text-justify ">
          <h3 className="mt-3 text-center">Personal Skills</h3>
          <div className="mt-3 text-md-end  text-center">
            <ul type="none">
              <div className="bg-secondary mb-2" style={{width: '80%', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block'}}>
                <li>Quick Learner</li>
              </div>
              <div className="bg-secondary mb-2" style={{width: '80%', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block'}}>
                <li>Problem Solver</li> 
              </div>
              <div className="bg-secondary mb-2" style={{width: '80%', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block'}}>
                <li>Team Player</li>
              </div>
              <div className="bg-secondary mb-2" style={{width: '80%', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block'}}>
                <li>Effective Communicator</li>
              </div>
              <div className="bg-secondary mb-2" style={{width: '80%', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block'}}>
                <li>Adaptable</li>
              </div>
              <div className="bg-secondary mb-2" style={{width: '80%', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block'}}>
                <li>Creative Thinker</li>
              </div>
              <div className="bg-secondary mb-2" style={{width: '80%', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block'}}>
                <li>Detail‑Oriented</li>
              </div>
            </ul>
            
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <div>
              <h1 className="fw-bold">EDUCATION</h1>
              <div className="bg-success mb-2" style={{height: ".5rem", width: "10%", margin: "0 auto"}}></div>
          </div>
          
        </div>
        <div className="col-md-6 mx-auto text-center">
          <h3 className="mt-3">B.Sc Software Engineering</h3>
          <p>Admiralty University of Nigeria, Ogwashi, Delta State (2021‑2024)</p>
        </div>
      </div>

        
    
    </div>

  

  );
};

export default About;