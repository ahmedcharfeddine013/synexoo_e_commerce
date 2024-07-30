import React from "react";

const CategoryPageForMen = ({
  params: { category },
}: {
  params: { category: string };
}) => {
  return <div>{category}</div>;
};

export default CategoryPageForMen;
