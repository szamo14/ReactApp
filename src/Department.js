import React, { Component } from "react";
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddDepModal } from './AddDepModal';
import { EditDepModal } from './EditDepModal';
import { DeleteDepModal } from './DeleteDepModal';


export class Department extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false, editDepModal: false }



    }

    refreshList() {
        fetch('http://localhost:5115/api/Department')
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
        const { deps, depid, depname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        let deleteModalClose = () => this.setState({ deleteModalShow: false });
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>DepartmentId</th>
                            <th>DepartmentName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr key={dep.DeparmentId}>
                                <td>{dep.DeparmentId}</td>
                                <td>{dep.DepartmentName}</td>
                                <td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button className="mr-2" variant='info'
                                                onClick={() => this.setState({ editModalShow: true, depid: dep.DeparmentId, depname: dep.DepartmentName })}>
                                                Edit
                                            </Button>

                                            <EditDepModal show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                depid={depid}
                                                depname={depname}
                                            />
                                        </ButtonToolbar>
                                    </td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button className="mr-2" variant='danger'
                                                onClick={() => this.setState({ deleteModalShow: true, depid: dep.DeparmentId })}>
                                                Delete
                                            </Button>

                                            <DeleteDepModal show={this.state.deleteModalShow}
                                                onHide={deleteModalClose}
                                                depid={depid}

                                            />
                                        </ButtonToolbar>
                                    </td>
                                </td>

                            </tr>)}
                    </tbody>
                </Table >

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Department</Button>

                    <AddDepModal show={this.state.addModalShow}
                        onHide={addModalClose} />

                </ButtonToolbar>



            </div >
        )
    }
}