const Layout = async ({ children }: { children: React.ReactNode }) => {
  const response = await fetch("http://localhost:3001/products", {
    // cache: "no-store",
  });
  const products = await response.json();
  console.log("products layout", products);

  return <>{children}</>;
};

export default Layout;
