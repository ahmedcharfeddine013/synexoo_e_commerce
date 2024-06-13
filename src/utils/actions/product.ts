import axios from "axios";
export async function fetchProducts() {
  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    const data = res.data();
    return data;
  } catch (error) {
    console.log(error);
  }
}
