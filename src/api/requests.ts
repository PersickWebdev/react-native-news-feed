import axios from 'axios';
import { Endpoints } from './endpoints';

import { INews } from '../types/interfaces';

export const Requests = {
    // news requests:
    getAllNews: async () => {
        return await axios.get(Endpoints.news);
    },
    getOneNews: async (newsId: string) => {
        return await axios.get(`${Endpoints.news}/${newsId}`);
    },
    addOneNews: async (newNews: INews) => {
        return await axios.post(Endpoints.news, newNews);
    },
    removeOneNews: async (newsId: string) => {
        return await axios.delete(`${Endpoints.news}/${newsId}`);
    },

    // contacts requests:
    getContacts: async () => {
        return await axios.get(Endpoints.contacts);
    },

    // admin requests:
    getAdminData: async () => {
        return await axios.get(Endpoints.admin);
    }
}