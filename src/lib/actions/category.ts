import axios from "axios";

export async function getAllCategories() {
  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
    const data = res.data();
    return data;
  } catch (error) {
    console.log("Error fetching all categories data: ", error);
  }
}
