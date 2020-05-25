import axios from 'axios';
const API_URL = 'http://localhost:8080';
const jwtToken = sessionStorage.getItem("jwt"); 
export default class BooksService {

    getBooks() {
          
        const url = `${API_URL}/api/books/`;
        alert('token ' + jwtToken)
        return axios.get(url, 
            {
                headers:{
                Authorization: 'Bearer ' + jwtToken 
                }
            }
    ).then(response => response.data);
    }

    getBooksByURL(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url,             {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }).then(response => response.data);
    }
    getBook(pk) {
        const url = `${API_URL}/api/books/${pk}`;
        return axios.get(url,             {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }).then(response => response.data);
    }
    deleteBook(Book) {
        const url = `${API_URL}/api/books/${Book.pk}`;
        return axios.delete(url,             {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        });
    }
    createBook(Book) {
        const url = `${API_URL}/api/insert_book/`;
        return axios.post(url,            {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }, Book);
    }
    updateBook(Book) {
        const url = `${API_URL}/api/books/${Book.pk}`;
        return axios.put(url,            {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }, Book);
    }
}