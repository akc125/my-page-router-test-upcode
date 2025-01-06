import React, { Suspense } from "react";
import { Card, Container } from "@mui/material";
import ProductService from "../services/product-services";
import Image from "next/image";

export async function getStaticProps() {
  const data = await ProductService.getProduct();
  return {
    props: { products: data },
  };
}

 function Products({ products }: { products: any[] }) {
  return (
    <Container maxWidth="lg">
      <Suspense fallback={<span>Loading...</span>}>
        {products?.map((product) => (
          <Card
            key={product.id}
            style={{ marginBottom: "10px", padding: "15px" }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              style={{ borderRadius: "8px" }} // Optional styling
            />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </Card>
        ))}
      </Suspense>
    </Container>
  );
}

export default Products;
