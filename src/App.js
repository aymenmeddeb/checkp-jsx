import logo from './logo.svg';
import './App.css';
import lonelyman  from "./lonelyman.jpg";
import  './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
      <h1 className="title-red"> {'MEDDEB'} </h1>
      <br/>
      <img  src={lonelyman.jpg}  alt='lo' />
<br/>
<img src="/logo192.png"/ >
<br/>
      </header>
    </div>
  );
}

export default App;
