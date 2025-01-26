import React from 'react'
import { Link } from 'react-router-dom'

function Experience({name, img, category, heading, date, link}) {
  return (
    <>
        <p className="title">{name}</p>
        <div className="card">
            <img className="card-image" src={img} alt="Criptomix logo" />

          <div className="card-content">
            <div className="category">{category}</div>
            <div className="heading">
                {heading}
              <div className="date">{date}</div>
            </div>
            <Link to={link} target='_blank' style={{ textDecoration: 'none' }}>
                <button className='link-button'>Ir a {name}</button>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Experience