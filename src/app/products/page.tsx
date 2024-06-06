'use client'

import { useMutation, useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

const ProductPage = () => {
    const products = useQuery(api.products.getProducts)
    const deleteProducts = useMutation(api.products.deleteProduct)
  return (
    <div className="p-10 flex flex-col gap-4">
    <h1 className="text-5xl">All tasks are here for real time </h1>
    {products?.map((product)=> (
        <div key={product._id} className="flex ga-2">
            <span>{product.name}</span>
            <span>{product.price}</span>
            
            <button onClick={async () => {
                await deleteProducts({id: product._id});
            }}
            >Delete task</button>
            </div>
            
    ))}
</div>
  )
}

export default ProductPage
