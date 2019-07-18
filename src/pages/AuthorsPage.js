import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer.js'
import Header from '../Header.js'
import Authors from '../Authors.js'
import rb_circle from '../rb_circle.png'
import mks_circle from '../mks_circle.png'
import js_circle from '../js_circle.png'
import cw_circle from '../cw_circle.png'

class AuthorsPage extends Component {
  constructor() {
    super();
    this.state = {
      authors: [
        { id: 1,
          title_1: "Ryan",
          title_2: "Barnett",
          color: "yellow",
          link: "https://github.com/RyanDBarnett",
          icon: rb_circle,
          key: 1
        },
        { id: 2,
          title_1: "Michael",
          title_2: "King-Stockton",
          color: "purple",
          link: "https://github.com/KStockton",
          icon: mks_circle,
          key: 2
        },
        { id: 3,
          title_1: "Jennica",
          title_2: "Stiehl",
          color: "orange",
          link: "https://github.com/jennicastiehl/",
          icon: js_circle,
          key: 3
        },
        { id: 4,
          title_1: "Carrie",
          title_2: "Walsh",
          color: "mint",
          link: "https://github.com/carriewalsh/",
          icon: cw_circle,
          key: 4
        }
      ]
    }
  }
  render() {
    return(
      <main className="App">
        <Header />
        <Authors authors={this.state.authors}/>
        <Footer />
      </main>
    )
  }
}

export default AuthorsPage;
