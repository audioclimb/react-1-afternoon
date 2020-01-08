import React, {Component} from 'react';
export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [],
            userInput: '',
            filteredArray: []
        }
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={(e) => this.userInput(e.target.value)}/>
                <button className="confirmationButton" onClick={this.}></button>
                <span className="resultsBox filterObjectRB"></span>
            </div>
        )
    }
}