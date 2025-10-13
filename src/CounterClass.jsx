import React, {Component} from "react";

export default class CounterClass extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    increment = () => this.setState({count: this.state.count + 1});
    decrement = () => {
        if (this.state.count > 0) this.setState({count: this.state.count - 1})}; 
    render() {
        return(
            <div className="flex flex-col items-center">
      <p className="text-6xl font-bold text-[#2563eb] mb-8">{this.state.count}</p>
      <div className="flex gap-4">
        <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-3xl font-semibold px-6 py-2 rounded-lg shadow transition-all" onClick={this.decrement}>
          -
        </button>
        <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-3xl font-semibold px-6 py-2 rounded-lg shadow transition-all" onClick={this.increment}>
          +
        </button>
      </div>
    </div>
        )
    }
}