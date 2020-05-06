import React, {Component} from 'react';

export class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "lars",
            resource: "people"
        };
    }

    _handleInputChange = (e) => {
        e.preventDefault();
        this.setState({inputName: e.target.value})
    };

    _handleComboChange = (event) => {
        let resource = event.target.value;
        this.setState({resource} );
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://swapi.dev/api/${this.state.resource}/?search=${this.state.inputName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("DATA: " + data.count);
                const {count, results} = data;
                this.props.onResults(count, results)
            })
    };

    render() {
        return <div>
            <form onSubmit={this._handleSubmit}>
                <div>
                    <p>I'm looking for a </p>
                    <select id="resource-selector" onChange={this._handleComboChange}>
                        <option value="people">character</option>
                        <option value="planets">planet</option>
                        <option value="starships">starship</option>
                        <option value="vehicles">vehicle</option>
                    </select>
                </div>
                <label>name: </label>
                <input type="text" onChange={this._handleInputChange} placeholder="Name to search..."/>
                <button>Search</button>
            </form>
        </div>
    }
}