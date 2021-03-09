import '../resources/css/form.css';
import Table from 'react-bootstrap/Table'

const App = () => {
    return(
        <div className="container-lg">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2><b>Professionals</b></h2></div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                            </div>
                        </div>
                    </div>
                    <Table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last name</th>
                                <th>DNI</th>
                                <th>Cellphone</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan</td>
                                <td>Campos</td>
                                <td>71447248</td>
                                <td>962658500</td>
                                <td>juanmcm2oo1@gmail.com</td>
                                <td>
                                    <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                    <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                                </td>
                            </tr>
                                  
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default App;