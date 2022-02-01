import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddEmployeeModal } from './AddEmployeeModal';
import { DeleteEmpModal } from './DeleteEmpModal';
import { EditEmpModal } from './EditEmpModal';
export class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = { emps: [], addModalShow: false, editEmployeeModal: false }

    }

    refreshList() {
        fetch('http://localhost:5115/api/Employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ emps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { emps, empid, employeename, department, dateofjoining } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        let deleteModalClose = () => this.setState({ deleteModalShow: false });

        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>Department</th>
                            <th>DateOfJoining</th>
                            <th>PhotoFileName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp =>
                            <tr key={emp.EmployeeId}>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{emp.DateOfJoining}</td>
                                <td>{emp.PhotoFileName}</td>
                                <td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button className="mr-2" variant='info'
                                                onClick={() => this.setState({ editModalShow: true, empid: emp.EmployeeId, employeename: emp.EmployeeName, department: emp.Department, dateofjoining: emp.DateOfJoining })}>
                                                Edit
                                            </Button>

                                            <EditEmpModal show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                empid={empid}
                                                employeename={employeename}
                                                department={department}
                                                dateofjoining={dateofjoining}

                                            />
                                        </ButtonToolbar>
                                    </td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button className="mr-2" variant='danger'
                                                onClick={() => this.setState({ deleteModalShow: true, empid: emp.EmployeeId })}>
                                                Delete
                                            </Button>

                                            <DeleteEmpModal show={this.state.deleteModalShow}
                                                onHide={deleteModalClose}
                                                empid={empid}

                                            />
                                        </ButtonToolbar>
                                    </td>
                                </td>

                            </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Employee</Button>

                    <AddEmployeeModal show={this.state.addModalShow}
                        onHide={addModalClose} />

                </ButtonToolbar>
            </div>
        )
    }
}