import AddToCartButton from "../components/AddToCartButton";

const AfterTrainFruit = ({ productItem, handleAddProduct}) => {
  const product = {
    id: "2",
    name: "AFTER TRAIN FRUIT PUNCH POST WORKOUT",
    price: 24.99,
    image: "./images/1After_Train_Fruit_Punch-1-300x300.png",
    to: "./OnlyWheyPage",
    description: "After Train has been specially formulated to aid recovery straight after a workout. with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts. After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarians",
    servings: "17 x 55g servings",
    directions: "2 x scoops with 400ml water. Consume within 20 minutes after training.",
    advice: "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
    storage: "Close tub after use. Store in a cool dry place."
  };



  return (
    <div className="product-card">
      <div>
        <img
          className="product-card-image"
          src={product.image}
          alt={product.name}
        />
        <h2 className="product-name">{product.name}</h2>
        <div className="product-price">
          <p>Price: {product.price}</p>
        </div>

        <div className="product-description">
          <h1>Description:</h1>
          <p>{product.description}</p>
        </div>
        <div className="servings-info">
          <h1>Servings:</h1>
          <p>{product.servings}</p>
        </div>
        <div className="product-directions">
          <h1>Directions:</h1>
          <p>{product.directions}</p>
        </div>
        <div>
          <h1>Advice:</h1>
          <p className="product-advice">{product.advice}</p>
        </div>
        <div>
          <h1>Storage:</h1>
          <p className="product-storage">{product.storage}</p>
        </div>

        <p className="product-ingredient">{product.ingredients}</p>
      </div>
      <AddToCartButton
        handleAddProduct={handleAddProduct}
        productItem={product}
      />
    </div>
  );
};

export default AfterTrainFruit;
