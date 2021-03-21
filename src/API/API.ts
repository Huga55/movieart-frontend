import axios from "axios";


const instance = axios.create({
    baseURL: "https://wimdev.ru/movie",//"http://localhost:8080/",
    headers: {
        "Content-Type" : "application/json",
    },
});

export const articlesAPI = {
    getArticles() {
        return instance.get("/").then(response => response);
    }
}