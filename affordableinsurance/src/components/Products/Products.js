import React, { useEffect } from 'react';

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Products</div>;
}

export default Products;
