import type { NextApiRequest, NextApiResponse } from 'next';


export default async function products(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
      const createdProduct = await response.json();
      res.status(200).json(createdProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error creating product' });
    }

  } else if (req.method === 'GET') {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
