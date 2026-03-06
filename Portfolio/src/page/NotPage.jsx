import React from 'react'

const NotPage = () => {
  return (
    <div>
      <div className="d-flex bg-dark flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-1 bg-transparent fw-bold text-danger">404</h1>
      <h2 className="mb-3 bg-transparent">Page Not Found</h2>
      <p className="text-light text-center mb-4 bg-transparent">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a href="/" className="btn btn-primary">
        Go Back Home
      </a>
    </div>

    </div>
  )
}

export default NotPage
