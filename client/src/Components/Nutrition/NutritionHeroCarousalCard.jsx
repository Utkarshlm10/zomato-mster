import React from "react";

const NutritionCarousalCard = (props) => {
  return (
    <div className="w-full lg:h-74">
      <img
        src={props.image}
        alt="medicine"
        className="w-full h-full lg:object-cover rounded-md"
      />
    </div>
  );
};

export default NutritionCarousalCard;