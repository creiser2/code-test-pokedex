import "./Content.css"
import { Component } from "react";

import Search from "./Search.js"
/**
 * Wrapper function for main display
 */
class Content extends Component {
    constructor() {
        super();
        this.state = { searchValue: "" };
    }

    searchChanged = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        return (
            <div className="content-container">
                <Search searchValue={this.state.searchValue} searchChanged={this.searchChanged}/>
            </div>
        );
    }
}

export default Content