import axios from  'axios' 
import * as Contants from '../utils/Constants' 

export function getListOfMoviesNetxBackPage(page, callbackOk) {
    return axios.get(`${Contants.base_url}movie/popular?${Contants.api_key}&page=${page}`)
                .then(function (response) {
                    if(response.data.results.length > 0) {
                        const data = response.data;
                        callbackOk (data);
                    }
                })
                .catch(function (error) {
                    console.log('error => ', error);
                });
 }

 export function getListOfMoviesNetxPage(page, callbackOk) {
    return axios.get(`${Contants.base_url}movie/popular?${Contants.api_key}&page=${page}`)
                .then(function (response) {
                    if(response.data.results.length > 0) {
                        const data = response.data;
                        callbackOk (data);
                    }
                })
                .catch(function (error) {
                    console.log('error => ', error);
                });
 }


 export function getMovies(callbackOk){
    return  axios.get(`${Contants.base_url}movie/popular?${Contants.api_key}`)
        .then(function (response) {
            if(response.data.results.length > 0) {
                const data = response.data;
                callbackOk(data);
            }        
        })
        .catch(function (error) {
            console.log('error => ', error);
        });
 }

 export function getMovieById(id, callbackOk) {
    return  axios.get(`${Contants.base_url}movie/${id}?${Contants.api_key}`)
        .then(function (response) {
            if(response.data.results.length > 0) {
                const data = response.data;
                callbackOk(data);
            }            
        })
        .catch(function (error) {
            console.log('error => ', error);
        });
 }

 export function searchForMovie(movie, callbackOk) {
    return  axios.get(`${Contants.base_url}search/movie?${Contants.api_key}&query=${movie}&page=1`)
        .then(function (response) {
            if(response.data.results.length > 0) {
                const data = response.data;
                callbackOk(data);
            }            
        })
        .catch(function (error) {
            console.log('error => ', error);
        });
 }

 export function movieDetail(idMovie, callbackOk) {
    return axios.get(`${Contants.base_url}movie/${idMovie}?${Contants.api_key}`)
    .then(function (response) {
        if(response.data) {
            const data = response.data
            callbackOk(data)
        }
    
    })
    .catch(function (error) {
        console.log('error => ', error);
    });

 }