import React from "react";

const CategoryPageForMen = ({
  params: { category },
}: {
  params: { category: string };
}) => {
  return <div className="h-screen flex items-center justify-center">{category}</div>;
};

export default CategoryPageForMen;
