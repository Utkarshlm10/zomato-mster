import React from "react";
import Slider from "react-slick";

// components
import DeliveryCatagory from "./DeliveryCatagory";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DeliveryCarousal = () => {
      const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "biryani",
    },   
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
     {
      image:
        "https://b.zmtcdn.com/data/pictures/3/19094063/ca519189f721caf9016b63549b224d3b_o2_featured_v2.jpg",
      title: "Sandwich",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/06a/af146087e76aed8c0baa90a84a6f206a.jpg",
      title: "Sagu",
    },
     {
      image:
        "https://b.zmtcdn.com/data/pictures/9/19849319/530a334ab904c0f79ceba40f283dfe73_o2_featured_v2.jpg",
      title: "Coffee",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/9/19864719/a54999643b3a44e1c049f60f3dd23bb9_o2_featured_v2.jpg",
      title: "Kulcha",
    },
  ];

    const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
  return (
    <>
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-bold">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCatagory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCatagory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousal;
