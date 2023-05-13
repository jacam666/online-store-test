const OnlyWheyPage = () => {
  const product = {
    id: "1",
    name: "THE ONLY WHEY 2.2KG 74 servings",
    price: 39.99,
    image: "./images/only-whey-final-300x300.png",
    to: "./OnlyWheyPage",
    description: ["The Only Whey protein shake has been developed to offer a",<br/>,
    "premium protein powder which can only be expected of SNC. Each",<br/>,
    "serving delivers up to 24% of protein from instantized whey",<br/>,
    "protein concentrate, Whey protein isolate and Hydrolysed Whey",<br/>,
    "Protein to feed muscle tissue growth and aid recovery for",<br/>,
    "optimum results."],
  };

  return (
    <div className="product-card">
        <div>
            <img className="product-card-image" src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="product-price">Price: {product.price}</p>
            <p className="product-description">{product.description}</p>
            <p className="servings-info">{product.servings}</p>
            <p className="product-directions">{product.directions}</p>
            <p className="product-advice">{product.advice}</p>
            <p className="product-storage">{product.storage}</p>
        </div>
    </div>
  )
};

export default OnlyWheyPage;




