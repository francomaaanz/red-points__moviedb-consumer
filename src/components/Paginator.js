import React, { Component } from 'react';

import '../styles/css/Paginator.css'

export default class Paginator extends Component {

    state = {
        val: ""
    }

    render() {
        return (
            <div className="paginator"> 
                <button disabled={this.props.page < 2} className="paginator__back-btn" onClick={this.props.back}>Back</button>
                <input  type="number"
                    className="paginator__actual-page" defaultValue={(this.props.page) ? this.props.page : '1'} 
                    onChange={this.changePage}
                    onKeyPress={this._handleKeyPress}
                    onChange={this.onChangeSearch}
                />  
                <button className="paginator__next-btn" disabled={this.props.totalPages === this.props.page} onClick={this.props.next}>Next</button>
            </div>             
        )
    }

    onChangeSearch = (e) => {        
        let val = e.target.value;
        if(val) {        
            this.setState({val});        
        }
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter!')
            if(this.state.val) { 

                this.props.serachByPage(this.state.val)                
            }
          }
    }

}