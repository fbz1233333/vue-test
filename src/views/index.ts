import axios from 'axios'

export function getDemoList() {
    return axios.get("/app/demo/list")
}