import React from 'react';
import regexLib from '../utils/regexLib';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 2
        };
    }

    render() {
        return (
            <div>
                <h2 onClick={() => this.setState({counter: this.state.counter + 1})}>Welcome to the clean webpack {this.state.counter} boilerplate!</h2>
            </div>
        )
    }
}

export default App;