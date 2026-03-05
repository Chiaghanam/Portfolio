import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = ({id}) => {
  return (
    <div className="container py-5 mt-5" id={id}>
      <div className="row align-items-center">
        
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="fw-bold">CHIAGHANAM</h1>
          <h2 className="fw-light text-success">AMOBICHUKWU</h2>
          <h4 style={{ letterSpacing: "10px" }}>WEB DEVELOPER</h4>
          <h4 style={{ letterSpacing: "10px" }}>SOFTWARE ENGINEER</h4>
          
              <a href="/Chiaghanam_Amobichukwu_CV.pdf" download="Chiaghanam_Amobichukwu_Resume.pdf" className="btn btn-outline-success mt-3">
                Download Resume
              </a>

          
          
        </div>

        {/* image */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/assets/image/mepic.jpg"
            alt="Profile"
            className="img-fluid shadow"
            style={{ maxWidth: "400px", borderRadius: "5rem" }}
          />
        </div>
      </div>

     
     
    </div>
  );
};

export default Home;