import React, {Component} from "react";

class App extends Component {
    state = {
        result: ''
    };

    onSubmit(e) {
        e.preventDefault();

        let words = e.target.elements.palindrome.value.toLowerCase().trim();
        let palindromes = words.split('').reverse().join('');

        words ? this.setState({result: `${words} is palindrome`}) : alert("Error: Please input the word");
        if (words !== palindromes) return this.setState({result: `${words} is not a palindrome`});
    }

    render() {
        return (
            <div className="container header-down">
                <div className="row">
                    <div className="col s12">
                        <h2>Palindrome Checking Word</h2>
                        <p className="flow-text">Palindrome is a word, phrase, or sequence that reads the same backwards as forwards, <i>e.g. madam or racecar or ABBA or tacocat.</i></p>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <label>Check the word:</label>
                            <input type="text" name="palindrome" placeholder="Type a word..."/>
                            <button className="btn">Check now</button>
                        </form>
                        <h5>{this.state.result && this.state.result}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
