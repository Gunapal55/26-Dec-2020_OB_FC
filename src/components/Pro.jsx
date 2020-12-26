import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row';
import  Nav from 'react-bootstrap/Col';


class Pro extends Component {
    render() {
        return (
            <div>
                 <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
        <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
       <h1>h</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            </div>
                
            </div>
        );
    }
}

export default Pro;