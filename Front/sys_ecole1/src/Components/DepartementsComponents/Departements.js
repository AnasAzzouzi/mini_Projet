import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';
import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';
class Departements extends Component{
    state={
        departements:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:4000/api/ListDepartement').then(res=>this.setState({departements:res.data}))
  }
onDeleteClick=(dep)=>{
    console.log(dep)
    document.getElementById(dep._id).classList.toggle('hidd')
}
onSureClick=(dep)=>{
 Axios.delete('http://localhost:4000/api/DeleteDepartement',{data:{_id: dep._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(dep)=>{
    document.getElementById(dep._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
            <Link to="/Departements/AddDepartement">Ajouter un Departement</Link>
            </div>
            <div class ="col-sm-10">
            {this.state.departements.map((dep)=>
                <div class="cards">
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            
                            <Card.Title> {dep.nom} </Card.Title>
                            
                            <Link to="/Departement/UpdateDepartement" onClick={()=>this.props.EditDepartementHandler(dep)}>Edit</Link><br/>
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(dep)}>Delete</Button>
                            
                            <Card.Footer className="text-muted"  class="hidd" id={dep._id}>
                                <h4>are you sure you want to delete</h4> 
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(dep)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(dep)}>sure</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div> 
            )}
            </div>
            </div>
        );
    }
}
export default Departements