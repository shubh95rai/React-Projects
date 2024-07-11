import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    const { name } = this.props;
    console.log(this)

    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 text-2xl text-neutral-300">
        <h1>Class Component</h1>
        <p>{name}</p>
        <div className="flex items-center gap-5">
          <button
            className="w-10 rounded border"
            onClick={() => {
              this.setState({ counter: counter - 1 });
            }}
          >
            -
          </button>
          <p>{counter}</p>
          <button
            className="w-10 rounded border"
            onClick={() => {
              this.setState({ counter: counter + 1 });
            }}
          >
            +
          </button>
        </div>
      </main>
    );
  }
}

export default ClassComponent;
