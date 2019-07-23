import React, { Component } from 'react'
import Footer from '../Footer.js'
import Header from '../Header.js'
import Endpoints from '../Endpoints.js'
import EndpointHeader from '../EndpointHeader.js'
import '../stylesheets/EndpointHeader.css'

class EndpointsPage extends Component {
  constructor() {
    super();
    this.state = {
      endpoints: [
        {
          id: 1,
          route: 'GET /api/v1/resources',
          request: `credentials`,
          response: `{\n"data": [{\n"id": "2",\n"type": "resource",\n"attributes": {\n"id": 2,\n"5555555555_id": 1,\n"name": "Bright Tank 2",\n"cost": 10000.0,\n"user_id": 1,\n"active": true,\n"created_at": "2007-12-29T13:13:04.000Z",\n"updated_at": "2007-12-29T13:13:04.000Z"\n},\n"relationships": {\n"user": {\n"data": {\n"id": "1",\n"type": "user"\n}}}}],\n"included": [\n{\n"id": "1",\n"type": "user",\n"attributes": {\n"id": 1,\n"name": "Cameron Clarks",\n"phone_number": 5555555555,\n"email": "cameron_clarks@greatdivide.com",\n"role": "admin",\n"active": true,\n"created_at": "2015-11-29T00:00:00.000Z",\n"updated_at": "2019-06-01T00:00:00.000Z"\n}}]}`,
          color: "mint",
          key: 1
        },
        {
          id: 2,
          route: 'GET /api/v1/resources/:id',
          request: `credentials`,
          response: `{\n"data": {\n"id": "2",\n"type": "resource",\n"attributes": {\n"id": 2,\n"5555555555_id": 1,\n"name": "Bright Tank 2",\n"cost": 10000.0,\n"user_id": 1,\n"active": true,\n"created_at": "2007-12-29T13:13:04.000Z",\n"updated_at": "2007-12-29T13:13:04.000Z"\n},\n"relationships": {\n"user": {\n"data": {\n"id": "1",\n"type": "user"\n}}}},\n"included": [\n{\n"id": "1",\n"type": "user",\n"attributes": {\n"id": 1,\n"name": "Cameron Clarks",\n"phone_number": 5555555555,\n"email": "cameron_clarks@greatdivide.com",\n"role": "admin",\n"active": true,\n"created_at": "2015-11-29T00:00:00.000Z",\n"updated_at": "2019-06-01T00:00:00.000Z"\n}}]}`,
          color: "mint",
          key: 2
        },
        {
          id: 3,
          route: 'POST /api/v1/resources',
          request: `{\n 5555555555_id: 1,\n name: Bright Tank 3,\n cost: 5000.00,\n user_id: 1\n}`,
          response: `{\n id: 2,\n resource_type_id: 1,\n user_id: 1,\n name: Bright Tank 2,\n cost: 5000.00,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "mint",
          key: 3
        },
        {
          id: 4,
          route: 'PATCH /api/v1/resources/:id',
          request: `{\n name: Bright Tank \n }`,
          response: `{\n id: 3,\n resource_type_id: 1,\n user_id: 1,\n name: Bright Tank 4,\n cost: 5000.00,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "mint",
          key: 4
        },
        {
          id: 5,
          route: 'GET /api/v1/resource_types',
          request: `credentials`,
          response: `[{\n id: 1,\n category: Bright Tank,\n company: Tanks.com,\n contact_number: 4444444444,\n contact_name: John Johnson,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n },\n {\n id:2,\n category: Van,\n company: Chevrolet,\n contact_number: 3333333333,\n contact_name: John Johnsonite,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }]`,
          color: "salmon",
          key: 5
        },
        {
          id: 6,
          route: 'GET /api/v1/resource_types',
          request: `credentials`,
          response: `{\n id: 1,\n category: Bright Tank,\n company: Tanks.com,\n contact_number: 4444444444,\n contact_name: John Johnson,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "salmon",
          key: 6
        },
        {
          id: 7,
          route: 'POST /api/v1/resource_types',
          request: `{\n category: Bright Tank,\n company: Tanks.com,\n contact_number: 4444444444,\n contact_name: John Johnson\n }`,
          response: `{\n id: 1,\n category: Bright Tank,\n company: Tanks.com,\n contact_number: 4444444444,\n contact_name: John Johnson,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "salmon",
          key: 7
        },
        {
          id: 8,
          route: 'PATCH /api/v1/resource_types',
          request: `{\n company: Tanks.gov\n }`,
          response: `{\n id: 1,\n category: Bright Tank,\n company: Tanks.gov,\n contact_number: 4444444444,\n contact_name: John Johnson,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "salmon",
          key: 8
        },
        {
          id: 9,
          route: 'GET /api/v1/\nresources/:resource_id/parts',
          request: `credentials`,
          response: `[{\n id: 1,\n name: lever 2000,\n inventory: 1,\n active: true,\n created_at: 2019-07-16T13:15:31.885Z,\n updated_at: 2019-07-16T13:16:16.146Z\n },\n {\n id: 2,\n name: Tank patch,\n inventory: 1,\n active: true,\n created_at: 2019-07-16T13:18:09.048Z,\n updated_at: 2019-07-16T13:18:09.048Z\n }]`,
          color: "yellow",
          key: 9
        },
        {
          id: 10,
          route: 'GET /api/v1/\nresources/:resource_id/parts/:id',
          request: `credentials`,
          response: `{\n id: 1,\n name: lever 2000,\n inventory: 1,\n active: true,\n created_at: 2019-07-16T13:15:31.885Z,\n updated_at: 2019-07-16T13:16:16.146Z\n }`,
          color: "yellow",
          key: 10
        },
        {
          id: 11,
          route: 'POST /api/v1/\nresources/:resource_id/parts',
          request: `{\n name: lever 2000,\n inventory: 1,\n }`,
          response: `{\n id: 1,\n name: lever 2000,\n inventory: 1,\n active: true,\n created_at: 2019-07-16T13:15:31.885Z,\n updated_at: 2019-07-16T13:16:16.146Z\n }`,
          color: "yellow",
          key: 11
        },
        {
          id: 12,
          route: 'PATCH /api/v1/\nresources/:resource_id/parts/:id',
          request: `{\n name: lever 4000\n }`,
          response: `{\n id: 1,\n name: lever 4000,\n inventory: 1,\n active: true,\n created_at: 2019-07-16T13:15:31.885Z,\n updated_at: 2019-07-19T13:16:16.146Z\n }`,
          color: "yellow",
          key: 12
        },
        {
          id: 13,
          route: 'GET /api/v1/\nresources/:resource_id/tickets',
          request: `credentials`,
          response: `{\ndata: [\n{\nid: 1,\ntype: ticket,\nattributes: {\nid: 1,\ntable_key: 15,\ntable_name: Resources,\nuser_id: 1,\nnotes: Lorem ipsum dolor sit amet.,\npriority: low,\nfrequency_unit: 1,\nfrequency_value: 0,\ncreated_at: 2019-06-22T22:42:12.000Z,\nupdated_at: 2019-06-22T22:42:12.000Z,\nstatus: null\n},\nrelationships: {\nuser: {\ndata: {\nid: 1,\ntype: user\n}}}}\n],\nincluded: [\n{\nid: 1,\ntype: user,\nattributes: {\nid: 1,\nname: Cameron Clarks,\nphone_number: 5555555555,\nemail: cameron_clarks@greatdivide.com,\nrole: admin,\nactive: true,\ncreated_at: 2015-11-29T00:00:00.000Z,\nupdated_at: 2019-06-01T00:00:00.000Z\n}}]}`,
          color: "purple",
          key: 13
        },
        {
          id: 14,
          route: 'GET /api/v1/\nresources/:resource_id/tickets/:id',
          request: `credentials`,
          response: `{\ndata:\n{\nid: 1,\ntype: ticket,\nattributes: {\nid: 1,\ntable_key: 15,\ntable_name: Resources,\nuser_id: 1,\nnotes: Lorem ipsum dolor sit amet.,\npriority: low,\nfrequency_unit: 1,\nfrequency_value: 0,\ncreated_at: 2019-06-22T22:42:12.000Z,\nupdated_at: 2019-06-22T22:42:12.000Z,\nstatus: null\n},\nrelationships: {\nuser: {\ndata: {\nid: 1,\ntype: user\n}}}}\n,\nincluded: [\n{\nid: 1,\ntype: user,\nattributes: {\nid: 1,\nname: Cameron Clarks,\nphone_number: 5555555555,\nemail: cameron_clarks@greatdivide.com,\nrole: admin,\nactive: true,\ncreated_at: 2015-11-29T00:00:00.000Z,\nupdated_at: 2019-06-01T00:00:00.000Z\n}}]}`,
          color: "purple",
          key: 14
        },
        {
          id: 15,
          route: 'POST /api/v1/\nresources/:resource_id/tickets',
          request: `{\n table_key: 1,\n table_name: Resources,\n user_id: 1,\n notes: needs oil change,\n priority: high,\n frequency_unit: null,\n frequency_value: null\n }`,
          response: `{\n id: 1,\n table_key: 1,\n table_name: Resources,\n user_id: 1,\n notes: needs oil change,\n priority: high,\n frequency_unit: null,\n frequency_value: null,\n created_at: 2019-07-14T17:02:17.064Z,\n updated_at: 2019-07-14T17:02:17.064Z,\n active: true\n }`,
          color: "purple",
          key: 15
        },
        {
          id: 16,
          route: 'PATCH /api/v1/\nresources/:resource_id/tickets/:id',
          request: `{\n priority: low\n }`,
          response: `{\n id: 1,\n table_key: 1,\n table_name: Resources,\n user_id: 1,\n notes: needs oil change,\n priority: low,\n frequency_unit: null,\n frequency_value: null,\n created_at: 2019-07-14T17:02:17.064Z,\n updated_at: 2019-07-14T17:02:17.064Z,\n active: true\n }`,
          color: "purple",
          key: 16
        },
        {
          id: 17,
          route: 'GET /api/v1/tickets',
          request: `credentials`,
          response: `{\ndata: [\n{\nid: 1,\ntype: ticket,\nattributes: {\nid: 1,\ntable_key: 15,\ntable_name: Resources,\nuser_id: 1,\nnotes: Lorem ipsum dolor sit amet.,\npriority: low,\nfrequency_unit: 1,\nfrequency_value: 0,\ncreated_at: 2019-06-22T22:42:12.000Z,\nupdated_at: 2019-06-22T22:42:12.000Z,\nstatus: null\n},\nrelationships: {\nuser: {\ndata: {\nid: 1,\ntype: user\n}}}}\n],\nincluded: [\n{\nid: 1,\ntype: user,\nattributes: {\nid: 1,\nname: Cameron Clarks,\nphone_number: 5555555555,\nemail: cameron_clarks@greatdivide.com,\nrole: admin,\nactive: true,\ncreated_at: 2015-11-29T00:00:00.000Z,\nupdated_at: 2019-06-01T00:00:00.000Z\n}}]}`,
          color: "purple",
          key: 17
        },
        {
          id: 18,
          route: 'GET /api/v1/tickets/1',
          request: `credentials`,
          response: `{\ndata: {\nid: 1,\ntype: ticket,\nattributes: {\nid: 1,\ntable_key: 15,\ntable_name: Resources,\nuser_id: 1,\nnotes: Lorem ipsum dolor sit amet.,\npriority: low,\nfrequency_unit: 1,\nfrequency_value: 0,\ncreated_at: 2019-06-22T22:42:12.000Z,\nupdated_at: 2019-06-22T22:42:12.000Z,\nstatus: null\n},\nrelationships: {\nuser: {\ndata: {\nid: 1,\ntype: user\n}}}},\nincluded: [\n{\nid: 1,\ntype: user,\nattributes: {\nid: 1,\nname: Cameron Clarks,\nphone_number: 5555555555,\nemail: cameron_clarks@greatdivide.com,\nrole: admin,\nactive: true,\ncreated_at: 2015-11-29T00:00:00.000Z,\nupdated_at: 2019-06-01T00:00:00.000Z\n}}]}`,
          color: "purple",
          key: 18
        },
        {
          id: 19,
          route: 'GET /api/v1/\nresources/:resource_id/notes',
          request: `credentials`,
          response: `{\n"data": [\n{\n"id": "3",\n"type": "note",\n"attributes": {\n"id": 3,\n"table_name": "Resources",\n"table_key": 2,\n"content": "Ut enim ad minim veniam.",\n"user_id": 1,\n"active": true,\n"created_at": "2019-07-02T12:23:34.000Z",\n"updated_at": "2019-07-02T12:23:34.000Z"\n},\n"relationships": {\n"user": {\n"data": {\n"id": "1",\n"type": "user"\n}}}}],\n"included": [\n{\n"id": "1",\n"type": "user",\n"attributes": {\n"id": 1,\n"name": "Cameron Clarks",\n"phone_number": 5555555555,\n"email": "cameron_clarks@greatdivide.com",\n"role": "admin",\n"active": true,\n"created_at": "2015-11-29T00:00:00.000Z",\n"updated_at": "2019-06-01T00:00:00.000Z"\n}}}`,
          color: "pink",
          key: 19
        },
        {
          id: 20,
          route: 'GET /api/v1/\nresources/:resource_id/notes/:id',
          request: `credentials`,
          response: `{\n"data": \n{\n"id": "3",\n"type": "note",\n"attributes": {\n"id": 3,\n"table_name": "Resources",\n"table_key": 2,\n"content": "Ut enim ad minim veniam.",\n"user_id": 1,\n"active": true,\n"created_at": "2019-07-02T12:23:34.000Z",\n"updated_at": "2019-07-02T12:23:34.000Z"\n},\n"relationships": {\n"user": {\n"data": {\n"id": "1",\n"type": "user"\n}}}},\n"included": [\n{\n"id": "1",\n"type": "user",\n"attributes": {\n"id": 1,\n"name": "Cameron Clarks",\n"phone_number": 5555555555,\n"email": "cameron_clarks@greatdivide.com",\n"role": "admin",\n"active": true,\n"created_at": "2015-11-29T00:00:00.000Z",\n"updated_at": "2019-06-01T00:00:00.000Z"\n}}}`,
          color: "pink",
          key: 20
        },
        {
          id: 21,
          route: 'POST /api/v1/\nresources/:resource_id/notes',
          request: `{\n user_id: 1,\n table_key: 1,\n table_name: Resources,\ncontent: Tell Jeff before shutting off.,\n }`,
          response: `{\n id: 1,\n user_id: 1,\n table_key: 1,\n table_name: Resources,\ncontent: Tell Jeff before shutting off.,\n active: true,\n created_at: 2019-07-14T17:02:17.064Z,\n updated_at: 2019-07-14T17:02:17.064Z,\n }`,
          color: "pink",
          key: 21
        },
        {
          id: 22,
          route: 'PATCH /api/v1/\nresources/:resource_id/notes/:id',
          request: `{\n content: This machine is cranky.\n }`,
          response: `{\n id: 2,\n user_id: 1,\n table_key: 1,\n table_name: Resources,\ncontent: This machine is cranky.,\n active: true,\n created_at: 2019-07-14T17:02:17.064Z,\n updated_at: 2019-07-14T17:02:17.064Z,\n }`,
          color: "pink",
          key: 22
        },
        {
          id: 23,
          route: 'GET /api/v1/users/:id',
          request: `credentials`,
          response: `[{ \nid: 1, \nname: Cameron Clarks, \nemail: example@example.com, \npassword_digest: qp34uchon8w47yabov8ezfhpv, \nphone_number: 5555555555, \nrole: admin, \nactive: true, \ncreated_at: 2019-07-16T21:52:00.823Z, \nupdated_at: 2019-07-16T21:52:00.823Z \n}] \n`,
          color: "orange",
          key: 23
        },
        {
          id: 24,
          route: 'POST /api/v1/users',
          request: `{\n name: Cameron Clarks,\n email: example@example.com,\n password: password,\n password_confirmation: password,\n phone_number: 5555555555,\n role: admin\n }`,
          response: `{\n id: 1,\n name: Cameron Clarks,\n email: example@example.com,\n password_digest: qp34uchon8w47yabov8ezfhpv,\n phone_number: 5555555555,\n role: admin,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "orange",
          key: 24
        },
        {
          id: 25,
          route: 'PATCH /api/v1/users/:id',
          request: `{\n phone_number: 7777777777\n }`,
          response: `{\n id: 1,\n name: Cameron Clarks,\n email: example@example.com,\n password_digest: qp34uchon8w47yabov8ezfhpv,\n phone_number: 7777777777,\n role: admin,\n active: true,\n created_at: 2019-07-16T21:52:00.823Z,\n updated_at: 2019-07-16T21:52:00.823Z\n }`,
          color: "orange",
          key: 25
        },
        {
          id: 26,
          route: 'POST /api/v1/sessions',
          request: `{\n email: example@example.com\n password: password\n }`,
          response: `{\n session: {\n user_id: 6,\n name: Yennica Stout,\n role: admin\n }\n }`,
          color: "light-blue",
          key: 26
        },
        {
          id: 27,
          route: 'DELETE /api/v1/sessions/:id',
          request: `n/a`,
          response: `{\n message: "Successfully logged out."\n }`,
          color: "light-blue",
          key: 27
        }

      ]
    }
  }
  render() {
    return(
      <main className="App">
        <Header />
        <EndpointHeader />
          <div class="side-scroll">
            <Endpoints endpoints={this.state.endpoints}/>
          </div>
        <Footer />
      </main>
    )
  }
}

export default EndpointsPage;
