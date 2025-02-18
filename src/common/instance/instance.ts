import axios from "axios";

const token = 'e8132478-0685-4d8d-8c23-e73d7660c77e'
const apiKey = 'e96b23ce-5bf9-4df9-9d8f-68d7ac71e75d'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: {
        Authorization: `Bearer ${token}`,
        'API-KEY': apiKey
    }
})