import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){ }


    render() {
        
        return (
            <main>
                <Switch>
                    <Route history={this.history} exact path='/' component={Movies}/>
                    <Route history={this.history} path='/movie/:idMovie' component={MovieDetail}/>
                </Switch>
            </main>
        )
    }
}






