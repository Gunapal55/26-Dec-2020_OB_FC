import axios from "axios";
import React, { useState, useEffect } from "react";
import {
Form,
Button,
Row,
FormGroup,
Col,
InputGroup,
Spinner,
Alert,
Popover,
OverlayTrigger,
} from "react-bootstrap";



const AddProduct = (props) => {
const [typelist, setTypelist] = useState([]);
const [pro, setPro] = useState({ status: { status: "pndg" } });
const [alert, setAlert] = useState();
const [popttl, setpopttl] = useState("sample");
const [popmsg, setpopmsg] = useState("sample");

const popover = (
<Popover id="popover-basic">
<Popover.Title as="h1">{popttl}</Popover.Title>
<Popover.Content>{popmsg}</Popover.Content>
</Popover>
);

useEffect(() => {
axios.get("http://localhost:8080/billhelper/products").then((res) => {
console.log(res);
console.log(res.data.response);
setTypelist(res.data.response);
});
}, []);


useEffect(() => {}, [popttl]);

const product = (e) => {
e.preventDefault();
setAlert(<Spinner animation="border" variant="success" />);
console.log(pro);
axios.post("http://localhost:8080/billhelper/products",pro).then((res) => {
console.log(res);
console.log(res.data);
if (res.data.error) {
setAlert(
<Alert variant="danger">Unable to add the product! please Try Later</Alert>
);
window.scrollTo({ top: 0, behavior: "smooth" });
} else {
setAlert(
<Alert variant="success">
New Product Added Successfully
</Alert>
);
document.product.reset();
window.scrollTo({ top: 0, behavior: "smooth" });
}
});
};

return (
<div className="card card-body offset-md-2 col-md-8 mt-5 appblock">
<div>{alert}</div>
<Form name="product" onSubmit={product}>
<h1>Product</h1>
<hr />
<Form.Group as={Row}>
<Col>
<Form.Label>Product Name</Form.Label>
<OverlayTrigger
trigger="focus"
placement="bottom"
overlay={popover}
>
<Form.Control
required
onClick={() => {
setpopttl("Product Name");
}}
onChange={(e) => {
const val = e.target.value;
setPro((prevState) => {
return { ...prevState, productName: val };
});
}}></Form.Control>
</OverlayTrigger>
</Col>
<Col>
<Form.Label>Product Type</Form.Label>
<OverlayTrigger
trigger="focus"
placement="bottom"
overlay={popover}
>
<Form.Control
required
onClick={() => {
setpopttl("Product Type");
}}
onChange={(e) => {
const val = e.target.value;
setPro((prevState) => {
return { ...prevState, productType: val };
});
}}
></Form.Control>
</OverlayTrigger>
</Col>
</Form.Group> 
<Button
type="submit"
variant="success"
className="offset-md-5"
onClick={product}
>
Add Product
</Button>
</Form>
</div>
);
};
export default AddProduct;