import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1b5389114ae985b3ce7df5d12ddd7036a6117c97e7419ef1da95777545bb9ea5"
  }
});
