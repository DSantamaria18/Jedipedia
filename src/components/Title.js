import React, {Component} from 'react';

export class Title extends Component {
    render() {
        return <h1 className="title has-text-centered has-text-white header">
            {this.props.text}
        </h1>
    }
}
