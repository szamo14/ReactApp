import React, { Component } from "react";
import { Table } from 'react-bootstrap';

export class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [] }

    }

    refreshList() {
        fetch('http://localhost:5115/api/Employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { deps } = this.state;
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
                        {deps.map(dep =>
                            <tr key={dep.EmployeeId}>
                                <td>{dep.EmployeeId}</td>
                                <td>{dep.EmployeeName}</td>
                                <td>{dep.Department}</td>
                                <td>{dep.DateOfJoining}</td>
                                <td>{dep.PhotoFileName}</td>
                                <td>Edit/Delete</td>

                            </tr>)}
                    </tbody>
                </Table>

            </div>
        )
    }
}