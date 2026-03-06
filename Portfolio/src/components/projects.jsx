import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const projects = ({id}) => {
  return (
    <div id={id}>
        <div>
            <h1 className='text-center fw-bold'>PROJECTS</h1>
            <div className='bg-success mb-2' style={{height: ".5rem", width: "10%", margin: "0 auto"}}></div>
        </div>
        
        <div className='d-flex flex-wrap justify-content-center gap-4 mt-5'>
            <div className='card' style={{width: '18rem'}}>
                <img src="/assets/image/E Shop image.png" className='card-img-top' alt='Ecommerce Website'/>
                <div className='card-body text-light'>
                    <h5 className='card-title text-success'>Ecommerce Website</h5>
                    <p className='card-text'>A web application that connects buyers and sellers in a seamless shopping experience.</p>
                    <a href='https://e-shop-cl34.onrender.com/' className='btn btn-success' target='_blank' rel='noopener noreferrer'>View Project</a>
                </div>
            </div>
            <div className='card' style={{width: '18rem'}}>
                <img src="/assets/image/noteapppic.PNG" className='card-img-top' alt='Note Taking App'/>
                <div className='card-body text-light'>
                    <h5 className='card-title text-success'>Note Taking App</h5>
                    <p className='card-text'>A web application that allows users to create, edit, and manage their notes efficiently.</p>
                    <a href='https://note-app-kfmc.onrender.com' className='btn btn-success' target='_blank' rel='noopener noreferrer'>View Project</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects
