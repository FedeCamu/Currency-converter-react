import './App.css';
import CurrencyInput from "./CurrencyInput";
import Output from "./Output";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Currency</h1>
        </header>
        <main>
          <CurrencyInput />
          <Output />
        </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </div>
  );
}

export default App;
