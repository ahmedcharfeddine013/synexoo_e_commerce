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
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const data = res.data();
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
