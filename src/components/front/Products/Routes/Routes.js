import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from "../Products";
import LoginPage from "../../../.././Pages/LoginPage";
import SignupPage from "../../../.././Pages/SignupPage";
import OnlyWhey from "../../../.././Pages/OnlyWheyPage";
import BasketPage from "../../../.././Pages/BasketPage";
import AfterTrain from "../../../.././Pages/AfterTrainPage";
import AfterTrainAdvanced from "../../../.././Pages/AfterTrainAdvancedPage";
import StageRipped from "../../../.././components/StageRippedPage";
import B4Extreme from "../../../.././Pages/B4ExtremePage";
import B4Train from "../../../.././Pages/B4TrainPage";
import B4TrainGummy from "../../../.././Pages/B4TrainGummyPage";
import AfterTrainFruit from "../../../.././Pages/AfterTrainFruitPage";
import AfterTrainBlue from "../../../.././Pages/AfterTrainBluePage";
import AfterTrainOrange from "../../../.././Pages/AfterTrainOrangePage";
import AfterAdvancedBlueCandy from "../../../.././Pages/AfterAdvancedBlueCandyPage";
import YearRound from "../../../.././Pages/YearRoundPage";
import B4ExtremeBlue from "../../../.././Pages/B4ExtremeBluePage";
import StagePumpStrawberry from "../../../.././Pages/StagePumpStrawberryPage";
import NoMoreHunger from "../../../.././Pages/NoMoreHungerPage";
import AfterAdvancedOrange from "../../../.././Pages/AfterAdvancedOrangePage";
import Contest from "../../../.././Pages/Con-TestPage";
import StageExtreme from "../../../.././Pages/StageExtremePage";
import StagePumpBlue from "../../../.././Pages/StagePumpBluePage";
import TrainingPlan from "../../../.././Pages/TraingPlanPage";
import BundleDeal1 from "../../../.././Pages/BundleDeal1Page";
import FatBurnerBundle from "../../../.././Pages/FatBurnerBundlePage";
import BundleDeal2 from "../../../.././Pages/BundleDeal2Page.js";
import Checkout from "../../../../Pages/Checkout";
import ContactPage from "../../../../Pages/ContactPage";
import TheStudioPage from "../../../../Pages/TheStudioPage";
import DietPlan from "../../../../Pages/DietPlan";
import HomePage from "../../../../Pages/HomePage";
import ProteinCataloguePage from "../../../../Pages/ProteinCataloguePage";

const AppRoutes = ({
    productItems,
    basketItems,
    handleAddProduct,
    handleRemoveProduct,
    handleBasketClearance,
    isUserLoggedIn,
    setIsUserLoggedIn,
}) => {

    const location = useLocation();

    const handleLogin = () => {
        setIsUserLoggedIn(true);
    };

    return (
        //<div>
        <Routes>
            <Route path="/HomePage" element={ <HomePage />}/>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/ProteinCataloguePage" element={ <ProteinCataloguePage handleAddProduct={handleAddProduct} /> }/>
            <Route path="/LoginPage" element={<LoginPage isLoggedIn={handleLogin} />} />
            <Route path="/SignupPage" element={<SignupPage setIsUserLoggedIn={setIsUserLoggedIn}/>} />
            <Route path="/TheStudioPage" element={<TheStudioPage />} />
            <Route
                path="/BasketPage"
                element={
                    <BasketPage
                        basketItems={basketItems}
                        handleAddProduct={handleAddProduct}
                        handleRemoveProduct={handleRemoveProduct}
                        handleBasketClearance={handleBasketClearance}
                    />
                }
            />
            <Route
                path="/"
                element={
                    <>
                        {isUserLoggedIn && <div className="welcome-message"> Welcome {location.state?.name}</div>}
                        <Products
                            productItems={productItems}
                            handleAddProduct={handleAddProduct}
                        />
                    </>
                }
            />
            <Route path="/OnlyWheyPage" element={<OnlyWhey handleAddProduct={handleAddProduct} />} />
            <Route path="/AfterTrainPage" element={<AfterTrain handleAddProduct={handleAddProduct} />} />
            <Route path="/AfterTrainAdvancedPage" element={<AfterTrainAdvanced handleAddProduct={handleAddProduct} />} />
            <Route path="/StageRippedPage" element={<StageRipped handleAddProduct={handleAddProduct} />} />
            <Route path="/B4ExtremePage" element={<B4Extreme handleAddProduct={handleAddProduct} />} />
            <Route path="/B4TrainPage" element={<B4Train handleAddProduct={handleAddProduct} />} />
            <Route path="/B4TrainGummyPage" element={<B4TrainGummy handleAddProduct={handleAddProduct} />} />
            <Route path="/AfterTrainFruitPage" element={<AfterTrainFruit handleAddProduct={handleAddProduct} />} />
            <Route path="/AfterTrainBluePage" element={<AfterTrainBlue handleAddProduct={handleAddProduct} />} />
            <Route path="/AfterTrainOrangePage" element={<AfterTrainOrange handleAddProduct={handleAddProduct} />} />
            <Route
                path="/AfterAdvancedBlueCandyPage"
                element={<AfterAdvancedBlueCandy handleAddProduct={handleAddProduct} />}
            />
            <Route path="/YearRoundPage" element={<YearRound handleAddProduct={handleAddProduct} />} />
            <Route path="/B4ExtremeBluePage" element={<B4ExtremeBlue handleAddProduct={handleAddProduct} />} />
            <Route
                path="/StagePumpStrawberryPage"
                element={<StagePumpStrawberry handleAddProduct={handleAddProduct} />}
            />
            <Route path="/NoMoreHungerPage" element={<NoMoreHunger handleAddProduct={handleAddProduct} />} />
            <Route
                path="/AfterAdvancedOrangePage"
                element={<AfterAdvancedOrange handleAddProduct={handleAddProduct} />}
            />
            <Route path="/Con-TestPage" element={<Contest handleAddProduct={handleAddProduct} />} />
            <Route path="/StageExtremePage" element={<StageExtreme handleAddProduct={handleAddProduct} />} />
            <Route path="/StagePumpBluePage" element={<StagePumpBlue handleAddProduct={handleAddProduct} />} />
            <Route path="/TraingPlanPage" element={<TrainingPlan handleAddProduct={handleAddProduct} />} />
            <Route path="/BundleDeal1Page" element={<BundleDeal1 handleAddProduct={handleAddProduct} />} />
            <Route path="/FatBurnerBundlePage" element={<FatBurnerBundle handleAddProduct={handleAddProduct} />} />
            <Route path="/BundleDeal2Page" element={<BundleDeal2 handleAddProduct={handleAddProduct} />} />
            <Route path="/Checkout" element={<Checkout basketItems={basketItems} />}/>
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/DietPlan" element={<DietPlan handleAddProduct={handleAddProduct}/>} />
        </Routes>
        //</div>
    );
};

export default AppRoutes;
