import axios from "axios"

export const getImg = function (size=1) {
    return axios.get(`http://localhost:8888/api/img?size=${size}`)
}