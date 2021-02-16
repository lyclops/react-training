import React, { Component } from 'react';
import Counter from './counter'; 
import App from '../App';
import ReactDOM from 'react-dom';

class Counters extends Component{
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    handleDelete = (counterId) => {
        console.log(counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    }

    backHome = () => {
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    }

    render() {
        return (
             <div>
                 {this.state.counters.map(counter => <Counter key={counter.id} id = {counter.id} onDelete={this.handleDelete} value={counter.value} />)}

                 <div>
                    <button onClick={this.backHome}>Back</button>
                </div>
             </div>
             
        );
    }
}

export default Counters;