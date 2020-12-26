import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import '../components/Products.css';

class Bundle extends Component {

    onCLick(){
        alert("Bundle Created Successfully");
    }

    componentDidMount(){
    axios({
        method: 'post',
        url: 'http://localhost:8080/billhelper/bundle',
        data: JSON,
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        localStorage.setItem(response.data.data.productName,JSON.stringify(response.data.data));
      })}
    
    render() {
        return (
            <div>
    <Form on onSubmit={this.onCLick} className="form__details">
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="form__btn">Bundle Description</Form.Label>
    <Form.Control type="textarea" placeholder="Enter your bundle description.." />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label className="form__btn">Bundel amount</Form.Label>
    <Form.Control type="text" placeholder="enter your bundle amount" />
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label className="form__btn">Bundel Duration</Form.Label>
    <Form.Control type="number" placeholder="enter your bundle duration in days" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="form__btn">Bundel type</Form.Label>
    <Form.Control type="text" placeholder="enter your bundle type" />
  </Form.Group>
  <Button variant="primary" type="submit" className="form__btn">
    Create Bundle</Button>
</Form>
 </div>
        );
    }
}

export default Bundle;