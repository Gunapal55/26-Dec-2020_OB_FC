import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import '../components/Products.css';
import { withRouter } from "react-router";


function Products(props){


  const handleSubmitClick = (e) => {
      props.history.push('/bundle'); 
      e.preventDefault();
      
      let object = {};
      let formData=new FormData(e.target);
      formData.forEach((value,key)=>{
          object[key] = value;
          
      }
      );
      console.log(object);
      let json = JSON.stringify(object); 
      console.log(json); 


      const config = {     
          headers: { 'content-type' : "application/json" }
      }

      axios.post('http://localhost:8080/billhelper/products', json,config).then((response)=>{
           console.log(response);
         })   
         .catch((error)=>{
           console.log(error);
        });
      }
        return (
            <div>
                <Form on onSubmit={handleSubmitClick} className="form__details">
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="form__btn">Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your product name" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="form__btn">Product Type</Form.Label>
    <Form.Control type="text" placeholder="enter your product type" />
  </Form.Group>
  <Button variant="primary" type="submit" className="form__btn">
    Create Product</Button>
</Form>
 </div>
        );
    
}

export default Products;