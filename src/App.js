import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercícios React - Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card 1" blue>
          X
        </Card>
        <Card title="Card 1" green>
          X
        </Card>
      </div>
      <div className="linha">
        <Card title="Card 2" red>
          Y
        </Card>
        <Card title="Card 2" purple>
          Y
        </Card>
      </div>
    </div>
  );
}

export default App;
