import React, {Component} from 'react';

export class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            resource: "people"
        };
    }

    _handleInputChange = (e) => {
        e.preventDefault();
        this.setState({inputName: e.target.value})
    };

    _handleComboChange = (event) => {
        let resource = event.target.value;
        this.setState({resource});
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
                <div className="field is-horizontal has-addons has-addons-centered search-form">

                    <div className="field-label is-normal">
                        <label className="label has-text-white has-text-right">I'm looking for a </label>
                    </div>

                    <div className="field-body">
                        <div className="field">
                            <span className="select">
                                <select onChange={this._handleComboChange}>
                                    <option value="people">character</option>
                                    <option value="planets">planet</option>
                                    <option value="starships">starship</option>
                                    <option value="vehicles">vehicle</option>
                                </select>
                            </span>
                        </div>

                        <div className="field-label is-normal">
                            <label className="label has-text-white has-text-right">with name </label>
                        </div>

                        <div className="field">
                            <input className="input" type="text" placeholder="with name..."
                                   onChange={this._handleInputChange}/>
                        </div>

                        <div className="field">
                            <button type="submit" className="button is-primary">Search</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}