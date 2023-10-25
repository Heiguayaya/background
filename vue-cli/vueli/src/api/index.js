import axios from "axios"

const getImg = function () {
    return axios.get('http://localhost:8888/api/img')
}