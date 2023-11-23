import React from 'react';
import {
  Form,
  InputGroup,
  Row,
  Col,
} from 'react-bootstrap';

export default class InputForm extends React.Component {
  state = {
    principal: 400000,
    rate: 3.85,
    duration: 15,
    startDate: this.initializeDate(),
    extraPayment: 0,
  };
  initializeDate() {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    return new Date(year, month + 1, 1);
  }
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    if (value) {
      this.setState({
        [name]: value,
      });
    }
  };
  submitForm = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <Form>
        <Form.Group as={Row} controlId="formPrincipalAmount">
          <Form.Label column sm="2">Principal</Form.Label>
          <Col sm="10">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
              <Form.Control
                  name="principal"
                  placeholder="Principal Amount"
                  value={this.state.principal}
                  onChange={this.changeHandler}
                  aria-label="Principal Amount"
                  aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Form.Group>

        <Form.Group className='mt-5'  as={Row} controlId="formAprPercentage">
          <Form.Label column sm="2">Interest Rate</Form.Label>
          <Col sm="10">
            <InputGroup>
              <Form.Control
                  name="rate"
                  placeholder="Annual Interest Rate"
                  value={this.state.rate}
                  onChange={this.changeHandler}
                  aria-label="Interest Rate"
                  aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
            </InputGroup>
          </Col>
        </Form.Group>

        <Form.Group  className='mt-5'  as={Row} controlId="formTermYear">
          <Form.Label column sm="2">Term</Form.Label>
          <Col sm="10">
            <InputGroup>
              <Form.Control
                  name="duration"
                  placeholder="Term in years"
                  value={this.state.duration}
                  onChange={this.changeHandler}
                  aria-label="Term"
                  aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1">years</InputGroup.Text>
            </InputGroup>
          </Col>
        </Form.Group>

        <div
        
         
          className=" get-loan-now p-2 mt-5 font-bold rounded-full ... m-auto cursor-pointer"
          onClick={this.submitForm}
        >
          Calculate
        </div>

       
      </Form>
    );
  }
}