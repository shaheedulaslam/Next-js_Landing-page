import React, { useEffect, useState } from 'react'

  const BASE_URL = 'http://localhost:3000';

  export const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/products`);
      const products = await response.json();
      return products;
    } catch (error) {
      console.log('Error fetching products:', error);
      throw error;
    }
  };
  
  const ProductTable: React.FC = () => {
    const [products, setProducts] = useState<IproductBody[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedProducts = await fetchProducts();
          setProducts(fetchedProducts);
          console.log(fetchedProducts,"okkkk done");
          
        } catch (error) {
          console.log('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
      <div className='container px-6'>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-96 px-4 py-2">Name</th>
              <th className="w-1/4 px-4 py-2">Price</th>
              <th className="w-1/4 px-4 py-2">Category</th>
              <th className="w-1/4 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product ,index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default ProductTable