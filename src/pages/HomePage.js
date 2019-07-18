import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Links from '../Links';
import pr_logo from '../pr_logo.png';

class HomePage extends Component {
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
          link: "http://pocketramirorails2-env.ejk9ccddbs.us-west-1.elasticbeanstalk.com/api/v1/resources",
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

export default HomePage
