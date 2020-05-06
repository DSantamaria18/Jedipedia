import React, {Component} from 'react';
import {Title} from './components/Title'
import {SearchForm} from './components/SearchForm'
import {ResultsList} from "./components/ResultsList";
import './styles/styles.css';
import 'bulma/css/bulma.css';

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

        return <div>
            <Title text={"Results"}/>
            {count === 0
                ? <p>Sorry, no results found...</p>
                : <ResultsList results={results} count={count}/>
            }
        </div>

    }

    render() {
        return <div>
            <div className="bg-image"></div>
            <div className="content">
                <Title text={"Welcome to the Jedipedia"}/>
                <SearchForm onResults={this._handleResults}/>
            </div>
            <div className="results-box">
                {this._renderResults()}
            </div>

        </div>
    }
}

export default App;
