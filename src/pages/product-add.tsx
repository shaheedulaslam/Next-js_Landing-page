import React from 'react';
import ProductTable from '@/components/ProductTable';
import ProductForm from '@/components/ProductForm';




export default function ProductAdd() {
  return (
    <div>    
      {/* <ProductForm/> */}
      <ProductForm/>
      <ProductTable /> 
    </div>
  );
}

