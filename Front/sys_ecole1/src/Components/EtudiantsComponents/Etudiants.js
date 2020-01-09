import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';
import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Etudiants extends Component{
    state={
        students:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:4000/api/ListEtudiant').then(res=>this.setState({students:res.data}))
  }
onDeleteClick=(std)=>{
    console.log(std)
    document.getElementById(std._id).classList.toggle('hidd')
}
onSureClick=(std)=>{
 Axios.delete('http://localhost:4000/api/DeleteEtudiant',{data:{_id: std._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(std)=>{
    document.getElementById(std._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Etudiants/AddEtudiant">Ajouter Etudiant</Link>
            </div>
            <div class ="col-sm-10">
            {this.state.students.map((std)=>
                <div class="cards">
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Img variant="top" src={"https://robohash.org/"+Math.random()*1000}/>
                            <Card.Title> {std.nom} {std.prenom}</Card.Title>
                            <Card.Text> Date de Naissance : {std.dNaiss}</Card.Text>
                            <Card.Text> CIN : {std.CIN}</Card.Text>
                            <Card.Text> CNE : {std.CNE}</Card.Text>
                            <Card.Text> Filiere : {std.filiere}</Card.Text>
                            <Link to="/Etudiants/UpdateEtudiant" onClick={()=>this.props.EditStudentHandler(std)}>Edit</Link><br/>
                            <Link to="/Etudiants/DetailEtudiant" onClick={()=>this.props.EditStudentHandler(std)}>Details</Link><br/>
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(std)}>Delete</Button>
                            
                            <Card.Footer className="text-muted"  class="hidd" id={std._id}>
                                <h4>are you sure you want to delete</h4> 
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(std)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(std)}>sure</Button>
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
export default Etudiants