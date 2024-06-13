import axios from "axios";

export async function fetchCategories() {
  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
    const data = res.data();
    return data;
  } catch (error) {
    console.log(error);
  }
}
