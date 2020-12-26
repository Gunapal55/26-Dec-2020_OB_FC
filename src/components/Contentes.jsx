// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import axios from 'axios';


// class Contents extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       companies: [],
//       compClick: false
//     }
//   }
//   componentDidMount(){  
//   axios({
//       method: 'get',
//       url: 'http://localhost:8080/billhelper/products',
//     }).then(response => {
//       this.setState({ companies: response.data.data });
//       console.log(this.state.response);
//     }).catch(err => {
//       console.log(err);
//     })
  
// }
//   render() {



//   }
// }
// export default withRouter(Contents);