import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

import {Title} from './components/Title'
import {SearchForm} from './components/SearchForm'
import {ResultsList} from "./components/ResultsList";
// import './App.css';
import './styles/styles.css';

// import people from './data/people';



class App extends Component {

    state = {
        count: 0,
        results: []
    };

    _handleResults = (count, results) => {
        this.setState({count, results});
    };

    _renderResults() {
        const results = this.state.results;
        const count = this.state.count;
        return <ResultsList results={results} count={count}/>
    }

    render() {
        return <div>
            <Title className="title" text={"Welcome to the Jedipedia"}/>
            <SearchForm onResults={this._handleResults}/>

            {this.state.count === 0
                ? <p>Sorry, no results found...</p>
                : this._renderResults()
            }
        </div>
    }
}

export default App;
