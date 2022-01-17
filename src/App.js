import React, {Fragment, Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots : [],
            searchInput : ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({robots: json}));
    }

    onSearchChange = (event) => {
        this.setState({searchInput: event.target.value});
    }

    render() {
        const selectedRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return (<h1>L o a d i n g...</h1>);
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>R o b o f r i e n d s</h1>
                    <SearchBox onSearchChange={this.onSearchChange} />
                    <CardList robots={selectedRobots} />
                </div>
            );
        }
    }
}

export default App;