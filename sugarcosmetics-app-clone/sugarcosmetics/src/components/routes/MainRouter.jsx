import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../pages/navbar/Header";
import Footer from "../pages/footer/Footer";
import Makeup from "../pages/makeup/MakeUp";
import BreshesData from "../pages/Breshes/BreshesData";
import Lips from "../pages/makeup/Lips";
import Face from "../pages/makeup/Face";
import Delivery from "../pages/Payment/Delivery";
import MakeupKit from "../pages/Trending/MakeupKit";
import { MerchStation } from "../pages/Trending/MerchStation";
import { BestSellers } from "../pages/Trending/BestSellers";
import Slider from "../pages/Home/Slider/Slider";
import Cartsugar from "../pages/CartPage/Cartsugar";
import FaceBrushes from "../pages/Breshes/FaceBrushes";
import EyeBrushes from "../pages/Breshes/EyeBrushes";

import Payment from "../pages/Payment/Payment";
import { Skincare } from "../pages/Skincare/Skincare";
import Eye from "../pages/makeup/Eye";
import { CartStorage } from "../pages/CartPage/CartStorage";
import { SinglePage } from "../pages/SinglePageView/SinglePage";

import { SinglePageLips } from "../pages/SinglePageView/SinglePageLips";
import CheckOut from "../pages/checkout/CheckOut";
import Mask from "../pages/Skincare/Mask";

import { MyOffer } from "../pages/Offer/MyOffer";

import PaymentDelivery from "../pages/Payment/PaymentDelivery";

export const MainRouter = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };


  const handleChange = (item, d) => {
    let index = cart.indexOf(item);
    //     console.log(index);
    const arr = cart;

    arr[index].amount += d;

    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr]);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/makeup"}
          element={<Makeup handleClick={handleClick} />}
        />
        <Route path={"/lips"} element={<Lips handleClick={handleClick} />} />
        <Route path={"/face"} element={<Face handleClick={handleClick} />} />
        <Route path={"/eyes"} element={<Eye handleClick={handleClick} />} />
        <Route path="makeup/:id" element={<SinglePage />} />
        <Route path="Lips/:id" element={<SinglePageLips />} />
        <Route path="Face/:id" element={<SinglePage />} />
        <Route
          path={"/brushes"}
          element={<BreshesData handleClick={handleClick} />}
        />
        <Route
          path={"/skincare"}
          element={<Skincare handleClick={handleClick} />}
        />
        <Route path={"/masks"} element={<Mask handleClick={handleClick} />} />
        <Route path={"/trending"} element={<Makeup />} />
        <Route
          path={"/sugarmerchstation"}
          element={<MerchStation handleClick={handleClick} />}
        />
        <Route
          path={"/bestsellers"}
          element={<BestSellers handleClick={handleClick} />}
        />
        <Route
          path={"/makeupkits"}
          element={<MakeupKit handleClick={handleClick} />}
        />
        <Route
          path={"/offers"}
          element={<MyOffer handleClick={handleClick} />}
        />

        <Route
          path={"/cart"}
          element={
            <Cartsugar
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          }
        />

        <Route
          path={"/payment"}
          element={
            <Payment
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          }
        />

        <Route
          path={"/facebrushes"}
          element={<FaceBrushes handleClick={handleClick} />}
        />
        <Route
          path={"/eyebrushes"}
          element={<EyeBrushes handleClick={handleClick} />}
        />
        <Route path={"/delivery"} element={<Delivery />} />

        <Route path={"/checkout"} element={<CheckOut />} />

        <Route
          path={"/deliveryform"}
          element={
            <PaymentDelivery
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};
