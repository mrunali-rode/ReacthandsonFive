import "./App.css";
import Counter from "./Components/Counter";
import HoverCounter from "./Components/HoverCounter";
import PureComponent from "./Components/PureComponent";

function App() {
  return (
<div className="container">
<h1>Higher Order Component</h1>
<p>This is created using HOC</p>
<hr/>
<Counter />
<HoverCounter />
<hr/>
<p>1. A higher-order component (HOC) is an advanced technique in React for reusing component logic.<br/>2. A higher-order component is a function that takes a component and returns a new component.</p>
<hr/>
<h1>Pure Component</h1>
<hr/>
<p>This is the example of Pure Component</p>
<PureComponent/>
<hr/>
<p>A React component is considered pure if it renders the same output for the same state and props. </p>
<hr/>
</div>
  );
}

export default App;
