import axios from 'axios';
const API_URL = 'http://localhost:8080';
export default class AuthorsService {

    getAuthors() {
        const url = `${API_URL}/api/authors/`;
        return axios.get(url).then(response => response.data);
    }

    getAuthor(id) {
        const url = `${API_URL}/api/authors/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deleteAuthor(Author) {
        const url = `${API_URL}/api/authors/${Author.id}`;
        return axios.delete(url);
    }
    createAuthor(Author) {
        const url = `${API_URL}/api/insert_author/`;
        return axios.post(url, Author);
    }
    updateAuthor(Author) {
        const url = `${API_URL}/api/update_author/${Author.id}`;
        return axios.post(url, Author);
    }
}