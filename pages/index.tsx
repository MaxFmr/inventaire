import { Inter } from '@next/font/google';
import PocketBase from 'pocketbase';
import { ChangeEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_URL);

export default function Home() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const createProduct = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      quantity,
    };

    const productCreated = await pb.collection('products').create(data);
    console.log(productCreated);
  };
  return (
    <>
      <form onSubmit={createProduct}>
        <label>
          Nom
          <input type='text' onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Quantité
          <input
            type='number'
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </label>
        <input type='submit' value='valider' />
      </form>
    </>
  );
}
