//import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <Border color="blue">
      <h2 class="title">
        WELCOME!
      </h2>
      <button>show IP</button>
      <button>show latency</button>
  </Border>
  );
}

function Border(props){
  return (
    <div className={'boarder'+props.color}>
      {props.children}
    </div>
  );
}

export default App;
