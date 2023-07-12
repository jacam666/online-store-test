import { BsFillHexagonFill } from "react-icons/bs";
import AddToCartButton from "../components/AddToCartButton";
import BasketIcon from "../BasketIcon";

const AfterTrainFruit = ({ productItem, handleAddProduct }) => {
  const product = {
    id: "2",
    name: "AFTER TRAIN FRUIT PUNCH POST WORKOUT",
    price: 24.99,
    flavour: "Fruit Punch",
    image: "/images/1After_Train_Fruit_Punch-1-300x300.png",
    to: "./OnlyWheyPage",
    description: ["After Train has been specially formulated to aid recovery straight after a workout.", <br />, " with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink.", <br />, " Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts."],/*<br/>," After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarians"],*/
    servings: "17 x 55g servings",
    directions: "2 x scoops with 400ml water. Consume within 20 minutes after training.",
    advice: ["Keep out of reach of children, Once mixed keep chilled and consume within 3 hours.", <br />, " Manufactured on equipment which processes products containing cereals, milk, egg,", <br />, " soya, shellfish."],
    storage: "Close tub after use. Store in a cool dry place."
  };



  return (
    <div>
      <BasketIcon className="product-page-basket-icon" />

      <div className="product-card">
        <div className="product-container">
          <div className="product-image-container">
            <div className="name-and-bullet-container">
              <h2 className="product-name">{product.name}</h2>
              <div className="bullet-points-container" >
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">25g of protein to support growth and maintenance of muscle</p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">23.7g of of high-quality  carbohydrates to support your growth goals</p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">2.8g of Creatine Monohydrate to help build lean muscle mass, maximize performance, and increase strength. </p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">3.7g of L-Glutamine helps enhance athletic performance and build muscle tissue</p>
                </div>
              </div>
            </div>
            <img
              className="product-card-image after-train-image"
              src={product.image}
              alt={product.name}
            />
            {/*<img className="after-train-product-card-image-2" src="images/after-train-nutri-info.jpeg" alt="protein" />*/}
          </div>

          <div className="product-card-info">
            <div className="product-flavour flavour-fruit-punch">
              <p>{product.flavour}</p>
            </div>
            <div className="product-price">
              <p>Price: {product.price}</p>
            </div>

            <div className="product-description">
              {/*<h1>Description:</h1>*/}
              <p>{product.description}</p>
            </div>
            <div className="servings-info">
              <p>{product.servings}</p>
            </div>
            <p className="product-ingredient">{product.ingredients}</p>
          </div>
          <AddToCartButton
            handleAddProduct={handleAddProduct}
            productItem={product}
          />
        </div>
      </div>
    </div>
  );
};

export default AfterTrainFruit;
