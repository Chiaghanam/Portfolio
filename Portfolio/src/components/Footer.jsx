import React from 'react'

const Footer = () => {
  return (
    <div className='container text-center py-3 mt-5'>
        <hr /> 
      <div className='row'>
        <div className='col-6 mx-auto text-start'>
            <a href="#home" eventKey="#home">Home</a> <br />
            <a href="#about" eventKey="#about">About</a> <br />
            <a href="#projects" eventKey="#projects">Projects</a> <br />
            <a href="#contact" eventKey="#contact">Contact</a>
        </div>
        <div className='col-6 mx-auto text-end'>
            <h3 className='text-success'>Contact me</h3>
            <p>Email: <a href="mailto:leofazzy98@gmail.com">leofazzy98@gmail.com</a></p>
            <p>Phone: +234 9161128600</p>
             <div className="d-flex justify-content-center gap-3 mt-3 text-end">
                
                <a href="https://www.linkedin.com/in/chiaghanam-amobichukwu-8669b3270" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Chiaghanam" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="whatsapp://send?phone=+2349161128600&text=Hello%20Amobi!" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
        </div>

       
      </div>
       <p>&copy; {new Date().getFullYear()} Chiaghanam Amobichukwu. All rights reserved.</p>
    </div>
  )
}

export default Footer
