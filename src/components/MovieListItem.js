import React, {Component} from 'react'
import '../styles/css/MovieListItem.css';
import * as Constants from '../utils/Constants'
import {
    withRouter
  } from 'react-router-dom'

class MovieListItem extends Component {
    
    redirect = () => {
        this.props.history.push('/movie/' + this.props.movie.id)
    }

    render (){
        //vote_count, id, video, vote_average, title, popularity, poster_path, 
        //original_language,original_title, genre_ids, backdrop_path, adult, overview, release_date
        const {movie} = this.props;
        return (
            <div className={"movies__list-item-container"}>
                <div>
                    <div className={"movies__img-container"}>
                        <img src={Constants.img_base_url+ movie.poster_path} width={150} alt={"poster of "+ movie.title} className={"movies__img"}/>
                    </div>
                    <div className={"movies__info-txt-container"}>
                        <div className={"movies__title-container"}>
                            <a onClick={this.redirect} className={"movies__title"}>{movie.title}</a>
                        </div>
                        
                        <div className={"movies__info-txt al-left"}>
                            <strong>Release date:</strong> {movie.release_date}
                        </div>                    
                        <div className={"movies__info-txt al-left"}>
                            <strong>Avarage vote:</strong> {movie.vote_average}
                        </div>
                        <div className={"movies__info-txt al-left"}>
                        <strong>Popularity: </strong>{movie.popularity}
                        </div>
                        <div className={"movies__info-txt al-left"}>
                            <strong>Overview: </strong>{movie.overview}
                        </div>
                    </div> 
                </div>                        
                
            </div>     
        )
    }
}

export default withRouter(MovieListItem)