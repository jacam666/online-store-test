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
    console.log("Location State:", location.state);

    const handleLogin = () => {
        setIsUserLoggedIn(true);
    };

    return (
        //<div>
        <Routes>
            <Route path="/LoginPage" element={<LoginPage isLoggedIn={handleLogin} />} />
            <Route path="/SignupPage" element={<SignupPage setIsUserLoggedIn={setIsUserLoggedIn}/>} />
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
            <Route path="/OnlyWheyPage" element={<OnlyWhey />} />
            <Route path="/AfterTrainPage" element={<AfterTrain />} />
            <Route path="/AfterTrainAdvancedPage" element={<AfterTrainAdvanced />} />
            <Route path="/StageRippedPage" element={<StageRipped />} />
            <Route path="/B4ExtremePage" element={<B4Extreme />} />
            <Route path="/B4TrainPage" element={<B4Train />} />
            <Route path="/B4TrainGummyPage" element={<B4TrainGummy />} />
            <Route path="/AfterTrainFruitPage" element={<AfterTrainFruit />} />
            <Route path="/AfterTrainBluePage" element={<AfterTrainBlue />} />
            <Route path="/AfterTrainOrangePage" element={<AfterTrainOrange />} />
            <Route
                path="/AfterAdvancedBlueCandyPage"
                element={<AfterAdvancedBlueCandy />}
            />
            <Route path="/YearRoundPage" element={<YearRound />} />
            <Route path="/B4ExtremeBluePage" element={<B4ExtremeBlue />} />
            <Route
                path="/StagePumpStrawberryPage"
                element={<StagePumpStrawberry />}
            />
            <Route path="/NoMoreHungerPage" element={<NoMoreHunger />} />
            <Route
                path="/AfterAdvancedOrangePage"
                element={<AfterAdvancedOrange />}
            />
            <Route path="/Con-TestPage" element={<Contest />} />
            <Route path="/StageExtremePage" element={<StageExtreme />} />
            <Route path="/StagePumpBluePage" element={<StagePumpBlue />} />
            <Route path="/TraingPlanPage" element={<TrainingPlan />} />
            <Route path="/BundleDeal1Page" element={<BundleDeal1 />} />
            <Route path="/FatBurnerBundlePage" element={<FatBurnerBundle />} />
            <Route path="/BundleDeal2Page" element={<BundleDeal2 />} />
            <Route path="/Checkout" element={<Checkout basketItems={basketItems} />}/>
        </Routes>
        //</div>
    );
};

export default AppRoutes;
