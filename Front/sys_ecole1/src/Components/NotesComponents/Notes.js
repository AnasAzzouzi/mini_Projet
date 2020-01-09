import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Notes extends Component{
    state={
        notes:[],
        et:{}
    }
  componentDidMount(){

    Axios.get('http://localhost:4000/api/ListNote',{data:{ide:this.state.et._id}}).then(res=>this.setState({notes:res.data}))
    this.setState({et:this.props.et})
  }
onDeleteClick=(note)=>{
    console.log(note)
    document.getElementById(note._id).classList.toggle('hidd')
}
onSureClick=(note)=>{
 Axios.delete('http://localhost:4000/api/DeleteNote',{data:{_id: note._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(note)=>{
    document.getElementById(note._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
              <Link to="/Notes/AddNote" onClick={()=>this.props.EditStudentHandler(this.state.et)}>Ajouter une Note</Link>
            </div>
            <div class ="col-sm-10">
            {this.state.notes.map((nt)=>
                <div class="cards">
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            
                            <Card.Title>idMatiere: {nt.idmatiere} </Card.Title>
                            <Card.Text> note :{nt.note}</Card.Text>
                            <Link to="/Notes/UpdateNote" onClick={()=>this.props.EditNoteHandler(nt)}>Edit</Link><br/>
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(nt)}>Delete</Button>
                            
                            <Card.Footer className="text-muted"  class="hidd" id={nt._id}>
                                <h4>are you sure you want to delete</h4> 
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(nt)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(nt)}>sure</Button>
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
export default Notes