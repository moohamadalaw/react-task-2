import React from 'react'
import Card from '../card/Card'

export default function Cards() {

  const products = [
    { id: 1, title: 'product 1', desc: 'this is product 1', prise:1000},
    { id: 2, title: 'product 2', desc: 'this is product 2',  prise:2000 },
    { id: 3, title: 'product 3', desc: 'this is product 3', prise:3000 },
    { id: 4, title: 'product 4', desc: 'this is product 4', prise:9000 },
    { id: 5, title: 'product 5', desc: 'this is product 5', prise:1000 },
    { id: 6, title: 'product 6', desc: 'this is product 6', prise:8000 }
  ]


  return (
    <div className='container'>
      <div className='row'>

        {products.map((product) => {
          return <Card {...product} key={product.id}/>
        })}

      </div>
    </div>
  )
}


