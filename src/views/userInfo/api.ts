import axios from 'axios'

export function getrUserInfoList() {
    return axios.get("/app/userInfo/list")
}
export function dorUserInfoAdd(p) {
    return axios.post('/app/userInfo',p)
}

export function dorUserInfoEdit(p) {
    return axios.put('/app/userInfo',p)
}
