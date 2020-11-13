import axios from 'axios';
const API_URL = 'http://localhost:8080';
export default class BooksService {

    getBooks() {
        const jwtToken = sessionStorage.getItem("jwt");  
        const url = `${API_URL}/api/books/`;
        return axios.get(url, 
            {
                headers:{
                Authorization: 'Bearer ' + jwtToken
                }
            }
    ).then(response => response.data).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
    }

    getBooksByURL(link) {
        const jwtToken = sessionStorage.getItem("jwt"); 
        const url = `${API_URL}${link}`;
        return axios.get(url,             {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }).then(response => response.data);
    }
    getBook(pk) {
        const jwtToken = sessionStorage.getItem("jwt"); 
        const url = `${API_URL}/api/books/${pk}`;
        return axios.get(url,             {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }).then(response => response.data);
    }
    deleteBook(Book) {
        const jwtToken = sessionStorage.getItem("jwt"); 
        const url = `${API_URL}/api/books/${Book.pk}`;
        return axios.delete(url,             {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        });
    }
    createBook(Book) {
        const jwtToken = sessionStorage.getItem("jwt"); 
        const url = `${API_URL}/api/insert_book/`;
        return axios.post(url,            {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }, Book);
    }
    updateBook(Book) {
        const jwtToken = sessionStorage.getItem("jwt"); 
        const url = `${API_URL}/api/books/${Book.pk}`;
        return axios.put(url,            {
            headers:{
            Authorization: 'Bearer ' + jwtToken 
            }
        }, Book);
    }
}