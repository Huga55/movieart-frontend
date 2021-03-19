import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:8080/",
});

export const articlesAPI = {
    getArticles() {
        return instance.get("").then(response => response);
    }
}