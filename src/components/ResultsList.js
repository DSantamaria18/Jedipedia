import React, {Component} from "react";
import {ResultItem} from "./ResultItem";

export class ResultsList extends Component {

    render() {
        if (this.props.count > 0) {
            const items = this.props.results;
            return <div>
                <ul>
                    {items.map((item, index) => {
                        console.log("Procesando: " + item.name);
                        return <ResultItem key={index} item={item}/>
                    })}
                </ul>
                <p>Total Results: {this.props.count}</p>
            </div>

        } else {
            return <div>
                <p>Sorry, no results found...</p>
            </div>
        }
    }
}