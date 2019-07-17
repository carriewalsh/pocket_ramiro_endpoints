import React, { Component } from 'react';
import Links from './Links';
import logo from './logo.svg';
import pr_logo from './pr_logo.png';
// import authors_icon from './pr_authors.png';
// import brackets_icon from './pr_brackets.png';
// import computer_icon from './pr_computer.png';
// import plus_icon from './pr_plus.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        { id: 1,
          title: "Read about the Authors",
          color: "salmon",
          link: "https://github.com/pocketramiro/",
          icon: "pr_authors.png"},
        { id: 2,
          title: "Visit Site on AWS",
          color: "purple",
          link: "https://github.com/pocketramiro/",
          icon: "pr_computer.png"},
        { id: 3,
          title: "Endpoint Documentation",
          color: "orange",
          link: "https://github.com/pocketramiro/",
          icon: "pr_brackets.png"},
        { id: 4,
          title: "Contribute to our code",
          color: "mint",
          link: "https://github.com/pocketramiro/",
          icon: "pr_plus.png"},

      ]
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <a class="logo-link" href="#">
            <img src={pr_logo} alt="PocketRamiro logo"/>
          </a>
          <a class="logo-link" href="#">
            <h1 class="right">Pocket Ramiro - Documentation</h1>
          </a>
        </header>
        <Links links={this.state.links}/>
      </main>
    )
  }
}

export default App;
