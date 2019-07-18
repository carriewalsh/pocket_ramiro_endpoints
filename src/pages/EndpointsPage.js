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
          response: `[{ \nid: 1, \nname: Cameron Clarks, \nemail: example@example.com, \npassword_digest: qp34uchon8w47yabov8ezfhpv, \nphone_number: 5555555555, \nrole: admin, \nactive: true, \ncreated_at: 2019-07-16T21:52:00.823Z, \nupdated_at: 2019-07-16T21:52:00.823Z \n}] \n`,
          color: "mint",
          key: 1
        },
        {
          id: 2,
          route: 'GET /api/v1/resources/:id',
          request: `credentials`,
          response: ` {\n id: 1,\n name: Cameron Clarks,\n email: example@example.com,\n password_digest: qp34uchon8w47yabov8ezfhpv,\n phone_number: 5555555555,\n role: admin,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }\n`,
          color: "mint",
          key: 2
        },
        {
          id: 3,
          route: 'POST Resources /api/v1/resources',
          request: `{\n resource_type_id: 1,\n name: Bright Tank 3,\n cost: 5091,\n user_id: 1,\n active: TRUE,\n created_at: 2019-'07-16T21:52:00.823Z',\n updated_at: '2019-07-16T21:52:00.823Z'\n}`,
          response: `{\n id:2,\n machine_type_id: 1,\n user_id: 1,\n name: Bright Tank 2,\n cost: 5091,\n active: TRUE,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "mint",
          key: 3
        },
        {
          id: 4,
          route: 'PATCH Resources /api/v1/resources/:id',
          request: `{\n name: Bright Tank \n }`,
          response: `{\n id:3,\n machine_type_id: 1,\n user_id: 1,\n name: Bright Tank 4,\n cost: 5091,\n active: TRUE,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "mint",
          key: 4
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
