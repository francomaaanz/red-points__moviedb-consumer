import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import MovieListItem from '../components/MovieListItem'
import Paginator from '../components/Paginator'
import Header from '../components/Header'
import * as Services from '../services/Services'

class Movies extends Component {
    state = {
        data: null
    }
    
    componentDidMount(){
        this.loadFilms();
    }

    loadFilms = () => {    
        Services.getMovies(this.populateMovies);
    }

    populateMovies = (data) => {
        this.setState({data});
    }

    back = () => {
        Services.getListOfMoviesNetxBackPage(this.state.data.page - 1, this.populateMovieList)
    }
    
    next = () => {
       Services.getListOfMoviesNetxPage(this.state.data.page + 1, this.populateMovieList)
    }

    populateMovieList = (data) => {
        console.log('data', data)
        this.setState({data})
    }

    searchValue = (data) => {
        if(data) {
            Services.searchForMovie(data, this.populateMovieList)
        } else {
            this.loadFilms();
        }
    }
    
    render() {
        
        return (
            <div>                    
                <Header searchValue={this.searchValue} loadFilms={this.loadFilms} />
                <div className={"movies"}> 
                    {this.state.data && this.state.data.results.length > 0 
                    && this.state.data.results.map((item, i) => <MovieListItem key={i} movie={item} />)}
                </div>             

                <Paginator  next={this.next} 
                            back={this.back} 
                            totalPages={this.state.data && this.state.data.total_pages}
                            page={this.state.data && this.state.data.page}                         
                />
                
            </div>
        )
    }

}

export default withRouter(Movies)