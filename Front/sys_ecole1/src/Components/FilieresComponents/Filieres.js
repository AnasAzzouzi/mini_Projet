import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';
import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Filieres extends Component{
    state={
        filieres:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:4000/api/ListFiliere').then(res=>this.setState({filieres:res.data}))
  }
onDeleteClick=(flr)=>{
    console.log(flr)
    document.getElementById(flr._id).classList.toggle('hidd')
}
onSureClick=(flr)=>{
 Axios.delete('http://localhost:4000/api/DeleteFiliere',{data:{_id: flr._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(flr)=>{
    document.getElementById(flr._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Filieres/AddFiliere">Ajouter une filiere</Link>
            </div>
            <div class ="col-sm-10">
            {this.state.filieres.map((flr)=>
                <div class="cards">
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            
                            <Card.Title> {flr.nom} </Card.Title>
                            <Card.Text> Departement : {flr.departement}</Card.Text>
                            <Link to="/Filieres/UpdateFiliere" onClick={()=>this.props.EditFiliereHandler(flr)}>Edit</Link><br/>
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(flr)}>Delete</Button>
                            
                            <Card.Footer className="text-muted"  class="hidd" id={flr._id}>
                                <h4>are you sure you want to delete</h4> 
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(flr)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(flr)}>sure</Button>
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
export default Filieres