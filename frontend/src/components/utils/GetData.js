import axios from 'axios';

export function GetData(path){

    let BaseUrl = 'http://localhost:8080/wp-json';
        
    return new Promise((resolve) => {
        axios.get(BaseUrl+path)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        });
    });
    
}