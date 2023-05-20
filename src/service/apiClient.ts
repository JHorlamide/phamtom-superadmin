import axios from "axios";

const URL = "https://dev-api-phamtom.herokuapp.com/api/v2";

export default axios.create({
  baseURL: URL
})