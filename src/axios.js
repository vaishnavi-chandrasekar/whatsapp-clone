import axios from "axios";

const instance = axios.create({
    baseURL:"https://mydbbackend1.herokuapp.com/"
})

export default instance