import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header.js'
import Footer from '../Footer.js'
import Links from '../Links';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        { id: 1,
          title_1: "Read about",
          title_2: "the Authors",
          color: "salmon",
          link: "/authors",
          // link: "https://master.d3bx8qvhmbmxu.amplifyapp.com/authors",
          icon: "pr_authors.png"},
        { id: 2,
          title_1: "Visit Site",
          title_2: "as a Guest",
          color: "purple",
          link: "/user_views",
          // link: "https://master.d3bx8qvhmbmxu.amplifyapp.com/user_views",
          icon: "pr_computer.png"},
        { id: 3,
          title_1: "Endpoint",
          title_2: "Documentation",
          color: "orange",
          link: "/endpoints",
          // link: "https://master.d3bx8qvhmbmxu.amplifyapp.com/endpoints",
          icon: "pr_brackets.png"},
        { id: 4,
          title_1: "Contribute",
          title_2: "to our code",
          color: "mint",
          link: "https://github.com/pocketramiro/",
          icon: "pr_plus.png"}
      ]
    }
  }
  render() {
    return (
      <main className="App">
        <Header />
        <Links links={this.state.links}/>
        <Footer />
      </main>
    )
  }
}

export default HomePage
