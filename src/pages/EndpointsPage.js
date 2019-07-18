import React, { Component } from 'react'
import Footer from '../Footer.js'
import Header from '../Header.js'
import Endpoints from '../Endpoints.js'

class EndpointsPage extends Component {
  constructor() {
    super();
    this.state = {
      endpoints: [
        {
          id: 1,
          route: 'GET /api/v1/resources',
          request: `credentials`,
          response: `[{ \nid: 1, \nname: 'Cameron Clarks', \nemail: 'example@example.com', \npassword_digest: 'qp34uchon8w47yabov8ezfhpv', \nphone_number: 5555555555, \nrole: 'admin', \nactive: true, \ncreated_at: '2019-07-16T21:52:00.823Z', \nupdated_at: '2019-07-16T21:52:00.823Z' \n}] \n`,
          color: "mint",
          key: 1
        },
        {
          id: 2,
          route: 'GET /api/v1/resources/:id',
          request: `credentials`,
          response: ` {\n id: 1,\n name: 'Cameron Clarks',\n email: 'example@example.com',\n password_digest: 'qp34uchon8w47yabov8ezfhpv',\n phone_number: 5555555555,\n role: 'admin',\n active: true,\n created_at: '2019-07-16T21:52:00.823Z',\n updated_at: '2019-07-16T21:52:00.823Z'\n }\n`,
          color: "mint",
          key: 1
        }
      ]
    }
  }
  render() {
    return(
      <main className="App">
        <Header />
          <div class="side-scroll">
            <Endpoints endpoints={this.state.endpoints}/>
          </div>
        <Footer />
      </main>
    )
  }
}

export default EndpointsPage;
