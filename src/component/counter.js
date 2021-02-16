import React, {Component} from "react";

class Counter extends Component{
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2'],
    }

    //kalo mau mau tambah eventListener harus bind dulu di constructor.
    // kalo ga mau bind, pakai arrow function
    // constructor(){
    //     super();
    //     this.increaseCount = this.increaseCount.bind(this);
    // }

    renderTag(){
        if(this.state.tags.length === 0 ) return <p>There are no tags</p>

        return <ul> { this.state.tags.map(tag => <li key={tag}>{tag}</li>) } </ul>
    }

    increaseCount(product){
        console.log(product);
        this.setState({value: this.state.value + 1});
    }

    render() {
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button onClick={() => this.increaseCount()}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </div>
        );
    }

    formatCount(){
        return this.state.value === 0 ? "Zero" : this.state.value;
    }
}

export default Counter;