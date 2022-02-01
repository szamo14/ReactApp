import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class DeleteEmpModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(event) {
        event.preventDefault();


        fetch(process.env.REACT_APP_API + 'Employee' + '/' + event.target.EmployeeId.value, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                //EmployeeId: event.target.DepartmentId.value

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
                            Delete Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="EmployeeId">
                                        <Form.Label>Employee Id</Form.Label>
                                        <Form.Control type="text" name="EmployeeId" required
                                            disabled
                                            defaultValue={this.props.empid}
                                            placeholder="EmployeeId" />
                                    </Form.Group>


                                    <Form.Group>
                                        <Button varian="primaty" type="submit">
                                            Delete
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