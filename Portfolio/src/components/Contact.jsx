import React from 'react'
import '../App.css'
const Contact = ({id}) => {
  return (
    <div id={id}>
      <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
            <div>
                <h1 className="fw-bold">CONTACT</h1>
                <div className="bg-success mb-2" style={{height: ".5rem", width: "10%", margin: "0 auto"}}></div>
            </div>
         
        </div>
        <div className="col-md-6 mx-auto text-center">
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
            <button className="btn btn-outline-success" onClick={() => window.location.href = "mailto:leofazzy98@gmail.com"}>
              <i className="fas fa-envelope me-2"></i> Email Me
            </button>

            <button className="btn btn-outline-success" onClick={() => window.location.href = "whatsapp://send?phone=+2349161128600&text=Hello%20Amobi!"}>
              <i className="fab fa-whatsapp me-2"></i> WhatsApp Me
            </button>

            <button className="btn btn-outline-success" onClick={() => window.location.href = "https://www.linkedin.com/in/chiaghanam-amobichukwu-8669b3270"}>
              <i className="fab fa-linkedin me-2"></i> LinkedIn
            </button>
            
           
          </div>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
