import React from 'react'
import Card from '../components/Card'
import productList from '../data/ProductList'

const Home = ({t, colorMode}) => {

  
  return (
    <div className="container mt-3">
      <div className="row g-3">
      {productList.map((fd, i)=> {
        return <div className="col-12 col-md-6 col-lg-3">
          <Card key={i} title={t(`title.${i}`)} price={fd.price} image={fd.image} description={t(`description.${i}`)} colorMode = {colorMode} />
        </div>
      })}
      </div>
      

    </div>
  )
}

export default Home