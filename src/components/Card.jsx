import React from 'react'

const Card = ({title, price, description, image, colorMode}) => {
  return (
  <div className={`card h-100 bg-${colorMode} text-${colorMode=="dark"?"light":"dark"}`}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h3>${price}</h3>
    <p className="card-text">{description}</p>
  </div>
</div>

  )
}

export default Card