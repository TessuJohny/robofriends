import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchInput: '',
            error: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({ robots: json }));
    }

    onSearchChange = (event) => {
        this.setState({ searchInput: event.target.value });
    }

    render() {
        const { robots, searchInput } = this.state;
        const selectedRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchInput.toLowerCase());
        });

        let display;
        if (!robots.length) {
            display = <h1>L o a d i n g...</h1>;
        } else {
            display = <CardList robots={selectedRobots} />;
        }
        return (
            <div className='tc'>
                <h1 className='f1'>R o b o f r i e n d s</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        {display}
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;