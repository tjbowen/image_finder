import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a3f32379e3fa7b5c2325a3b99c6101c18b2537b4987c2609b6a14cb973695540'
    }
});