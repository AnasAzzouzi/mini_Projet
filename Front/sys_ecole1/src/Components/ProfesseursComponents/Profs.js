import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';
import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Profs extends Component{
    state={
        profs:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:4000/api/ListProf').then(res=>this.setState({profs:res.data}))
  }
onDeleteClick=(prof)=>{
    console.log(prof)
    document.getElementById(prof._id).classList.toggle('hidd')
}
onSureClick=(prof)=>{
 Axios.delete('http://localhost:4000/api/DeleteProf',{data:{_id: prof._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(prof)=>{
    document.getElementById(prof._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Professeurs/AddProfesseur">Ajouter un Professeur</Link> 
            </div>
            <div class ="col-sm-10">
            {this.state.profs.map((prof)=>
                <div class="cards">
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Img variant="top" src={"https://robohash.org/"+Math.random()*1000}/>
                            <Card.Title> {prof.nom} {prof.prenom}</Card.Title>
                            <Card.Text> CIN : {prof.CIN}</Card.Text>
                            <Card.Text> CP : {prof.CP}</Card.Text>
                            <Card.Text> Departement : {prof.departement}</Card.Text>
                            <Link to="/Professeurs/UpdateProf" onClick={()=>this.props.EditProfHandler(prof)}>Edit</Link><br/>
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(prof)}>Delete</Button>
                            
                            <Card.Footer className="text-muted"  class="hidd" id={prof._id}>
                                <h4>are you sure you want to delete</h4> 
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(prof)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(prof)}>sure</Button>
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
export default Profs