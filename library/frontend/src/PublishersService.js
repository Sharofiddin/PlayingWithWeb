import axios from 'axios';
const API_URL = 'http://localhost:8080';
export default class PublishersService {

    getPublishers() {
        const url = `${API_URL}/api/publishers/`;
        return axios.get(url).then(response => response.data);
    }

    getPublisher(id) {
        const url = `${API_URL}/api/publishers/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deletePublisher(publisher) {
        const url = `${API_URL}/api/publishers/${publisher.id}`;
        return axios.delete(url);
    }
    createPublisher(publisher) {
        const url = `${API_URL}/api/insert_publisher/`;
        return axios.post(url, publisher);
    }
    updatePublisher(publisher) {
        const url = `${API_URL}/api/update_publisher/`;
        return axios.post(url, publisher);
    }
}