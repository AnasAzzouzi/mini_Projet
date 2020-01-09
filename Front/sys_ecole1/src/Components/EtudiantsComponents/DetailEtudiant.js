import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';
import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class DetailEtudiant extends Component{
    state={
        std:{}
    }
  componentDidMount(){

    Axios.get('http://localhost:4000/api/ListEtudiant',{_id:this.props.et._id}).then(res=>this.setState({std:res.data}))
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
               
            </div>
            <div class ="col-sm-10">
                    
                
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Img variant="top" src={"https://robohash.org/"+Math.random()*1000}/>
                            <Card.Title> {this.state.std.nom} {this.state.std.prenom}</Card.Title>
                            <Card.Text> Date de Naissance : {this.state.std.dNaiss}</Card.Text>
                            <Card.Text> CIN : {this.state.std.CIN}</Card.Text>
                            <Card.Text> CNE : {this.state.std.CNE}</Card.Text>
                            <Card.Text> Filiere : {this.state.std.filiere}</Card.Text>
                            <Link to="/Etudiants/UpdateEtudiant" onClick={()=>this.props.EditStudentHandler(this.state.std)}>Edit</Link><br/>
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(this.state.std)}>Delete</Button><br/>
                            <Link to="/Notes" onClick={()=>this.props.EditStudentHandler(this.state.std)}>Note</Link>
                            
                            <Card.Footer className="text-muted"  class="hidd" id={this.state.std._id}>
                                <h4>are you sure you want to delete</h4> 
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(this.state.std)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(this.state.std)}>sure</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                
            
            </div>
            </div>
        );
    }
}
export default DetailEtudiant