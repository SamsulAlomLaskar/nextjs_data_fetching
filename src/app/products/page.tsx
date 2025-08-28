type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

const ProductsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("http://localhost:3001/products");
  const products = await response.json();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-grey-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">₹{product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductsPage;
