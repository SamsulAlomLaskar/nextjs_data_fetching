import { cookies } from "next/headers";
export const revalidate = 20;
// export const fetchCache = "default-cache";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

const ProductsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("http://localhost:3001/products", {
    // cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  const products = await response.json();

  const cokkieStore = cookies();
  const theme = cokkieStore.get("theme");
  console.log("myCookie", theme);

  // next cookies won't cache any fetch requests after a dynamic(cookies/headers/searchParams) function has been invoked
  /*   const detailsResponse = await fetch("http://localhost:3001/products/1", {
    // cache: "no-store",
  });
  const details = await detailsResponse.json(); */

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
          {/* <p>{details.price}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default ProductsPage;
