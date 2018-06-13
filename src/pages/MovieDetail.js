import React, { Component } from 'react';
import * as Constants from '../utils/Constants'
import * as Services from '../services/Services'
import '../styles/css/MovieDetail.css'

export default class MovieDetail extends Component {

    state = {
        data: null
    }

    componentDidMount(){
        this.loadMovie()
    }


    loadMovie = () => {
        const idMovie = this.props.match.params.idMovie;
        Services.movieDetail(idMovie, this.populateDetailMoviePage)
    }

    populateDetailMoviePage = (data) => {
        this.setState({data}, () => console.log('this.state.data => ', this.state.data))
    }

    render() {
        console.log(this.state.data)
        return (
            <div className={"movie-detail__container"}>
                <div className={"movie-detail__img-container"}>
                    <img className={"movie-detail__img"} src={this.state.data && (Constants.img_detail_movie_base_url + this.state.data.poster_path)} />
                </div>
                <div className={"movie-detail__info-container"}>
                    <h1 className={"movie-detail__title"}>{this.state.data && this.state.data.original_title}</h1>
                    <p className={"movie-detail__info-txt"}>Vore average: <span>{this.state.data && this.state.data.vote_average}</span></p>   
                    <p className={"movie-detail__info-txt"}>Release date: <span>{this.state.data && this.state.data.release_date}</span></p>
                </div>

                <div className={"movie-detail__overvie-container"}>
                    <p className={"movie-detail__info-txt"}>{this.state.data && this.state.data.overview}</p>
                </div>
            </div>
        )
    }
}


