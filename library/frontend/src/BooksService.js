import axios from 'axios';
const API_URL = 'http://localhost:8000';
export default class BooksService{

    constructor(){}

    getBooks() {
        const url = `${API_URL}/api/books/`;
        return axios.get(url).then(response => response.data);
    }  

    getBooksByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getBook(pk) {
        const url = `${API_URL}/api/books/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteBook(Book){
        const url = `${API_URL}/api/books/${Book.pk}`;
        return axios.delete(url);
    }
    createBook(Book){
        const url = `${API_URL}/api/books/`;
        return axios.post(url,Book);
    }
    updateBook(Book){
        const url = `${API_URL}/api/books/${Book.pk}`;
        return axios.put(url,Book);
    }
}