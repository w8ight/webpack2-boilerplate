import React from 'react';
const {PropTypes} = React;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>Welcome to the clean webpack 2 boilerplate!</h2>
            </div>
        )
    }
}

App.propTypes = {};

export default App;