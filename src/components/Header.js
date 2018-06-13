import React, { Component } from 'react';
import '../styles/css/Header.css'
//import * as Services from '../services/Services'
//import { link } from 'fs';
//import * as _ from 'lodash'

export default class Header extends Component {

    constructor(props){
        super(props)
    }
    
    state = {
        data: null,
        val: "",
        hideBtn: true
    }

    componentWillReceiveProps(nextProps){
        console.log('next =>',  nextProps); //here you get your props
    }

    render() {
    console.log('props=>', this.props)
    const showBtn = {display: ((!this.state.val || this.state.hideBtn) ? 'none' : 'inline-block')}
    console.log(showBtn)
        return (
            <div className={"search__container"}>
                <input name="search" className={"search__ipt"} type="text" placeholder={"Serach Movie"} onChange={this.onChangeSearch} onKeyPress={this._handleKeyPress}/>
                <button style={showBtn} title={"undo search"} onClick={this.clearSearch} >X</button>
                <div className={"search__reuslts-container"}>
                    <ul className={"search__reuslts-list-container"} style={{display: 'none'}}>
                        {this.state.data && this.state.data.length > 0 &&
                        this.state.data.map((movie, i) => (
                         <li key={i} className={"search__reuslts-list-item"}>
                            <a href={`/company/${movie.id}`}> {movie.name}  </a>
                         </li>
                        )) }
                    </ul>
                </div>
            </div>  
        )
    }

    clearSearch = () => {
        this.props.loadFilms()
        this.setState({hideBtn: true})
        document.querySelector("[name='search']").value = '';
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter!')
            if(this.state.val) {        
                this.props.searchValue(this.state.val)                
            }
          }
    }

    onChangeSearch = (e) => {        
        let val = e.target.value;
        if(val) {        
            this.setState({hideBtn: false, val});        
        }
    }

    test = () => {
        
    }
}