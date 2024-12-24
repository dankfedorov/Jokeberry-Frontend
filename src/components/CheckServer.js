import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "http://188.130.154.26:5000/express_backend"
    );
    console.clear();
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData()