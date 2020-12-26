import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ListPro extends Component {
    constructor(props) {
      super(props);
      this.state = {
      products: [],
        compClick: false
      }
    }
  
   componentDidMount(){
      
      this.setState({ compClick: true });
      axios({
        method: 'get',
        url: 'http://localhost:8080/billhelper/products',
      }).then(response => {
        this.setState({ products: response.data.data });
        console.log(this.state.products);
      }).catch(err => {
        console.log(err);
      })
    }
    render() {  
     {
        return (
          <div className="top">
            <div className="text-center bg-primary pb-4">
              <img  className="responsive" alt="User" /><br /><hr /><br />
              <h1 className="text-light user"> {(this.props.location.products.productName)}</h1>
            </div>
            <div className="text-center pt-4 pb-4">
              <button className="btn btn-outline-primary mr-3" onClick={this.handleComp}>All Products</button>
             
            </div>
            <div>
              {
                this.items = this.state.products.map(detail => {
                  if (this.state.compClick) {
                    return (
                      <>
                        <div className=" col-md-4 offset-md-4 card card-body bg-dark text-light mt-5 mb-5">
                          <h2 className="text-center cname" key={detail.productId}>{detail.productName}</h2><hr />
                          <h2 className="text-center cname" key={detail.productId}>{detail.productType}</h2><hr />
                    </div>
                      </>
                    )
                  } else {
                    return null;
                  }
                })
              }
            </div>
          </div>
        );
     
      }
    }
  }
  export default ListPro;