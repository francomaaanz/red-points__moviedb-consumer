import React, { Component } from 'react';

import '../styles/css/Paginator.css'

export default class Paginator extends Component {
    render() {
        return (
            <div className="paginator"> 
                <button disabled={this.props.page < 2} className="paginator__back-btn" onClick={this.props.back}>Back</button>
                <input  className="paginator__actual-page" value={(this.props.page) ? this.props.page : ''} onChange={this.changePage}/>  
                <button className="paginator__next-btn" onClick={this.props.next}>Next</button>
            </div>             
        )
    }
}