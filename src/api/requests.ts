import axios from 'axios';
import { Endpoints } from './endpoints';

export const Requests = {
    // news requests:
    getAllNews: async () => {
        return await axios.get(Endpoints.news);
    },
    getOneNews: async (newsId: string) => {
        return await axios.get(`${Endpoints.news}/${newsId}`);
    },

    // contacts requests:
    getContacts: async () => {
        return await axios.get(Endpoints.contacts);
    },
}