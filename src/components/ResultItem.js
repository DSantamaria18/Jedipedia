import React, {Component} from 'react';

export class ResultItem extends Component {
    render() {
        const {item} = this.props;
        return <li>{item.name}</li>
    }
}