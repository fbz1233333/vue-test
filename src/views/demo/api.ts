import axios from 'axios'

export function getKhxxList() {
    return axios.get("/app/demo/list")
}
export function doKhxxAdd(p) {
    return axios.post('/app/demo',p)
}

export function doKhxxEdit(p) {
    return axios.put('/app/demo',p)
}

export function doKhxxDelete(p) {
    return axios.delete('/app/demo/'+p.id)
}