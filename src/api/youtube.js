import axios from "axios";

const KEY = "AIzaSyCRSr9RR9jRglD8lnz82AqpVwCIqDvWxmE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
