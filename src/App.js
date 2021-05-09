import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import logo from './assets/Avatar_Logo.png';

function App() {
  return (
    <div className="App">
      <div className="pageContainer">
        <div className="searchContainer">
          <img className="logo" src={logo} alt="Avatar" />
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
