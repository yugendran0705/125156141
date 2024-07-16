const Product = (p) => {
  console.log(p);
  return (
    <div className="flex flex-col bg-orange-950 text-yellow-400 py-8 rounded-2xl items-center justify-center">
      <img src="/vite.svg" alt="" className="w-56" />
      <div className="font-bold text-4xl text-yellow-300">
        {p.p.productName}
      </div>
      <div>
        <span>Price: </span>
        {p.p.price}
      </div>
      <div>
        <span>Rating: </span>
        {p.p.rating}
      </div>
      <div>
        <span>Discount: </span>
        {p.p.discount}
      </div>
      <div>
        <span>Availability: </span>
        {p.p.availability}
      </div>
    </div>
  );
};

export default Product;
