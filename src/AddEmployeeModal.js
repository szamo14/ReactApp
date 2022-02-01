import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddEmployeeModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Employee', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                //EmployeeId: null,
                EmployeeName: event.target.EmployeeName.value,
                Department: event.target.Department.value,
                DateOfJoining: event.target.DateOfJoining.value,
                PhotoFileName: event.target.PhotoFileName.value
            })
        })
            .then(res => res.json()
                .then(result => {
                    alert(result);
                },
                    (error) => {
                        alert('Failed');
                    })
            )
    }

    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modeal-title-vcenter"
                    centered
                >
                    <Modal.Header clossebutton>
                        <Modal.Title id="contained-model-title-vcneter">
                            Add Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="EmployeeName">
                                        <Form.Label>Employee Name</Form.Label>
                                        <Form.Control type="text" name="EmployeeName" required
                                            placeholder="EmployeeName" />
                                    </Form.Group>
                                    <Form.Group controlId="Department">
                                        <Form.Label>Department Name</Form.Label>
                                        <Form.Control type="text" name="Department" required
                                            placeholder="Department" />
                                    </Form.Group>
                                    <Form.Group controlId="DateOfJoining">
                                        <Form.Label>Date Of Joining</Form.Label>
                                        <Form.Control type="text" name="DateOfJoining" //required
                                            placeholder="DateOfJoining" />
                                    </Form.Group>
                                    <Form.Group controlId="PhotoFileName">
                                        <Form.Label>PhotoFileName</Form.Label>
                                        <Form.Control type="text" name="PhotoFileName" //required
                                            placeholder="PhotoFileName" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button varian="primaty" type="submit">
                                            Add
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}