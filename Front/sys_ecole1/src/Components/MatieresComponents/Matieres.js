import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';
import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Matieres extends Component{
    state={
        matieres:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:4000/api/ListMatiere').then(res=>this.setState({matieres:res.data}))
  }
onDeleteClick=(mat)=>{
    console.log(mat)
    document.getElementById(mat._id).classList.toggle('hidd')
}
onSureClick=(mat)=>{
 Axios.delete('http://localhost:4000/api/DeleteMatiere',{data:{_id: mat._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(mat)=>{
    document.getElementById(mat._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Matieres/AddMatiere">Ajouter Matiere</Link> 
            </div>
            <div class ="col-sm-10">
            {this.state.matieres.map((mat)=>
                <div class="cards">
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            
                            <Card.Title> {mat.nom} </Card.Title>
                            <Card.Text> Filiere : {mat.filiere}</Card.Text>
                            <Link to="/Matieres/UpdateMatiere" onClick={()=>this.props.EditMatiereHandler(mat)}>Edit</Link><br/>
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(mat)}>Delete</Button>
                            
                            <Card.Footer className="text-muted"  class="hidd" id={mat._id}>
                                <h4>are you sure you want to delete</h4> 
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(mat)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(mat)}>sure</Button>
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
export default Matieres