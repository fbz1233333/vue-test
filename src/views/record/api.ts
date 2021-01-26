import axios from 'axios'

export function getRecordList() {
    return axios.get("/app/record/list")
}
export function dorRecordAdd(p) {
    return axios.post('/app/record',p)
}

export function dorRecordEdit(p) {
    return axios.put('/app/record',p)
}
