import '../resources/css/form.css';
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react';

const App = () => {

    const url = 'http://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState()
    //console.log(todos);

    const fetchApi = async() =>{
        const response = await fetch(url)
        const responeJSON = await response.json()

        setTodos(responeJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

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
                                    <a href="#nothing" className="edit" title="Edit" data-toggle="tooltip">
                                        <i className="material-icons">&#xE254;</i>
                                    </a>
                                    <a href="#nothing" className="delete" title="Delete" data-toggle="tooltip">
                                        <i className="material-icons">&#xE872;</i>
                                    </a>
                                </td>
                            </tr>

                            {
                                !todos ? 'Cargando...' :
                                todos.map( (todo)=>{
                                    return <tr>
                                        <td> {todo.title} </td>
                                        <td> {todo.title} </td>
                                        <td> {todo.title} </td>
                                        <td> {todo.title} </td>
                                        <td> {todo.title} </td>
                                        <a href="#nothing" className="edit" title="Edit" data-toggle="tooltip">
                                            <i className="material-icons">&#xE254;</i>
                                        </a>
                                        <a href="#nothing" className="delete" title="Delete" data-toggle="tooltip">
                                            <i className="material-icons">&#xE872;</i>
                                        </a>
                                    </tr>
                                } )
                            }
                                  
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

/*

*/

export default App;