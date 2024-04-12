import logo from './logo.svg';
import './App.css';

function App() {
}
async function login() {
  let url = "/";

  var http = new XMLHttpRequest();
  http.open("get", url, false, this.username, this.password);
  http.send("");

  if (http.status === 200) {
    document.cookie = `username=${this.username}`;
    window.location = "/directory";
  } else {
    this.form = { error: "Invalid login." }
  }
}

export default App;
