import { Box, Container, Grid, Typography } from '@mui/material';
import CounterApp from '../../components/counter/CounterApp'
import { useEffect } from 'react';

const products = [
  {
    sku: 1234,
    title: "Product1",
    img: "www.image.com",
    price: 23_000,
    description: ""
  },
  {
    sku: 1235,
    title: "Product2",
    img: "www.image.com",
    price: 20_000,
    description: ""
  },
  {
    sku: 1236,
    title: "Product3",
    img: "www.image.com",
    price: 22_000,
    description: ""
  },
  {
    sku: 1237,
    title: "Product4",
    img: "www.image.com",
    price: 31_000,
    description: ""
  },
  {
    sku: 1238,
    title: "Product5",
    img: "www.image.com",
    price: 25_000,
    description: ""
  }
];

export const Products = () => {
  const [products, setProducts] = useState(products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      products = await response.json();
      setLoading(false);
      console.log(products);
    }
    fetchProducts();
  }, [])

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>

        {
          loading ? (<Typography variant="h1"></Typography>) : (
            products.map(({ sku, title, img, price, description }) => (
              <Grid key={sku} xs={12} md={6} lg={3}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h5">{img}</Typography>
                <Typography variant="h5">{price}</Typography>
                <Typography variant="h5">{description}</Typography>
                <CounterApp />
              </Grid>
            ))
          )
        }

      </Grid>
    </Container>
  )
}
