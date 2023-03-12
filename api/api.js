import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002"

class MovieMadnessApi {

    static token;

    static async request(endpoint, data = {}, method = "get"){
        console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${MovieMadnessApi.token}` };
    const params = method === "get" ? data : {};

    try {
        return (await axios({ url, method, data, params, headers })).data;
      } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    static async getMovies(route, page=1) {
        const res = await this.request(`movies/${route}?page=${page}`);
        return res;

    }

    static async searchMovie(search, page=1){
        const res = await this.request(`movies/search?query=${search}&page=${page}`);
        return res.data

    }
}

export default MovieMadnessApi;