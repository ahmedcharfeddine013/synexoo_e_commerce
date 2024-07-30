import React from "react";

const CategoryPageForWomen = ({
  params: { category },
}: {
  params: { category: string };
}) => {
  return <div>{category}</div>;
};

export default CategoryPageForWomen;
