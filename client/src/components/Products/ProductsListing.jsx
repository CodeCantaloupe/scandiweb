import { Component } from 'react'
import data from '../../temp/__data'
import ProductCard from './ProductCard'

export default class ProductsListing extends Component {
  render() {
    return (
      <div className='font-raleway'>
        <h1 className='text-4xl px-24 py-16'>ALL</h1>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mx-24'>
            {data.data.products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
        </div>
      </div>
    )
  }
}
