import axios from "axios";

export async function getProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Error fetching all products: ", error);
  }
}

export async function getProductById(id: string) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(`Error fetching this products id ${id} data: `, error);
  }
}

export async function getProductsByCategoryId(categoryId: string) {
  try {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`
    );
    const data = res.data();
    return data;
  } catch (error) {
    console.log(`Error fetching this category ${categoryId} products: `, error);
  }
}

export async function getRecommendedProducts() {
  try {
    const res = await axios(
      "https://dummyjson.com/products/category/mens-shirts?limit=3"
    );
    const data = res.data.products;
    return data;
  } catch (error) {
    console.log(`Error fetching recommended products: `, error);
  }
}

export async function profuctsFetcher() {}

export const fetchMaleProducts = async () => {
  const maleCategories = [
    {
      slug: "mens-shirts",
      name: "Mens Shirts",
      url: "https://dummyjson.com/products/category/mens-shirts",
    },
    {
      slug: "mens-shoes",
      name: "Mens Shoes",
      url: "https://dummyjson.com/products/category/mens-shoes",
    },
    {
      slug: "mens-watches",
      name: "Mens Watches",
      url: "https://dummyjson.com/products/category/mens-watches",
    },
  ];

  const requests = maleCategories.map((category) => axios.get(category.url));
  const responses = await Promise.all(requests);

  const products = responses.flatMap((response) => response.data.products);
  return products;
};
