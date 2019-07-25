import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer.js'
import Header from '../Header.js'
import UserViews from '../UserViews.js'
import login from '../prr_login.png'
import tickets from '../prr_tickets.png'
import ticket_create from '../prr_create_ticket.png'
import resources from '../prr_resources.png'

class UserViewsPage extends Component {
  constructor() {
    super();
    this.state = {
      userViews: [
        {
          title: "Login Page",
          color: "salmon",
          img: login,
          key: 1
        },
        {
          title: "Resources Page",
          img: resources,
          color: "purple",
          key: 2
        },
        {
          title: "Tickets Page",
          img: tickets,
          color: "mint",
          key: 3
        },
        {
          title: "Create Ticket Page",
          img: ticket_create,
          color: "yellow",
          key: 4
        }
      ]
    }
  }

  render() {
    return(
      <main className="App">
        <Header />
          <UserViews userViews={this.state.userViews} />
        <Footer />
      </main>
    )
  }
}

export default UserViewsPage;
